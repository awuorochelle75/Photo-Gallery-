import React, { useState } from 'react';

const ImageCard = ({ image, onLike }) => {
  const [likes, setLikes] = useState(image.likes || 0);

  const handleLike = () => {
    const updatedLikes = likes + 1;
    setLikes(updatedLikes);

    fetch(`http://localhost:3000/images/${image.id}`, {
      method: 'PATCH',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ likes: updatedLikes }),
    })
    .catch((error) => console.error('Error updating likes:', error));

    if (onLike) {
      onLike(image);
    }
  };

  return (
    <div className="image-card">
      <img src={image.url} alt={image.title} />
      <div className="image-actions">
        <button onClick={handleLike}>❤️ Like</button>
        <span>{likes} {likes === 1 ? "Like" : "Likes"}</span>
      </div>
    </div>
  );
};

export default ImageCard;
