"""Genera las imágenes WebP publicables a partir de los originales.

Uso desde la raíz del proyecto:
    python3 scripts/optimizar-imagenes.py
"""

from pathlib import Path
from PIL import Image, ImageOps

PROJECT = Path(__file__).resolve().parent.parent
SOURCE = PROJECT / 'productos-originales'
TARGET = PROJECT / 'productos'
MAX_SIDE = 2000
QUALITY = 82


def webp_path(source: Path, collisions: dict[str, int]) -> Path:
    relative = source.relative_to(SOURCE)
    stem = relative.with_suffix('').as_posix()
    suffix = f'-{source.suffix.lower().lstrip(".")}' if collisions[stem] > 1 else ''
    return TARGET / f'{stem}{suffix}.webp'


def main() -> None:
    sources = sorted(path for path in SOURCE.rglob('*') if path.is_file())
    if not sources:
        raise SystemExit('No se encontraron originales en productos-originales/.')

    collisions: dict[str, int] = {}
    for source in sources:
        stem = source.relative_to(SOURCE).with_suffix('').as_posix()
        collisions[stem] = collisions.get(stem, 0) + 1

    original_bytes = 0
    optimized_bytes = 0
    for index, source in enumerate(sources, start=1):
        destination = webp_path(source, collisions)
        destination.parent.mkdir(parents=True, exist_ok=True)
        original_bytes += source.stat().st_size

        with Image.open(source) as opened:
            image = ImageOps.exif_transpose(opened)
            if max(image.size) > MAX_SIDE:
                image.thumbnail((MAX_SIDE, MAX_SIDE), Image.Resampling.LANCZOS)
            if image.mode not in ('RGB', 'RGBA'):
                image = image.convert('RGBA' if 'transparency' in image.info else 'RGB')
            image.save(destination, 'WEBP', quality=QUALITY, method=6, exact=True)

        optimized_bytes += destination.stat().st_size
        if index % 50 == 0:
            print(f'Convertidas {index}/{len(sources)}')

    reduction = (1 - optimized_bytes / original_bytes) * 100
    print(f'Conversión completa: {len(sources)} imágenes; reducción del {reduction:.1f} %.')


if __name__ == '__main__':
    main()
