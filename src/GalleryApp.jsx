// import React, { useState, useEffect } from 'react';
// import ImageList from './components/ImageList';

// const GalleryApp = () => {
//   const [images, setImages] = useState([]);

//   useEffect(() => {
//     fetch('http://localhost:3000/images')
//       .then((res) => res.json())
//       .then((data) => setImages(data))
//       .catch((err) => console.error('Error fetching images:', err));
//   }, []);

//   return (
//     <div>
//       <h1 className="gallery-title">My Photo Gallery</h1>
//       <ImageList images={images} />
//     </div>
//   );
// };

// export default GalleryApp;

// import React, { useEffect, useState } from 'react';
// import ImageList from './components/ImageList';

// const GalleryApp = () => {
//   const [images, setImages] = useState([]);
//   const [page, setPage] = useState(1); // new state for pagination
//   const [isLoading, setIsLoading] = useState(false); // optional: shows loading state

//   // Fetch images from db.json based on page
//   const fetchImages = () => {
//     setIsLoading(true);
//     fetch(`http://localhost:3000/images?_page=${page}&_limit=4`)
//       .then((res) => res.json())
//       .then((data) => {
//         setImages(prev => [...prev, ...data]); // add new images to old ones
//         setIsLoading(false);
//       })
//       .catch(err => {
//         console.error('Error fetching images:', err);
//         setIsLoading(false);
//       });
//   };

//   // Fetch images on first load and whenever `page` changes
//   useEffect(() => {
//     fetchImages();
//   }, [page]);

//   // Scroll detection logic
//   useEffect(() => {
//     const handleScroll = () => {
//       if (
//         window.innerHeight + document.documentElement.scrollTop
//         >= document.documentElement.offsetHeight - 100
//         && !isLoading
//       ) {
//         setPage(prevPage => prevPage + 1); // trigger next page fetch
//       }
//     };

//     window.addEventListener('scroll', handleScroll);
//     return () => window.removeEventListener('scroll', handleScroll); // cleanup
//   }, [isLoading]);

//   return (
//     <div className="gallery-container">
//       <h1 className="gallery-title">My Photo Gallery</h1>
//       <ImageList images={images} />
//       {isLoading && <p>Loading more images...</p>}
//     </div>
//   );
// };

// export default GalleryApp;



import React, { useEffect, useState } from 'react';
import ImageList from './components/ImageList';

const GalleryApp = () => {
  const [images, setImages] = useState([]);
  const [page, setPage] = useState(1);
  const [isLoading, setIsLoading] = useState(false);

  const fetchImages = () => {
    setIsLoading(true);
    fetch(`http://localhost:3000/images?_page=${page}&_limit=4`)
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
      <ImageList images={images} />
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
