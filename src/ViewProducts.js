import React from "react";
import "./other-css/view-products.css";
import productsData from "./data/db.json";
import {Link} from "react-router-dom";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faShoppingCart, faTag} from "@fortawesome/free-solid-svg-icons";

const ViewProducts = () => {
  const getImage = (imageName) => {
    try {
      return `/assets/images/${imageName}`; // Accesses from public folder directly
    } catch (error) {
      console.error(`Image not found: ${imageName}`, error);
      return "/assets/images/image1.jpeg"; // Placeholder image in public folder
    }
  };

  return (
    <div className="view-products">
      <h1>Available Products</h1>
      <div className="product-list">
        {productsData.posts.map((product, index) => (
          <div key={index} className="card product-card">
            <Link to={`/view/${product.id}`}>
              <img
              className="card-img-top product-image"
              src={getImage(product.images[0])}
              alt={product.name}
            />
            </Link>
            <div className="card-body">
              <h5 className="card-title">
                <Link style={{textDecoration: "none", color: "black"}} to={`/view/${product.id}`}>
                  {product.name}
                </Link></h5>
              <p className="card-text">{product.description}</p>
              <div className="size_location">
                <p className="card-text">Size: {product.size}</p>
                <p id="location" className="card-text">Location: {product.location}</p>
              </div>
              {product.isForSale && (
                <p className="card-text">
                  <FontAwesomeIcon icon={faTag} style={{marginRight: "5px", color: "gray"}}/> {/* Tag icon */}
                  Price: ${product.price}
                </p>
              )}
              {product.isForRent && (
                <p className="card-text">
                  <FontAwesomeIcon icon={faTag} style={{marginRight: "5px", color: "gray"}}/> {/* Tag icon */}
                  Price: {product.dailyRentPrice}$/day
                </p>
              )}
              <p className={`card-text ${
                product.condition === "New" ? "condition-new" :
                  product.condition === "Like New" ? "condition-like-new" :
                    product.condition === "Gently Used" ? "condition-gently-used" :
                      "condition-good"
              }`}>
                Condition: {product.condition}
              </p>
              <div className="button-container">
                <button className="cart-button">
                  <FontAwesomeIcon className="cart-button-icon" icon={faShoppingCart}
                                   style={{marginRight: "5px", color: "#ffd59e"}}/>
                  <p style={{margin: 0, fontSize:"10px"}}>Rent for ${product.dailyRentPrice}/day</p> {/* No margin for the paragraph */}
                </button>
                <button className="cart-button">
                  <FontAwesomeIcon className="cart-button-icon" icon={faShoppingCart}
                                   style={{fontSize: "10px" ,marginRight: "5px", color: "#ffd59e"}}/>
                  <p style={{margin: 0}}>Buy for ${product.dailyRentPrice * 2}</p> {/* No margin for the paragraph */}
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ViewProducts;
