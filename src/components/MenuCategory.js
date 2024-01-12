import { useState } from "react";
import MenuItemList from "./MenuItemList";

const MenuCategory = ({ category }) => {

    const [showList, setShowList] = useState(true);

    return ( 
        <div className='w-[75%] m-auto my-3'>
            <div className='bg-gray-200 rounded-md border-2 flex justify-between p-5' onClick={() => setShowList(pre => !pre)}>
                <p className='font-semibold'>{`${category?.card?.card?.title} (${category?.card?.card?.itemCards?.length} items)`}</p>
                <div>
                {
                    showList ? <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                        <path stroke-linecap="round" stroke-linejoin="round" d="m4.5 15.75 7.5-7.5 7.5 7.5" />
                    </svg> :
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                        <path stroke-linecap="round" stroke-linejoin="round" d="m19.5 8.25-7.5 7.5-7.5-7.5" />
                    </svg>
                }                  
                </div> 

            </div>
        
        {
            showList && <MenuItemList category={category} />
        }
        </div>
     );
}
 
export default MenuCategory;