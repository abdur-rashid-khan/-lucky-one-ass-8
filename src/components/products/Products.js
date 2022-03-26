import React, { useEffect, useState } from 'react';
import Cart from '../cart/Cart';
import Product from '../product/Product';
import './Products.css'
const Products = () => {
   const [products , setProducts]=useState([]);
   const [cart , setCart]=useState([]);
   // const [choses , setchoses]=useState([]);
   useEffect(()=>{
      fetch('products.json')
      .then(res => res.json())
      .then(data =>  setProducts(data))
   },[]);
   // 
   
   // add 
   const productAdd=(productId)=>{
      let newProduct=[];
      const checking=products.find(products=>products.id === productId);
      if(checking.length){
         alert('This Product Already Selected');
         return;
      }
      if(!checking){
         checking.length = 1;
         newProduct=[...cart,checking]
      }else{
         const rest=cart.filter(products=>products.id !== productId);
         checking.length=checking.length + 1;
         newProduct=[...rest,checking]
         if(newProduct.length === 5){
            alert('Not Allow Selected Five Items');
            return;
         }
      }
      setCart(newProduct);
      // 
   }
   // choses btn 
   const chosesBtn = () =>{
      if(cart.length > 0){
         let id =Math.floor(Math.random() * cart.length);
         let selected=cart[id];
         setCart([selected])
      }
   }
   // clearBtn
   const clearBtn=()=>{
      setCart([]);
   }
   return (
      <div className="products-container">
         <div className='all-products'>
         {
            products.map(product=><Product key={product.id} data={product} addBtn={productAdd}></Product>)
         }
         </div>
         <div className="cart-container">
            <Cart data={cart} ChosesBtn={chosesBtn} clearBtn={clearBtn}></Cart>
         </div>
      </div>
   );
};

export default Products;
