import { useDispatch } from "react-redux";
import { MENU_IMG_URL } from "../utils/constants";
import { removeItems } from "../utils/cartSlice";

const CartItems = ({ itemsData }) => {
  const dispatch = useDispatch();

  const handleClick = (id) => {
    dispatch(removeItems(id));
  };

  return (
    <div
      data-testid="item"
      className="flex justify-between items-center gap-2 border-t-[1px] border-gray-300"
    >
      <div className="flex justify-between px-3 items-center text-lg w-full gap-3 sm:gap-28 md:gap-24">
        <img
          className="w-14 h-12 object-cover rounded-lg my-1 flex-shrink-0"
          src={MENU_IMG_URL + itemsData.imageId}
          alt="Food items image"
        />
        <h4
          data-testid="itemName"
          className="font-medium overflow-hidden overflow-ellipsis"
          style={{
            display: "-webkit-box",
            WebkitLineClamp: 1,
            WebkitBoxOrient: "vertical",
          }}
        >
          {itemsData.name}
        </h4>
        <p className="text-gray-600">
          ₹
          {Math.floor(itemsData.defaultPrice / 100) ||
            Math.floor(itemsData.price / 100)}
        </p>
      </div>
      <div className="px-3 cursor-pointer border-l-[1px] border-gray-300">
        <button onClick={() => handleClick(itemsData.id)}>
          <i className="fa-solid fa-circle-minus text-red-500"></i>
        </button>
      </div>
    </div>
  );
};

export default CartItems;
