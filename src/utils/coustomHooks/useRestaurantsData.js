// Coustom hook
import { useState, useEffect } from "react";

const useRestaurantsData = () => {
  const [listOfRestaurants, setlistOfRestaurants] = useState([]);
  const [filteredRestaurants, setFilteredRestaurants] = useState([]);
  const [searchText, setSearchText] = useState("");
  const [isFilteredTopRated, setIsFilteredTopRated] = useState(false);
  const [isFilteredTime, setIsFilteredTime] = useState(false);

  // data fetching
  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const response = await fetch(
      "https://thingproxy.freeboard.io/fetch/https://www.swiggy.com/dapi/restaurants/list/v5?lat=28.7040592&lng=77.10249019999999&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
    );
    const data = await response.json();
    console.log(data);

    setlistOfRestaurants(
      data?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
    setFilteredRestaurants(
      data?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
  };

  // cross button clear input
  const clearInputSearch = () => {
    setSearchText("");
    setFilteredRestaurants(listOfRestaurants);
  };

  // filter button top rated restaurants
  const filterTopRated = () => {
    if (isFilteredTopRated) {
      setFilteredRestaurants(listOfRestaurants);
      setIsFilteredTopRated(false);
    } else {
      const filteredList = listOfRestaurants.filter(
        (res) => res.info.avgRating > 4.4
      );
      setFilteredRestaurants(filteredList);
      setIsFilteredTopRated(true);
    }
  };

  // filter button pure veg
  const filterPureVeg = () => {
    if (isFilteredTime) {
      setFilteredRestaurants(listOfRestaurants);
      setIsFilteredTime(false);
    } else {
      const filteredList = listOfRestaurants.filter(
        (res) => res.info.sla.deliveryTime < 26
      );
      setFilteredRestaurants(filteredList);
      setIsFilteredTime(true);
    }
  };

  // filter restaurants search
  const filterRestaurants = () => {
    const filteredRestaurants = listOfRestaurants.filter(
      (res) =>
        res.info.name.toLowerCase().includes(searchText.toLowerCase()) ||
        res.info.cuisines.some((cuisines) =>
          cuisines.toLowerCase().includes(searchText.toLowerCase())
        )
    );
    setFilteredRestaurants(filteredRestaurants);
  };

  // Enter key press function
  const handleKeyPress = (e) => {
    if (e.key === "Enter") {
      filterRestaurants();
    }
  };

  return {
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
  };
};

export default useRestaurantsData;
