import React, { useEffect, useState } from 'react';
import ImageList from './components/ImageList';
import Searchbar from './components/Searchbar';
import axios from 'axios';
import Favourites from './components/Favourites';

const GalleryApp = () => {
  const [images, setImages] = useState([]);
  const [page, setPage] = useState(1);
  const [isLoading, setIsLoading] = useState(false);
  const [favorites, setFavorites] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("all");

  const fetchImages = () => {
    if (isLoading) return; // Prevent multiple calls
    setIsLoading(true);
    console.log(`Fetching page: ${page}`);

    axios.get("http://localhost:3000/images", {
      params: {
        _page: page,
        _limit: 29,  // Keep this to 29 images to match the available data
        _sort: 'id',
        _order: 'asc'
      }
    })
    .then((response) => {
      // If there are images already loaded, append new ones from the beginning
      setImages(prev => {
        const totalImages = prev.length + response.data.length;

        // If we've loaded all available images, start repeating them
        if (totalImages >= 29) {
          return [...prev, ...response.data]; // Repeat the same images
        }
        
        // Otherwise, simply append new images
        return [...prev, ...response.data];
      });
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
      }
    });
  };

  useEffect(() => {
    fetchImages();
  }, [page]);

  useEffect(() => {
    const handleScroll = () => {
      if (
        window.innerHeight + document.documentElement.scrollTop >=
        document.documentElement.offsetHeight - 100 &&
        !isLoading
      ) {
        setPage(prev => prev + 1); // Trigger load more when scrolled to the bottom
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [isLoading]);

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

  const filteredImages = images.filter(image => {
    const matchesSearch =
      image.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      image.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
      image.tags?.some(tag => tag.toLowerCase().includes(searchTerm.toLowerCase()));

    const matchesCategory =
      selectedCategory === "all" ||
      image.category?.toLowerCase() === selectedCategory.toLowerCase();

    return matchesSearch && matchesCategory;
  });

  return (
    <div className="gallery-container">
      <Searchbar
        onSearch={setSearchTerm}
        onCategoryChange={setSelectedCategory}
      />

      <h1 className="gallery-title">From our Gallery</h1>

      <ImageList images={filteredImages} onLike={handleLike} />

      {isLoading && <p>Loading more images...</p>}
    </div>
  );
};

export default GalleryApp;
