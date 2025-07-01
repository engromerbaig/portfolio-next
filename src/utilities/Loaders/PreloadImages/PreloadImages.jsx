'use client';

import { useEffect } from 'react';

const PreloadImages = ({ images }) => {
  useEffect(() => {
    images.forEach((url) => {
      const img = new Image();
      img.src = url;
    });
  }, [images]);

  return null;
};

export default PreloadImages;
