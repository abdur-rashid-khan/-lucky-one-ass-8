import React, { useEffect, useState } from 'react';
import Cart from '../cart/Cart';
import Product from '../product/Product';
import './Products.css'
const Products = () => {
   const [products , setProducts]=useState([]);
   useEffect(()=>{
      fetch('products.json')
      .then(res => res.json())
      .then(data =>  setProducts(data))
   },[]);
   return (
      <div className="products-container">
         <div className='all-products'>
         {
            products.map(product=><Product key={product.id} data={product}></Product>)
         }
         </div>
         <div className="cart-container">
            <Cart></Cart>
         </div>
      </div>
   );
};

export default Products;