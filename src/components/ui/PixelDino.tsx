/**
 * PixelDino — T-Rex pixel art ala game Chrome (dino), dengan animasi:
 * badan bob, kaki jalan bergantian, dan lompat kecil sesekali.
 * Warna default hitam soft (cocok di card putih); override via prop color.
 */
const BODY: string[] = [
  '..########',
  '..########',
  '..########',
  '..########',
  '..####....',
  '..##..###.',
  '######....',
  '###..##.##',
  '#.#..##.##',
  '###..##.##',
  '.#######..',
]

const PX = 10 // ukuran pixel

interface PixelDinoProps {
  color?: string
  className?: string
}

export default function PixelDino({ color = '#262626', className = '' }: PixelDinoProps) {
  const eyeColor = '#FAFAF9'
  return (
    <svg
      viewBox="0 0 120 150"
      width="120"
      height="150"
      className={`dino-walk ${className}`}
      aria-hidden
      role="img"
    >
      {/* Badan (pixel grid) */}
      {BODY.map((row, y) =>
        [...row].map((ch, x) =>
          ch === '#' ? (
            <rect key={`${x}-${y}`} x={x * PX} y={y * PX} width={PX} height={PX} fill={color} />
          ) : null,
        ),
      )}

      {/* Ekor / kepala aksen */}
      <rect x={10 * PX} y={8 * PX} width={PX} height={PX} fill={color} />

      {/* Mata (pixel terang) */}
      <rect x={9 * PX} y={3 * PX} width={PX} height={PX} fill={eyeColor} />

      {/* Kaki depan — animasi step */}
      <rect className="dino-leg-front" x={2 * PX} y={11 * PX} width={2 * PX} height={3 * PX} fill={color} />

      {/* Kaki belakang — animasi step */}
      <rect className="dino-leg-back" x={8 * PX} y={11 * PX} width={2 * PX} height={3 * PX} fill={color} />
    </svg>
  )
}
