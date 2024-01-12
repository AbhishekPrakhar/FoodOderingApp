import { useDispatch } from "react-redux";
import { CDN_URL } from "../utils/constants";
import { addItem } from "../utils/stores/cartSlice";


const MenuItemList = ({ category }) => {

    const dispatch = useDispatch()

    const handleAddItems = (item) => {
        dispatch(addItem(item))
    }

  return (
    <>
        {
            category?.card?.card?.itemCards?.map(item => (
                <div className="flex justify-between border-b-2 border-gray-200">
                <div>
                  <p>{item?.card?.info?.name}</p>
                  <p>
                    {"₹ " +
                      (item?.card?.info?.price || item?.card?.info?.defaultPrice) / 100}
                  </p>
                  {/* <p className='w-[75%]'>{item?.card?.info?.description}</p> */}
                </div>
                <div>
                  <img
                    className="w-24"
                    src={CDN_URL + item?.card?.info?.imageId}
                    alt="dish-image"
                  />
                  <button
                    className="border-2 border-gray-800 rounded-md p-1"
                    onClick={() => handleAddItems(item)}
                  >
                    ADD +
                  </button>
                </div>
              </div>         
            ))
        }
    </>
  );
};

export default MenuItemList;
