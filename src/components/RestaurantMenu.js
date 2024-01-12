import React, { useState } from "react";
import { useParams } from "react-router-dom";
import useRestaurantMenu from "../utils/hooks/useRestaurantMenu";
import { CDN_URL } from "../utils/constants";
import { addItem } from "../utils/stores/cartSlice";
import MenuCategory from "./MenuCategory";

const RestaurantMenu = () => {
    const { resId } = useParams()
    const { menuItems } = useRestaurantMenu(resId)

    const restaurantInfo = menuItems?.cards?.find(c => c?.card?.card?.["@type"] === "type.googleapis.com/swiggy.presentation.food.v2.Restaurant");

    const menuWithCategory = menuItems?.cards?.find(c => c?.groupedCard)?.groupedCard?.cardGroupMap?.REGULAR?.cards?.filter(cat => (cat?.card?.card?.["@type"] === "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory" || cat?.card?.card?.["@type"] === "type.googleapis.com/swiggy.presentation.food.v2.NestedItemCategory"))

    // console.log(restaurantInfo, menuWithCategory);

    return (
        <div className='text-center min-h-[75vh]'>
            <div className='border-b-2 border-gray-200 flex justify-center py-6 bg-zinc-500'>
                <img src={CDN_URL + restaurantInfo?.card?.card?.info?.cloudinaryImageId} alt="res-img" className='w-64 rounded-md'  />
                <div className='mx-5'>
                    <h1 className='text-xl font-semibold '>{restaurantInfo?.card?.card?.info?.name}</h1>
                    <p>{restaurantInfo?.card?.card?.info?.cuisines}</p>
                    <div className='flex'>
                        <p>{restaurantInfo?.card?.card?.info?.avgRating}</p>
                        <p>{restaurantInfo?.card?.card?.info?.totalRatingsString}</p>
                    </div>
                </div>
                
            </div>
            
            {
                menuWithCategory?.map((category, index) => (
                    <MenuCategory 
                        category={category}  
                    />            
                ))
            }
        </div>
    )
}

export default RestaurantMenu;