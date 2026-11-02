// Escena de portada: el espectro sigue al cursor (secuencia de fotogramas),
// las velas titilan y la bola brilla al acercarse.
// Primero se ve una imagen fija; los fotogramas se cargan cuando la página ya está lista.
(() => {
  const escena = document.querySelector('[data-escena]');
  if (!escena) return;

  const RUTA = 'assets/escena/espectro/';
  const reducido = matchMedia('(prefers-reduced-motion: reduce)');
  const lienzo = escena.querySelector('.escena-espectro');
  const ctx = lienzo.getContext('2d');
  const luz = escena.querySelector('.escena-luz');
  const bola = escena.querySelector('.escena-bola');
  const llamas = [...escena.querySelectorAll('.escena-llama')].map((el, i) => ({ el, enciende: 1.2 + i * 0.7 + Math.random() * 0.3, fase: Math.random() * 50 }));
  const limitar = (v) => Math.min(1, Math.max(0, v));

  let meta = null, fotos = [];
  let mx = 0, mxPrevio = 0, objetivo = 0, ultimoMovimiento = -10, vel = 0, px = -1e4, py = -1e4;
  let visible = true, animando = false, t0 = 0, previo = 0;

  function ajustarLienzo() {
    if (!meta) return;
    // resolución del lienzo = tamaño en pantalla, sin pasar del original (evita el pixelado)
    const r = lienzo.getBoundingClientRect(), k = Math.min(devicePixelRatio || 1, meta.h / Math.max(1, r.height));
    lienzo.width = Math.round(r.width * k);
    lienzo.height = Math.round(r.height * k);
  }

  function pintar(f) {
    // fundido entre el fotograma anterior y el siguiente: el giro no va a saltos
    const i = Math.floor(f), k = f - i;
    ctx.clearRect(0, 0, lienzo.width, lienzo.height);
    ctx.globalAlpha = 1;
    if (fotos[i]) ctx.drawImage(fotos[i], 0, 0, lienzo.width, lienzo.height);
    if (k > 0.01 && fotos[i + 1]) {
      ctx.globalAlpha = k;
      ctx.drawImage(fotos[i + 1], 0, 0, lienzo.width, lienzo.height);
    }
    ctx.globalAlpha = 1;
  }

  function fotograma(ahora) {
    if (!animando) return;
    const t = ahora / 1000, dt = Math.min(0.05, t - previo || 0.016);
    previo = t;

    // sin cursor (móvil o quieto) se balancea solo, despacio
    const quieto = t - ultimoMovimiento > 4;
    const meta_ = quieto ? Math.sin(t * 0.35) * 0.55 : objetivo;
    mx += (meta_ - mx) * (1 - Math.exp(-dt * (quieto ? 1.2 : 3.2)));
    vel += ((mx - mxPrevio) / Math.max(dt, 0.001) - vel) * (1 - Math.exp(-dt * 6));
    mxPrevio = mx;

    // fotograma 0 = manga hacia la izquierda, centro = de frente, último = manga hacia la derecha
    pintar(limitar((mx * 1.08 + 1) / 2) * (meta.count - 1));
    lienzo.style.transform = `translate(-50%, ${Math.sin(t * 0.9) * 0.6}cqh)`;

    // velas: se encienden una a una; titilan y se inclinan con el movimiento del cursor
    for (const l of llamas) {
      const vida = limitar((t - t0 - l.enciende) / 0.5);
      const n = Math.sin(t * 11 + l.fase) * 0.5 + Math.sin(t * 23.3 + l.fase * 2) * 0.3 + Math.sin(t * 5.7 + l.fase) * 0.2;
      const inclina = Math.max(-18, Math.min(18, -vel * 7)) + n * 3;
      l.el.style.opacity = vida * (0.88 + n * 0.1);
      l.el.style.transform = `translate(-50%, -100%) rotate(${inclina}deg) scale(${(1 - n * 0.06) * (0.4 + 0.6 * vida)}, ${(1 + n * 0.14) * (0.3 + 0.7 * vida)})`;
    }

    // bola de cristal: late despacio y brilla más cuanto más cerca está el cursor
    const br = bola.getBoundingClientRect();
    const cerca = limitar(1 - Math.hypot(px - (br.left + br.width / 2), py - (br.top + br.height / 2)) / innerWidth / 0.35);
    bola.style.opacity = (0.35 + Math.sin(t * 1.3) * 0.12 + cerca * 0.55).toFixed(3);
    luz.style.opacity = 0.75 + Math.sin(t * 7.3) * 0.08 + Math.sin(t * 17.1) * 0.05;

    requestAnimationFrame(fotograma);
  }

  function arrancar() {
    if (animando || !visible || reducido.matches || !meta) return;
    animando = true;
    previo = performance.now() / 1000;
    requestAnimationFrame(fotograma);
  }

  // el cursor se mide sobre toda la ventana: el espectro reacciona aunque estés leyendo el texto de al lado
  addEventListener('pointermove', (e) => {
    objetivo = (e.clientX / innerWidth) * 2 - 1;
    px = e.clientX; py = e.clientY;
    ultimoMovimiento = performance.now() / 1000;
  });

  // la animación solo corre mientras la escena está en pantalla
  new IntersectionObserver(([entrada]) => {
    visible = entrada.isIntersecting;
    if (visible) arrancar(); else animando = false;
  }).observe(escena);

  addEventListener('resize', ajustarLienzo);

  async function cargar() {
    if (reducido.matches) return;
    try {
      meta = await fetch(RUTA + 'frames.json').then((r) => r.json());
    } catch { return; }
    lienzo.style.setProperty('--ar', meta.w / meta.h);
    fotos = await Promise.all(Array.from({ length: meta.count }, (_, i) => new Promise((res) => {
      const im = new Image();
      im.decoding = 'async';
      im.onload = () => res(im);
      im.onerror = () => res(null);
      im.src = `${RUTA}${String(i).padStart(3, '0')}.webp`;
    })));
    ajustarLienzo();
    t0 = performance.now() / 1000;
    escena.classList.add('is-animada');
    arrancar();
  }

  if (document.readyState === 'complete') cargar();
  else addEventListener('load', cargar, { once: true });
})();
