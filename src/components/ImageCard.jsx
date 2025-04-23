import React from 'react'

const ImageCard = ({ image }) => {
  return (
    <>
    <div className="image-card">
        <img src={image.url} alt={image.title} />
    </div>
    <div className="image-info">
        <h2>{image.title}</h2>
        <p>{image.description}</p>

    </div>
    </>
    
  )
}

export default ImageCard