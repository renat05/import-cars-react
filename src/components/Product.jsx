import React from "react";
import { useParams } from "react-router-dom";
import './product.css'
const Product = ({ allCars }) => {
  const { id } = useParams();
  const product = allCars.find((car) => car.id.toString() === id);
  console.log(product.title) 
  if (!product) {
    return <div>Product not found</div>;
  }

  return (
    <div>
<div className="card-wrapper">
  <div className="card">

    <div className="product-imgs">
      <div className="img-display">
        <div className="img-showcase">
          <img src = {product.img} alt = "shoe image"/>
        </div>
      </div>

    </div>

    <div className="product-content">
      <h2 className="product-title">{product.title}</h2>
      <a href = "#" className="product-link">visit nike store</a>
      <div className="product-rating">
        <i className="fas fa-star"></i>
        <i className="fas fa-star"></i>
        <i className="fas fa-star"></i>
        <i className="fas fa-star"></i>
        <i className="fas fa-star-half-alt"></i>
        <span>4.7(21)</span>
      </div>

      <div className="product-price">
        <p className="last-price">Old Price: <span>$257.00</span></p>
        <p className="new-price">New Price: <span>$249.00 (5%)</span></p>
      </div>

      <div className="product-detail">
        <h2>About avto: </h2>
        <p>{product.info}</p>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur, perferendis eius. Dignissimos, labore suscipit. Unde.</p>
        <ul>
          <li>Color: <span>Black</span></li>
          <li>Available: <span>in stock</span></li>
          <li>Category: <span>Shoes</span></li>
          <li>Shipping Area: <span>All over the world</span></li>
          <li>Shipping Fee: <span>Free</span></li>
        </ul>
      </div>

      <div className="purchase-info">
      
        <button type="button" className="btn">Compare</button>
      </div>

      <div className="social-links">
        <p>Share At: </p>
        <a href = "#">
          <i className="fab fa-facebook-f"></i>
        </a>
        <a href = "#">
          <i className="fab fa-twitter"></i>
        </a>
        <a href = "#">
          <i className="fab fa-instagram"></i>
        </a>
        <a href = "#">
          <i className="fab fa-whatsapp"></i>
        </a>
        <a href = "#">
          <i className="fab fa-pinterest"></i>
        </a>
      </div>
    </div>
  </div>
</div>
    </div>
  );
};



export default Product;
