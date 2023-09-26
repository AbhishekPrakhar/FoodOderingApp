import React from "react";
import Logo from "../../public/Logo.png"
import { Link } from "react-router-dom";

const Header = () => {
    return (
        <div className='flex justify-between items-center shadow-lg px-32'>
            <img className='w-20 my-3' src={Logo} alt="app_logo" />
            <div>
                <ul className='flex space-x-5'>
                    <Link to="/"><li className='cursor-pointer'>Home</li></Link>
                    <Link to="/about"><li className='cursor-pointer'>About</li></Link>
                    <li className='cursor-pointer'>Cart</li>
                    <li className='cursor-pointer'>Login</li>
                </ul>
            </div>
        </div>
    )
}

export default Header