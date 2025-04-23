import React from 'react'
import ImageCard from './ImageCard';

const ImageList = ({ images }) => {
  return (
    <div className="image-list">
        {images.map((image, index) => (
            <ImageCard key={index} image={image} />
      ))}
    </div>
  )
}

export default ImageList