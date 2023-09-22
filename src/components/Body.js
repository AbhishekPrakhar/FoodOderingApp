import React, { useEffect, useState } from "react";
import useGetAPI from "./utils/useGetAPI";
import { RESTAURANTS_URL } from "./utils/constants";

const Body = () => {

    const restaurants = useGetAPI(RESTAURANTS_URL);

    const restaurantsList = restaurants?.data?.cards[5]?.card?.card?.gridElements?.infoWithStyle?.restaurants

    return (
        <div className='flex px-14 space-x-4 space-y-4'>
            {
                restaurantsList.map(restaurant => (
                    <div className='p-4 rounded-md shadow-md'>
                        <h4>{restaurant.info.name}</h4>
                    </div>
                ))
            }
        </div>
    )
}

export default Body;