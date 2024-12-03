import React, { useState } from "react";
import RestaurantCard from "./RestaurantCard";
import { Shimmer } from "./Shimmer";
import { Link } from "react-router-dom";
import useRestaurantsData from "../utils/coustomHooks/useRestaurantsData";
import useOnlineStatus from "../utils/coustomHooks/useOnlineStatus";

const Body = () => {
  const [query, setQuery] = useState("");

  const {
    filteredRestaurants,
    clearInputSearch,
    searchText,
    setSearchText,
    filterTopRated,
    filterRestaurants,
    isFilteredTopRated,
    isFilteredTime,
    filterPureVeg,
    handleKeyPress,
  } = useRestaurantsData();

  const onlineStatus = useOnlineStatus();

  if (onlineStatus === false) {
    return (
      <div className="min-h-screen flex justify-center items-center">
        <div>
          <h1 className="text-3xl font-bold">
            You are out of internet connection! Please turn on you network to
            see content of this site.
          </h1>
        </div>
      </div>
    );
  }

  return (
    <div className="flex justify-center w-full bg-gray-200">
      <div className="md:w-[75%] w-full md:mt-20 mt-16 bg-white px-6">
        <div className="flex my-11 sm:mx-14">
          <div className="flex flex-1 border-solid border-2 border-gray-300 rounded-lg overflow-hidden">
            <input
              type="text"
              className="w-full py-2 px-4 focus:outline-none text-lg font-semibold"
              placeholder="Search for restaurants and food"
              value={searchText}
              onChange={(e) => {
                setSearchText(e.target.value);
                setQuery(e.target.value);

                if (e.target.value.trim() === "") {
                  clearInputSearch();
                }
              }}
              onKeyDown={handleKeyPress}
            />
            {searchText && (
              <button
                className="bg-white text-red-600 text-3xl pr-2 pb-1 font-semibold"
                onClick={clearInputSearch}
              >
                &times;
              </button>
            )}
          </div>
          <button data-testid="search" onClick={filterRestaurants}>
            <i className="fa-solid fa-magnifying-glass text-xl text-gray-800 ml-3 pt-1"></i>
          </button>
        </div>
        <h1 className="sm:text-3xl text-2xl font-bold">
          Restaurants with online food delivery near you
        </h1>
        <div className="mt-5 mb-8 font-medium text-sm">
          <button
            className={`border border-gray-400 p-2 rounded-full shadow-md ${
              isFilteredTopRated ? "bg-red-200" : "bg-transparent"
            }`}
            onClick={filterTopRated}
          >
            Top Rated Restaurants
          </button>
          <button
            className={`border border-gray-400 p-2 rounded-full ml-4 shadow-md ${
              isFilteredTime ? "bg-red-200" : "bg-transparent"
            }`}
            onClick={filterPureVeg}
          >
            Less than 25 mins
          </button>
        </div>
        {filteredRestaurants.length === 0 ? (
          <div className="flex flex-wrap justify-between">
            {Array(12)
              .fill("")
              .map((_, index) => (
                <Shimmer key={index} />
              ))}
          </div>
        ) : (
          <div className="grid md:grid-cols-4 sm:grid-cols-3 gap-4 sm:justify-items-center mb-14">
            {filteredRestaurants.map((restaurant) => (
              <Link to={"/menu/" + restaurant.info.id} key={restaurant.info.id}>
                <RestaurantCard resData={restaurant} />
              </Link>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default Body;
