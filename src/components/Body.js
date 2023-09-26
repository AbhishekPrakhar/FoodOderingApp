import React, { useEffect, useState } from "react";
import useGetAPI from "./utils/useGetAPI";
import { RESTAURANTS_URL } from "./utils/constants";
import RestaurantCard from "./RestaurantCard";
import RestaurantMenu from "./RestaurantMenu";
import { Link } from "react-router-dom";

const Body = () => {

    const restaurants = useGetAPI(RESTAURANTS_URL);

    const restaurantsList = restaurants?.data?.cards[5]?.card?.card?.gridElements?.infoWithStyle?.restaurants

    // console.log(showMenu);

    return (
        <div>
            <div className='m-4 p-4'> 
                <input className='border-4' type="text" />
                <button>
                    Search
                </button>
            </div>
            <div className='flex flex-wrap justify-center'>
                {
                    restaurantsList?.map(restaurant => (
                        <Link key = {restaurant.info.id} to={"/restaurants/" + restaurant.info.id}>
                            <RestaurantCard
                                name = {restaurant.info.name}
                                imageID = {restaurant.info.cloudinaryImageId}
                                rating = {restaurant.info.avgRating}
                                costForTwo = {restaurant.info.costForTwo}
                                cuisines = {restaurant.info.cuisines}
                            />
                        </Link>
                    ))
                }
            </div>
        </div>
    )
}

export default Body;