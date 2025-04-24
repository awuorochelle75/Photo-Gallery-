import React, { useEffect, useState } from 'react';
import ImageList from './components/ImageList';
import axios from 'axios';
import Favourites from './components/Favourites';

const GalleryApp = () => {
  const [images, setImages] = useState([]);
  const [page, setPage] = useState(1);
  const [isLoading, setIsLoading] = useState(false);
  const [favorites, setFavorites] = useState([])


  const fetchImages = () => {
    setIsLoading(true);
    axios.get(`http://localhost:3000/images`, {
      params: {
        _page: page,
        _limit: 29,
        _sort: 'id',
        _order: 'asc'  
      }
    })
    .then((response) => {
      setImages(prev => [...prev, ...response.data]);
      setIsLoading(false);
    })
    .catch((err) => {
      console.error('Error fetching images:', err);
      setIsLoading(false);
    });
  };

  const handleLike = (image) => {
    setFavorites(prev => {
      if (prev.find(img => img.id === image.id)) {
        return prev.filter(img => img.id !== image.id); 
      } else {
        return [...prev, image]; 
        return prev.filter(img => img.id !== image.id);
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

  useEffect(() => {
    const savedFavorites = JSON.parse(localStorage.getItem('favorites')) || [];
    setFavorites(savedFavorites);
  }, []); 

  useEffect(() => {
    localStorage.setItem('favorites', JSON.stringify(favorites));
  }, [favorites]);
 
  const handleRemoveFavorite = (image) => {
    setFavorites(prev => prev.filter(img => img.id !== image.id));
  };

  return (
    <div className="gallery-container">
      <Favourites favorites={favorites} onRemove={handleRemoveFavorite}/>
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
