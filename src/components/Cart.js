import React from 'react'

const Cart = ({onClose}) => {
    return ( 
        <div className='w-80 h-80 bg-gray-200 absolute'>
            This is a modal
            <button onClick={onClose}>Close</button>
        </div>
     );
}
 
export default Cart;