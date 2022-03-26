import { faShoppingBag, faTrash } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import Selected from '../selected/Selected';
import './Cart.css'
const Cart = ({data}) => {
   return (
      <div className='cart'>
         <div className="cart-info">
            <div className="cart-header">
               <h2>Selected Product </h2>
               <div className="cart-body">
               {
               data.map(products=><Selected key={products.id} data={products}></Selected>)
               }
               </div>
            </div>
            <div className="cart-btn">
               <button className='Choses-btn'>Choses Product 
                  <p className='Choses-icon'> <FontAwesomeIcon icon={faShoppingBag}></FontAwesomeIcon> </p>
               </button>
            </div>
            <button className='Clear-btn'>Clear Product 
               <p className='Choses-icon'> <FontAwesomeIcon icon={faTrash} /> </p>
            </button>
         </div>
      </div>
   );
};

export default Cart;