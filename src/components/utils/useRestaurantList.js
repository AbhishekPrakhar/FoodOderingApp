import React, { useEffect, useState } from "react";

const useRestaurantList = (url) => {
    const [allRestaurants, setAllRestaurants] = useState(null);
    const [filterResult, setFilterResult] = useState()

    const fetchData = async () => {
        try {
            const response = await fetch(url)

            if(response.ok) {
                const jsonData = await response.json()

                for(let i = 0; i < jsonData?.data?.cards.length; i++) {
                    if(jsonData?.data?.cards[i]?.card?.card?.gridElements?.infoWithStyle?.restaurants) {
                        setAllRestaurants(jsonData?.data?.cards[i]?.card?.card?.gridElements?.infoWithStyle?.restaurants)
                        setFilterResult(jsonData?.data?.cards[i]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
                        break;
                    }
                }     
                
            } else {
                const err = response.status
                throw new Error(err);
            }

            
        } catch (error) {
            console.log(error);
        }
        
    }

    useEffect(() => {
        fetchData();
    }, [])

    // console.log(receivedData);

    return {allRestaurants, filterResult};
}

export default useRestaurantList;