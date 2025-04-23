import React, { useState, useEffect } from 'react';
import ImageList from './components/ImageList';

const GalleryApp = () => {
  const [images, setImages] = useState([]);

  useEffect(() => {
    fetch('http://localhost:3000/images')
      .then((res) => res.json())
      .then((data) => setImages(data))
      .catch((err) => console.error('Error fetching images:', err));
  }, []);

  return (
    <div>
      <h1 className="gallery-title">My Photo Gallery</h1>
      <ImageList images={images} />
    </div>
  );
};

export default GalleryApp;
