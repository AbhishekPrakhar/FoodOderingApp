import React, { useContext } from "react";
import Logo from "../../public/Logo3.png"
import { Link } from "react-router-dom";
import UserContext from "../utils/contexts/UserContext";

const Header = () => {
    const user = useContext(UserContext);
    console.log(user);
    return (
        <div className='flex justify-between items-center shadow-lg px-28 bg-[#F29548]'>
            <Link to="/"><img className='w-16 my-3' src={Logo} alt="app_logo"  /></Link>
            <div>
                <ul className='flex space-x-10'>
                    <Link to="/"><li className='cursor-pointer font-semibold'>Home</li></Link>
                    <Link to="/about"><li className='cursor-pointer font-semibold'>About</li></Link>
                    <li className='cursor-pointer font-semibold'>Cart</li>
                    <li className='cursor-pointer font-semibold' onClick={() => user.setUser("Abhishek Prakhar")}>Login</li>
                    <li>{user.user}</li>
                </ul>
            </div>
        </div>
    )
}

export default Header