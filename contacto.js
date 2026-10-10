'use strict';

window.SH_CONTACTO = Object.freeze({
  vendedor: 'Manu',
  telefono: '+34 640 31 97 26',
  whatsapp: '34640319726',
  email: 'info@sh-esotericos.com',
  instagram: 'https://www.instagram.com/sh_esotericos/',
  web: 'https://sh-esotericos.com/',
  whatsappUrl(message = '') {
    const base = `https://wa.me/${this.whatsapp}`;
    return message ? `${base}?text=${encodeURIComponent(message)}` : base;
  }
});

document.querySelectorAll('[data-contact]').forEach((link) => {
  const type = link.dataset.contact;
  if (type === 'whatsapp') link.href = window.SH_CONTACTO.whatsappUrl(link.dataset.message || '');
  if (type === 'instagram') link.href = window.SH_CONTACTO.instagram;
  if (type === 'email') link.href = `mailto:${window.SH_CONTACTO.email}`;
  if (type === 'web') link.href = window.SH_CONTACTO.web;
});
