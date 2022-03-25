import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import './Product.css'
const Product = ({data}) => {
   const {foodName,img,price,rating}=data;
   return (
      <div className='product'>
         <div className="product-img">
            <img src={img} alt={foodName} />
         </div>
         <div className="product-info">
            <h3>Name : {foodName}</h3>
            <h3>Price : $ {price}</h3>
            <p>Rating : {rating}</p>
         </div>
         <button id='btn'>Add to Cart
            <p className='shopping-icon'><FontAwesomeIcon icon={faShoppingCart}></FontAwesomeIcon></p>
         </button>
      </div>
   );
};

export default Product;