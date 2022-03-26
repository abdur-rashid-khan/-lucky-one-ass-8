import { faXmark } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import './Selected.css'
const Selected = ({data}) => {
   const {img,foodName}=data;
   return (
         <div className="cart-items">
            <div className="cart-img">
               <img src={img} alt={foodName} />
               <p>{foodName}</p>
               <button id='x-icon'> <FontAwesomeIcon icon={faXmark}></FontAwesomeIcon> </button> 
            </div>
         </div>
   );
};

export default Selected;