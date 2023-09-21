import React from "react";
import Logo from "../../public/Logo.png"

const Header = () => {
    return (
        <div className='flex justify-between'>
            <img className="w-40" src={Logo} alt="app_logo" />
            <div>
                <ul className='flex space-x-5'>
                    <li>Home</li>
                    <li>About</li>
                    <li>Cart</li>
                    <li>Login</li>
                </ul>
            </div>
        </div>
    )
}

export default Header