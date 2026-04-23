interface AdBannerProps {
  imageUrl: string;
  linkUrl: string;
  width: number;
  height: number;
  alt?: string;
  position?: "top" | "bottom";
}

/**
 * AdBanner — renders a clickable advertisement image loaded from an external URL.
 * Images are never embedded; they load from the provided URL for easy future updates.
 */
export function AdBanner({
  imageUrl,
  linkUrl,
  width,
  height,
  alt = "Advertisement",
  position = "top",
}: AdBannerProps) {
  return (
    <div
      data-ocid={`ad.banner.${position}`}
      className="w-full flex justify-center"
    >
      <a
        href={linkUrl}
        target="_blank"
        rel="noopener noreferrer"
        aria-label={alt}
        className="block max-w-full overflow-hidden rounded-lg border border-border shadow-sm hover:shadow-md transition-smooth"
        style={{ maxWidth: `${width}px` }}
      >
        <img
          src={imageUrl}
          alt={alt}
          width={width}
          height={height}
          loading="lazy"
          className="block w-full object-cover"
          style={{ height: `${height}px`, objectFit: "cover" }}
        />
      </a>
    </div>
  );
}
