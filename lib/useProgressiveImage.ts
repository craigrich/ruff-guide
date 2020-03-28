import { useEffect, useState, useCallback } from 'react';

function useProgressiveImage({ src, fallbackSrc }) {
  const [currentSource, setCurrentSource] = useState(fallbackSrc);
  const hasLoaded = src === currentSource;

  const handleMainImageLoad = useCallback(() => {
    setCurrentSource(src);
  }, [src]);

  useEffect(() => {
    const mainImage = new Image();
    mainImage.addEventListener('load', handleMainImageLoad);
    mainImage.src = src;
    return () => {
      mainImage.removeEventListener('load', handleMainImageLoad);
    };
  }, [src, fallbackSrc, handleMainImageLoad]);

  return [currentSource, hasLoaded];
}

export default useProgressiveImage;
