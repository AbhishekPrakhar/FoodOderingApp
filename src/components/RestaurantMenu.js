import React from "react";
import { useParams } from "react-router-dom";
import useRestaurantMenu from "./utils/useRestaurantMenu";

const RestaurantMenu = () => {
    const { resId } = useParams()
    const { menuItems } = useRestaurantMenu(resId)

    const restaurantInfo = menuItems?.cards?.find(c => c?.card?.card?.["@type"] === "type.googleapis.com/swiggy.presentation.food.v2.Restaurant");

    const menuWithCategory = menuItems?.cards?.find(c => c?.groupedCard)?.groupedCard?.cardGroupMap?.REGULAR?.cards?.filter(cat => (cat?.card?.card?.["@type"] === "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory" || cat?.card?.card?.["@type"] === "type.googleapis.com/swiggy.presentation.food.v2.NestedItemCategory"))

    console.log(restaurantInfo, menuWithCategory);

    return (
        <div className='text-center min-h-[75vh]'>
            <div className='border-b-2 border-gray-200 flex justify-center'>
                <div>
                    <h1 className='text-xl font-semibold'>{restaurantInfo?.card?.card?.info?.name}</h1>
                    <p>{restaurantInfo?.card?.card?.info?.cuisines.join(",")}</p>
                </div>
                <div>
                    <p>{restaurantInfo?.card?.card?.info?.avgRating}</p>
                    <p>{restaurantInfo?.card?.card?.info?.totalRatingsString}</p>
                </div>
            </div>
            
            {
                menuWithCategory?.map(category => (
                    <>
                        <p className='font-semibold'>{category?.card?.card?.title + " (" + category?.card?.card?.itemCards?.length + ")"}</p>
                        {
                            category?.card?.card?.itemCards?.map(item => (
                                <p>{item?.card?.info?.name}</p>
                            ))
                        }
                    </>
                ))
            }
            <p></p>
        </div>
    )
}

export default RestaurantMenu;