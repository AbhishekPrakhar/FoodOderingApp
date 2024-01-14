import React from 'react'
import { useSelector } from 'react-redux';

const Cart = () => {
    
    const cartItems = useSelector((store) => store.cart.items)

    return (            
        <div className='w-80 h-96 bg-white rounded-lg flex justify-center items-center'>  
            <div className='text-lg'>{`There are ${cartItems.length} items in the cart.`}</div>
        </div>
     );
}
 
export default Cart;