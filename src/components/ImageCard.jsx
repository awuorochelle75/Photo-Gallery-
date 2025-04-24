import React, { useState } from 'react'

const ImageCard = ({ image, onLike }) => {
  const [liked, setLiked] = useState(false);

  const handleLike = () => {
    setLiked(!liked);
    onLike(image);
  };

  return (
    <>
    <div className="image-card">
        <img src={image.url} alt={image.title || "Gallery Image"}  />
        <button onClick={handleLike} className={`like-btn ${liked ? 'liked' : ''}`}>
        {liked ? '❤️' : '🤍'}
      </button>
    </div>
    </>
    
  )
}

export default ImageCard