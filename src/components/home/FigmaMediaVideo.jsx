import { useCallback, useState } from 'react';

/**
 * Uses Figma-exported poster art. If `videoSrc` is missing or fails to load, shows the poster image.
 */
export function FigmaMediaVideo({
  poster,
  videoSrc,
  videoType = 'video/mp4',
  alt = '',
  className = '',
  videoClassName = '',
  priority = false
}) {
  const [usePoster, setUsePoster] = useState(!videoSrc);

  const onVideoError = useCallback(() => {
    setUsePoster(true);
  }, []);

  if (usePoster) {
    return <img src={poster} alt={alt} className={className} loading={priority ? 'eager' : 'lazy'} />;
  }

  return (
    <video
      className={videoClassName || className}
      poster={poster}
      controls
      playsInline
      preload="metadata"
      onError={onVideoError}
    >
      <source src={videoSrc} type={videoType} />
    </video>
  );
}

/** Full-bleed background: muted loop when video exists and loads; otherwise poster image. */
export function FigmaHeroBackground({ poster, videoSrc, className = '' }) {
  const [usePoster, setUsePoster] = useState(!videoSrc);

  if (usePoster) {
    return (
      <img src={poster} alt="" className={`h-full w-full object-cover ${className}`} fetchPriority="high" />
    );
  }

  return (
    <video
      className={`h-full w-full object-cover ${className}`}
      poster={poster}
      autoPlay
      muted
      loop
      playsInline
      preload="metadata"
      onError={() => setUsePoster(true)}
    >
      <source src={videoSrc} type="video/mp4" />
    </video>
  );
}
