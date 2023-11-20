import React from "react";
import { useParams } from "react-router-dom";
import useRestaurantMenu from "./utils/useRestaurantMenu";
import { CDN_URL } from "./utils/constants";

const RestaurantMenu = () => {
    const { resId } = useParams()
    const { menuItems } = useRestaurantMenu(resId)

    const restaurantInfo = menuItems?.cards?.find(c => c?.card?.card?.["@type"] === "type.googleapis.com/swiggy.presentation.food.v2.Restaurant");

    const menuWithCategory = menuItems?.cards?.find(c => c?.groupedCard)?.groupedCard?.cardGroupMap?.REGULAR?.cards?.filter(cat => (cat?.card?.card?.["@type"] === "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory" || cat?.card?.card?.["@type"] === "type.googleapis.com/swiggy.presentation.food.v2.NestedItemCategory"))

    console.log(restaurantInfo, menuWithCategory);

    return (
        <div className='text-center min-h-[75vh]'>
            <div className='border-b-2 border-gray-200 flex justify-center py-6'>
                <img src={CDN_URL + restaurantInfo?.card?.card?.info?.cloudinaryImageId} alt="res-img" className='w-64 rounded-md'  />
                <div className='mx-5'>
                    <h1 className='text-xl font-semibold'>{restaurantInfo?.card?.card?.info?.name}</h1>
                    <p>{restaurantInfo?.card?.card?.info?.cuisines.join(",").trim()}</p>
                    <div className='flex'>
                        <p>{restaurantInfo?.card?.card?.info?.avgRating}</p>
                        <p>{restaurantInfo?.card?.card?.info?.totalRatingsString}</p>
                    </div>
                </div>
                
            </div>
            
            {
                menuWithCategory?.map(category => (
                    <div className='w-[75%] m-auto'>
                        <p className='font-semibold'>{category?.card?.card?.title}</p>
                        <p className="border-b-2 border-gray-200">{`${category?.card?.card?.itemCards?.length} items`}</p>
                        {
                            category?.card?.card?.itemCards?.map(item => (
                                <div className='flex justify-between border-b-2 border-gray-200'>
                                    <div>
                                        <p>{item?.card?.info?.name}</p>
                                        <p>{"₹ " + (item?.card?.info?.price || item?.card?.info?.defaultPrice) / 100}</p>
                                        {/* <p className='w-[75%]'>{item?.card?.info?.description}</p> */}
                                    </div>
                                    <div>
                                        <img className='w-24' src={CDN_URL+item?.card?.info?.imageId} alt="dish-image" />
                                        <button className='border-2 border-gray-800 rounded-md p-1'>ADD +</button>
                                    </div>
                                </div>
                            ))
                        }
                    </div>
                ))
            }
            <p></p>
        </div>
    )
}

export default RestaurantMenu;