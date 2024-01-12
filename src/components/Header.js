import React, { useContext, useState } from "react";
import { createPortal } from "react-dom";
import Logo from "../assets/Logo3.png"
import { Link } from "react-router-dom";
import UserContext from "../utils/contexts/UserContext";
import { useSelector } from "react-redux";
import Cart from "./Cart";

const Header = () => {
    const user = useContext(UserContext);
    const cartItems = useSelector((store) => store.cart.items);
    const [showCart, setShowCart] = useState(false);

    console.log(showCart);
    console.log(React);

    return (
        <div className='flex justify-between items-center shadow-lg px-28 bg-[#F29548]'>
            <Link to="/"><img className='w-16 my-3' src={Logo} alt="app_logo"  /></Link>
            <div>
                <ul className='flex space-x-10'>
                    <Link to="/"><li className='cursor-pointer font-semibold'>Home</li></Link>
                    <Link to="/about"><li className='cursor-pointer font-semibold'>About</li></Link>
                    <li className='cursor-pointer font-semibold' onClick={() => setShowCart(true)}>Cart {`(${cartItems.length})`}</li>
                    <li className='cursor-pointer font-semibold' onClick={() => user.setUser("Abhishek Prakhar")}>Login</li>
                    <li>{user.user}</li>
                </ul>
            </div>
            {showCart && createPortal(<Cart onClose={() => setShowCart(false)} />, document.getElementById('modal'))}
        </div>
    )
}

export default Header