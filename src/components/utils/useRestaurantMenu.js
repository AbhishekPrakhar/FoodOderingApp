import { useEffect, useState } from "react"
import { MENU_URL } from "./constants";


const useRestaurantMenu = (resId) => {
    const [menuItems, setMenuItems] = useState([]);

    const fetchData = async () => {
        try {
            const response = await fetch(MENU_URL + resId)

            if(response.ok) {
                const jsonData = await response.json();

                setMenuItems(jsonData.data)

            } else {
                const err = response.status
                throw new Error(err)
            }

        } catch(error) {
            console.log(error);
        } 
        
    }

    useEffect(() => {
        fetchData()
    }, [])

    return { menuItems }
}

export default useRestaurantMenu;

