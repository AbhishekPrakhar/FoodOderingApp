import React from "react";
import { useParams } from "react-router-dom";

const RestaurantMenu = () => {

    const { resId } = useParams()

    return (
        <div>
            <h1>This is restaurant {resId}</h1>
        </div>
    )
}

export default RestaurantMenu;