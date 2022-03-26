import React, { useEffect, useState } from 'react';
import Cart from '../cart/Cart';
import Product from '../product/Product';
import Selected from '../selected/Selected';
import './Products.css'
const Products = () => {
   const [products , setProducts]=useState([]);
   const [cart , setCart]=useState([]);
   useEffect(()=>{
      fetch('products.json')
      .then(res => res.json())
      .then(data =>  setProducts(data))
   },[]);
   // 
   
   // add 
   const productAdd=(productId)=>{
      let newProduct=-[];
      const checking=products.find(products=>products.id === productId);
      if(checking.length){
         alert('This product selected');
         return;
      }
      if(!checking){
         checking.length = 1;
         newProduct=[...cart,checking]
      }else{
         const rest=cart.filter(products=>products.id !== productId);
         checking.length=checking.length + 1;
         newProduct=[...rest,checking]
      }
      // console.log(newProduct)
      setCart(newProduct);
   }
   return (
      <div className="products-container">
         <div className='all-products'>
         {
            products.map(product=><Product key={product.id} data={product} addBtn={productAdd}></Product>)
         }
         </div>
         <div className="cart-container">
            <Cart data={cart}></Cart>
            {/* {
               cart.map(products=><Selected key={products.id} data={products}></Selected>)
            } */}

         </div>
      </div>
   );
};

export default Products;