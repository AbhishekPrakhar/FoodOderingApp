import React, { useContext, useState } from "react";
import Logo from "../assets/Logo3.png"
import { Link } from "react-router-dom";
import UserContext from "../utils/contexts/UserContext";
import { useSelector } from "react-redux";
import Cart from "./Cart";
import Modal from "./Modal";

const Header = () => {
    const user = useContext(UserContext);
    const cartItems = useSelector((store) => store.cart.items);
    const [openModal, setOpenModal] = useState(false)

    console.log(cartItems);
    // console.log(React);

    return (
        <div className='flex justify-between items-center shadow-lg px-28 bg-[#F29548]'>
            <Link to="/"><img className='w-16 my-3' src={Logo} alt="app_logo"  /></Link>
            <div>
                <ul className='flex space-x-10'>
                    <Link to="/"><li className='cursor-pointer font-semibold'>Home</li></Link>
                    <Link to="/about"><li className='cursor-pointer font-semibold'>About</li></Link>
                    <li className='cursor-pointer font-semibold' onClick={() => setOpenModal(true)}>Cart {`(${cartItems.length})`}</li>
                    <li className='cursor-pointer font-semibold' onClick={() => user.setUser("Abhishek Prakhar")}>Login</li>
                    <li>{user.user}</li>
                </ul>
            </div>
            <Modal open={openModal} onClose={() => setOpenModal(false)}>
                <Cart />
            </Modal>
            
        </div>
    )
}

export default Header