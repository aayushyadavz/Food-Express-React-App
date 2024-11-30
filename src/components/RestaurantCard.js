import { CDN_URL } from "../utils/constants"; // named imports

const RestaurantCard = (props) => {
  const { resData } = props;
  const {
    name,
    cloudinaryImageId,
    cuisines,
    avgRating,
    sla: { deliveryTime },
  } = resData?.info;

  return (
    <div
      data-testid="resCard"
      className="flex flex-row sm:flex-col sm:w-52 w-full sm:p-1 hover:border hover:border-red-600 hover:rounded-lg sm:h-[277px] h-28 hover:shadow-xl"
    >
      <img
        className="sm:h-36 h-full sm:w-full object-cover sm:rounded-3xl shadow-md"
        alt="RestaurantCard logo"
        src={CDN_URL + cloudinaryImageId}
        p
      />
      <div className="p-3">
        <h3 className="text-xl font-bold overflow-ellipsis overflow-hidden w-full line-clamp-1">
          {name}
        </h3>
        <h4 className="text-lg font-medium">
          <i class="fa-solid fa-star fa-xs"></i> {avgRating} Stars{" "}
          <span className="font-semibold">• {deliveryTime} mins </span>
        </h4>
        <h4 className="text-lg leading-tight text-gray-500 overflow-hidden overflow-ellipsis sm:line-clamp-2 line-clamp-1">
          {cuisines.join(", ")}
        </h4>
      </div>
    </div>
  );
};

// Higher Order Component
const withPriceLabel = (RestaurantCard) => {
  return (props) => {
    const { resData } = props;
    const { aggregatedDiscountInfoV3 } = resData?.info;

    return (
      <div>
        <label className="absolute text-white font-extrabold bg-orange-400 bg-opacity-60 p-1 rounded-xl mt-3 ml-3">
          {aggregatedDiscountInfoV3.header} {aggregatedDiscountInfoV3.subHeader}
        </label>
        <RestaurantCard {...props} />
      </div>
    );
  };
};

export default RestaurantCard;
export { withPriceLabel };
