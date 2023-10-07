import React from "react";
import Logo from "../../public/Logo3.png"
import { Link } from "react-router-dom";

const Header = () => {
    return (
        <div className='flex justify-between items-center shadow-lg px-28 bg-[#F29548]'>
            <Link to="/"><img className='w-16 my-3' src={Logo} alt="app_logo"  /></Link>
            <div>
                <ul className='flex space-x-10'>
                    <Link to="/"><li className='cursor-pointer font-semibold'>Home</li></Link>
                    <Link to="/about"><li className='cursor-pointer font-semibold'>About</li></Link>
                    <li className='cursor-pointer font-semibold'>Cart</li>
                    <li className='cursor-pointer font-semibold'>Login</li>
                </ul>
            </div>
        </div>
    )
}

export default Header