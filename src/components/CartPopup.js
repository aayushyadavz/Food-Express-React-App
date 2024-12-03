import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

const CartPopup = () => {
  const cartItems = useSelector((store) => store.cart.items);
  const showPopup = useSelector((store) => store.cart.showPopup);

  if (!showPopup) {
    return null;
  }

  return (
    <div className="w-full flex justify-center fixed bottom-0 left-0 z-50">
      <div className="flex items-center w-full md:w-3/5 justify-between shadow-lg bg-red-500 px-4 py-2">
        <p className="text-lg text-white font-semibold">
          {cartItems.length} items added to the cart!
        </p>
        <Link to="/cart" className="underline text-lg font-semibold text-white">
          View Cart <i className="fa-solid fa-angle-right ml-1"></i>
        </Link>
      </div>
    </div>
  );
};

export default CartPopup;
