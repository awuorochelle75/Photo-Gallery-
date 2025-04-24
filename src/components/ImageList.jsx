import React from 'react'
import ImageCard from './ImageCard';

const ImageList = ({ images, onLike }) => {
  return (
    <div className="image-list">
        {images.map((image) => (
            <ImageCard key={image.id} image={image} onLike={onLike} />
      ))}
    </div>
  )
}

export default ImageList