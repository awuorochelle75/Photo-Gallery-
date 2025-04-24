import React, { useEffect, useState } from 'react';
import ImageList from './components/ImageList';

const GalleryApp = () => {
  const [images, setImages] = useState([]);
  const [page, setPage] = useState(1);
  const [isLoading, setIsLoading] = useState(false);

  const fetchImages = () => {
    setIsLoading(true);
    fetch(`http://localhost:3000/images`)
      .then(res => res.json())
      .then(data => {
        setImages(prev => [...prev, ...data]);
        setIsLoading(false);
      })
      .catch(err => {
        console.error('Error fetching images:', err);
        setIsLoading(false);
      });
  };

  const handleLike = (image) => {
    setFavorites(prev => {
      if (prev.find(img => img.id === image.id)) {
        return prev.filter(img => img.id !== image.id); // un-like
      } else {
        return [...prev, image]; // like
      }
    });
  };

  useEffect(() => {
    fetchImages();
  }, [page]);

  useEffect(() => {
    const handleScroll = () => {
      if (
        window.innerHeight + document.documentElement.scrollTop
        >= document.documentElement.offsetHeight - 100
        && !isLoading
      ) {
        setPage(prev => prev + 1);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [isLoading]);

  const handleLoadMoreClick = () => {
    setPage(prev => prev + 1);
  };

  return (
    <div className="gallery-container">
      <h1 className="gallery-title">My Photo Gallery</h1>
      <ImageList images={images}  onLike={handleLike} />
      {isLoading && <p>Loading more images...</p>}
      {!isLoading && (
        <button className="load-more-btn" onClick={handleLoadMoreClick}>
          Load More
        </button>
      )}
    </div>
  );
};

export default GalleryApp;
