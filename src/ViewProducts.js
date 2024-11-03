import React from 'react';
import './other-css/view-products.css';
import productsData from './data/db.json';
import { Link } from 'react-router-dom';

const ViewProducts = () => {
  const getImage = (imageName) => {
    try {
      return `/assets/images/${imageName}`; // Accesses from public folder directly
    } catch (error) {
      console.error(`Image not found: ${imageName}`, error);
      return '/assets/images/image1.jpeg'; // Placeholder image in public folder
    }
  };

  return (
    <div className="view-products">
      <h1>Available Products</h1>
      <div className="product-list">
        {productsData.posts.map((product, index) => (
          <div key={index} className="card product-card">
            <img
              className="card-img-top product-image"
              src={getImage(product.images[0])}
              alt={product.name}
            />
            <div className="card-body">
              <h5 className="card-title">{product.name}</h5>
              <p className="card-text">{product.description}</p>
              <div className="size_location">
                <p className="card-text">Size: {product.size}</p>
                <p id="location" className="card-text">Location: {product.location}</p>
              </div>
              {product.isForSale && <p className="card-text">Price: ${product.price}</p>}
              {product.isForRent && <p className="card-text">Price: ${product.dailyRentPrice}$/day</p>}
              <p className={`card-text ${
                product.condition === "New" ? "condition-new" :
                  product.condition === "Like New" ? "condition-like-new" :
                    product.condition === "Gently Used" ? "condition-gently-used" :
                      "condition-good"
              }`}>
                Condition: {product.condition}
              </p>
              <Link to={`/view/${product.id}`} className="btn btn-danger">
                View Details
              </Link>

            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ViewProducts;
