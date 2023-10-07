import React, { useEffect, useRef, useState } from "react";
import useRestaurantList from "./utils/useRestaurantList";
import RestaurantCard from "./RestaurantCard";
import { Link } from "react-router-dom";
import Shimmer from "./Shimmer";

const Body = () => {

    const {allRestaurants, filterResult} = useRestaurantList();
    const [filteredRestaurant, setFilteredRestaurant] = useState([]);
    const inputRef = useRef(null);

    const handleSearch = () => {
        const searchText =  inputRef.current.value.trim();
        if(searchText === '' && filteredRestaurant.length === 0) {
            inputRef.current.value = '';
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

        inputRef.current.value = searchText;
        setFilteredRestaurant(filteredData)
    }

    const ShimmerUI = [<Shimmer />, <Shimmer />, <Shimmer />, <Shimmer />, <Shimmer />, <Shimmer />, <Shimmer />, <Shimmer />, <Shimmer />, <Shimmer />, <Shimmer />, <Shimmer />]    

    return (
        <div className='min-h-[75vh]'>
            <div className='m-4 p-4 flex justify-center items-center'>
                {/* <i className="fa-solid fa-magnifying-glass"></i>  */}
                <input className='border-l-2 border-t-2 border-b-2 rounded-l-md border-gray-400 w-1/4 h-9 px-1 py-2' type="text" ref={inputRef} placeholder="Search Restaurants..." />
                <button className=' bg-[#F29548] w-20 border-2 border-gray-400 rounded-r-md h-9 hover:bg-[#fcb02e]' onClick={handleSearch}>
                    Search
                </button>
            </div>
            <div className='flex flex-wrap justify-center'>
                {
                    filterResult ? 
                    (filteredRestaurant.length !== 0 ? filteredRestaurant : filterResult)?.map(restaurant => (
                        <Link key = {restaurant.info.id} to={"/restaurants/" + restaurant.info.id} style={{"cursor": 'default'}}>
                            <RestaurantCard
                                name = {restaurant.info.name}
                                imageID = {restaurant.info.cloudinaryImageId}
                                rating = {restaurant.info.avgRating}
                                costForTwo = {restaurant.info.costForTwo}
                                cuisines = {restaurant.info.cuisines}
                            />
                        </Link>
                    ))
                    :
                    ShimmerUI
                }
            </div>
        </div>
    )
}

export default Body;