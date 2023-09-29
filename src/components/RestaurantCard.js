import React from "react";
import { CDN_URL } from "./utils/constants";

const RestaurantCard = ({
    name, imageID, rating, costForTwo, cuisines
}) => {
    return (
        <div className='my-6 mx-8 rounded-xl shadow-lg w-[265px] hover:bg-gray-100 hover:scale-95 scale-100 ease-out duration-150'>
            <img className='rounded-t-xl cursor-pointer' src={CDN_URL+imageID} alt="res_img" />
            <div className='p-2 cursor-pointer'>
                <h4 className='truncate text-lg font-semibold'>{name}</h4>
                <span className={rating > 3.9 ? 'px-1 rounded-md bg-green-500' : 'px-1 rounded-md bg-red-500'}>
                    <i className="fa-solid fa-star text-white m-1"></i>
                    <span className='m-1 text-white'>{rating}</span>
                </span>
                <h3>{costForTwo}</h3>
                <p className='truncate text-gray-600'>{cuisines.join(", ")}</p>
            </div>
        </div>
    )
}

export default RestaurantCard;