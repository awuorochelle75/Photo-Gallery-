import React, { useEffect, useState } from 'react';
import ImageList from './components/ImageList';
import Searchbar from './components/Searchbar'; // ✅ Make sure this path is correct
import axios from 'axios';
import Favourites from './components/Favourites';

const GalleryApp = () => {
  const [images, setImages] = useState([]);
  const [page, setPage] = useState(1);
  const [isLoading, setIsLoading] = useState(false);
  const [favorites, setFavorites] = useState([]);

  // ✅ New states for filtering
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("all");

  // ✅ Fetch images
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

  // ✅ Handle likes
  const handleLike = (image) => {
    setFavorites(prev => {
      if (prev.find(img => img.id === image.id)) {
        return prev.filter(img => img.id !== image.id); 
      } else {
        return [...prev, image]; 
      }
    });
  };

  // ✅ Scroll loading
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

  // ✅ Filtering logic
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
      
      

      {/* ✅ Searchbar Integration */}
      <Searchbar
        onSearch={setSearchTerm}
        onCategoryChange={setSelectedCategory}
        // Replace with actual handler
      />

<h1 className="gallery-title">From our Gallery</h1>

      {/* ✅ Filtered image list */}
      <ImageList images={filteredImages} onLike={handleLike} />

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