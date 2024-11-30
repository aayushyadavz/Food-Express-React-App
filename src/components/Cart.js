import CartItems from "./CartItems";
import { useDispatch, useSelector } from "react-redux";
import { clearCart } from "../utils/cartSlice";

const Cart = () => {
  const items = useSelector((store) => store.cart.items);
  const dispatch = useDispatch();

  const handleClick = () => {
    dispatch(clearCart());
  };

  const totalPrice = items.reduce(
    (total, item) => total + (item.defaultPrice || item.price) / 100,
    0
  );

  return (
    <div className="flex justify-center bg-gray-200 mt-16 md:mt-20">
      <div className="md:w-3/5 w-full bg-white">
        {items.length === 0 ? (
          <div className="flex items-center flex-col my-36">
            <img
              className="w-52"
              src="https://cdn-icons-png.flaticon.com/512/11329/11329060.png"
              alt="Empty Cart Image"
            />
            <h1 className="text-xl font-medium text-center ">
              Your cart is empty, Add some food!
            </h1>
          </div>
        ) : (
          <div className="my-12">
            <h1 className="text-center font-bold mb-9 text-2xl">
              Cart (Added items)
            </h1>
            <div className="text-center px-28">
              <div className="min-h-60 max-h-60 overflow-y-auto">
                {items.map((item, index) => (
                  <CartItems key={index} itemsData={item} />
                ))}
              </div>
              <div className="mt-4 border-t-2 border-t-black pt-2 flex justify-between px-3 font-semibold text-lg">
                <p>TO PAY :</p>
                <p>₹{totalPrice}</p>
              </div>
              <div className="mt-9 mb-4">
                <button
                  className="w-3/12 bg-red-600 py-1 rounded-lg font-semibold text-white"
                  onClick={() => handleClick()}
                >
                  Clear Cart
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Cart;
