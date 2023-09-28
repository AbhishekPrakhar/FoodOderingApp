import React, { useEffect, useRef, useState } from "react";
import useRestaurantList from "./utils/useRestaurantList";
import RestaurantCard from "./RestaurantCard";
import { Link } from "react-router-dom";
import { RESTAURANTS_URL } from "./utils/constants";

const Body = () => {

    const {allRestaurants, filterResult} = useRestaurantList(RESTAURANTS_URL);
    const [filteredRestaurant, setFilteredRestaurant] = useState([]);
    const inputRef = useRef(null);

    const handleSearch = () => {
        const searchText =  inputRef.current.value.trim();
        if(searchText === '' && filteredRestaurant.length === 0) {
            return;
        }

        if(searchText === '' && filteredRestaurant.length !== 0) {
            setFilteredRestaurant([]);
            return;
        }

        const filteredData = allRestaurants.filter(restaurant => (
            restaurant?.info?.name.toLowerCase().includes(searchText.toLowerCase())
        ))

        // console.log(searchText, allRestaurants, filteredData);

        setFilteredRestaurant(filteredData)
    }

    return (
        <div>
            <div className='m-4 p-4 flex justify-center items-center'> 
                <input className='border-l-2 border-t-2 border-b-2 rounded-l-md border-gray-400 w-1/4 h-9 px-1 py-2' type="text" ref={inputRef} placeholder="Search Restaurants..."/>
                <button className=' bg-[#FC8B2E] w-20 border-2 border-gray-400 rounded-r-md h-9 hover:bg-[#fcb02e]' onClick={handleSearch}>
                    Search
                </button>
            </div>
            <div className='flex flex-wrap justify-center'>
                {
                    (filteredRestaurant.length !== 0 ? filteredRestaurant : filterResult)?.map(restaurant => (
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