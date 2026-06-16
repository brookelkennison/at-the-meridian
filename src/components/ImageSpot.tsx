import Image, { type StaticImageData } from 'next/image'

type ImageSpotProps = {
  /** Short label shown on the placeholder. Hidden when a real image is provided. */
  label: string
  /** Sub-label / direction hint shown under the label on the placeholder. */
  sub: string
  /** Tailwind/className overrides for the wrapper. */
  className?: string
  /**
   * If provided, a real image renders and the placeholder decoration auto-hides
   * via the CSS `:has(img)` selector in globals.css.
   * Accepts both a string URL (for /public assets) and a Next.js static
   * image import (for /src/... files).
   */
  src?: string | StaticImageData
  alt?: string
  /** Hint browsers about responsive image sizing. */
  sizes?: string
  /** Eagerly load this image (use for above-the-fold imagery). */
  priority?: boolean
}

/**
 * Drop-in image slot. Shows a styled placeholder (ocean horizon gradient + meridian sun)
 * until a real image is provided. The CSS `:has(img)` selector in globals.css auto-hides
 * the placeholder decoration when an <img> is rendered inside.
 */
export default function ImageSpot({
  label,
  sub,
  className = '',
  src,
  alt = '',
  sizes = '(max-width: 1024px) 100vw, 50vw',
  priority = false,
}: ImageSpotProps) {
  return (
    <div className={`img-spot ${className}`}>
      {src ? (
        <Image
          src={src}
          alt={alt}
          fill
          sizes={sizes}
          priority={priority}
          className="object-cover"
        />
      ) : (
        <span className="img-spot-tag">
          <strong>{label}</strong>
          <span>{sub}</span>
        </span>
      )}
    </div>
  )
}
