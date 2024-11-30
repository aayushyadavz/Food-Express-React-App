import { LOGO_URL } from "../utils/constants";
import { useState } from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

const Header = () => {
  const [btnName, setBtnName] = useState("Login");
  const [isHamClick, setIsHamClick] = useState(false);

  const cartItems = useSelector((store) => store.cart.items);

  const handleToggle = () => {
    setIsHamClick(!isHamClick);
  };

  return (
    <div className="flex items-center justify-between px-6 shadow-lg fixed top-0 left-0 w-full bg-white z-50">
      <div className="py-2 md:pl-2">
        <Link to="/">
          <img
            className="md:w-16 w-12 rounded-lg shadow-lg"
            src={LOGO_URL}
            alt="Site Logo"
          />
        </Link>
      </div>
      <div
        className={`${
          isHamClick ? "block absolute" : "hidden"
        } md:flex md:static md:bg-transparent bg-gray-800 right-0 top-16 px-5 py-5 md:py-0 md:px-0 rounded-md md:rounded-none md:flex-row flex-col gap-3 md:gap-0 font-semibold text-xl md:text-lg hover:cursor-pointer md:text-gray-800 text-red-400`}
      >
        <ul className="flex flex-col md:flex-row gap-3 md:gap-0 font-semibold text-xl md:text-lg hover:cursor-pointer md:text-gray-800 text-red-400">
          <li className="px-3 mx-1 hover:text-red-600">
            <Link to="/">
              <i class="fa-solid fa-house mr-2"></i>Home
            </Link>
          </li>
          <li className="px-3 mx-1 hover:text-red-600">
            <Link to="/about">
              <i className="fa-solid fa-circle-exclamation mr-2"></i>About Us
            </Link>
          </li>
          <li className="px-3 mx-1 hover:text-red-600">
            <Link to="/contact">
              <i className="fa-solid fa-phone mr-2"></i>Contact Us
            </Link>
          </li>
          <li className="px-3 mx-1 hover:text-red-600">
            <Link to="/cart">
              <i className="fa-solid fa-cart-shopping mr-2"></i>Cart (
              {cartItems.length})
            </Link>
          </li>
          <li className="px-3 mx-1 hover:text-red-600">
            <button
              onClick={() => {
                btnName === "Login"
                  ? setBtnName("Logout")
                  : setBtnName("Login");
              }}
            >
              <i className="fa-solid fa-user mr-2"></i>
              {btnName}
            </button>
          </li>
        </ul>
      </div>
      <div className="md:hidden pr-2">
        <ul>
          <li>
            <button onClick={handleToggle} className="text-xl">
              {isHamClick ? (
                <i className="fa-solid fa-xmark"></i>
              ) : (
                <i className="fa-solid fa-bars"></i>
              )}
            </button>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Header;
