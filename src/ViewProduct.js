import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import productsData from './data/db.json';
import './other-css/view-product.css';

const ViewProduct = () => {
  const { id } = useParams();
  const product = productsData.posts.find((item) => item.id.toString() === id);

  // Setting the main image to the first one in the array by default if product is found
  const [mainImage, setMainImage] = useState(product ? product.images[0] : null);

  const handleThumbnailClick = (image) => {
    setMainImage(image);
  };

  if (!product) {
    return <p>Product not found.</p>;
  }

  return (
    <div className="product-view">
      {/* Main Image */}
      <div className="main-image-container">
        <img
          src={require(`../public/assets/images/${mainImage}`).default}
          alt={product.name}
          className="main-image"
        />
      </div>

      {/* Thumbnails */}
      <div className="thumbnails">
        {product.images.map((image, index) => (
          <img
            key={index}
            src={require(`../public/assets/images/${image}`).default}
            alt={`${product.name} thumbnail ${index + 1}`}
            className={`thumbnail ${mainImage === image ? 'active' : ''}`}
            onClick={() => handleThumbnailClick(image)}
          />
        ))}
      </div>

      {/* Product Details */}
      <div className="product-details">
        <h2>{product.name}</h2>
        <p className="condition" style={{ color: getConditionColor(product.condition) }}>{product.condition}</p>
        <p className="description">{product.description}</p>
        <p className="price">
          Price: {product.isForSale ? `${product.price}$` : `${product.price}$/day`}
        </p>
        <p className="size-location">
          <span>Size: {product.size}</span>
          <span className="location">Location: {product.location}</span>
        </p>
        {product.otherInfo && <p className="other-info">{product.otherInfo}</p>}
      </div>
    </div>
  );
};

// Helper function to get condition color
const getConditionColor = (condition) => {
  switch (condition) {
    case 'New': return 'green';
    case 'Like New': return 'blue';
    case 'Gently Used': return 'orange';
    case 'Good': return 'gray';
    default: return 'black';
  }
};

export default ViewProduct;
