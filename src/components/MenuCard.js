import { MENU_IMG_URL } from "../utils/constants";
import { addItems } from "../utils/cartSlice";
import { useDispatch } from "react-redux";
import { useState } from "react";

const MenuCard = ({ itemsData }) => {
  const [isClicked, setIsClicked] = useState(false);
  const dispatch = useDispatch();

  const handleClick = (itemsData) => {
    dispatch(addItems(itemsData));

    setIsClicked(true);
    setTimeout(() => {
      setIsClicked(false);
    }, 500);
  };

  return (
    <div
      data-testid="foodItems"
      className="flex justify-between py-3 px-4 items-center bg-white border-b-2 border-gray-100 gap-2 sm:gap-0"
    >
      <div className="w-8/12 sm:mb-4">
        <h3 className="text-xl font-bold text-gray-600">{itemsData.name}</h3>
        <p className="text-lg font-medium mb-4">
          ₹ {itemsData.price / 100 || itemsData.defaultPrice / 100}
        </p>
        <p className="text-gray-500 text-lg leading-tight cursor-pointer line-clamp-2 overflow-ellipsis">
          {itemsData.description}
        </p>
      </div>
      <div className="mb-3 text-center relative">
        <img
          className="w-40 h-32 sm:h-36 object-cover rounded-xl"
          src={MENU_IMG_URL + itemsData.imageId}
          alt="Food Item Images"
        />
        <div className="absolute inset-x-0 bottom-[-14px] pl-1">
          <button
            className={` text-green-500 bg-white text-xl font-semibold px-8 py-1 shadow-lg rounded-lg hover:bg-red-200 transition ease-in-out delay-100 duration-75 ${
              isClicked ? `translate-x scale-90` : ``
            }`}
            onClick={() => handleClick(itemsData)}
          >
            ADD
          </button>
        </div>
      </div>
    </div>
  );
};

export default MenuCard;
