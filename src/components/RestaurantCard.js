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
      className="flex flex-row sm:flex-col sm:w-52 w-full sm:p-1 sm:h-[277px] shadow-md h-28 hover:shadow-xl transition ease-in-out delay-100 hover:translate-x hover:scale-95 rounded-lg duration-75"
    >
      <img
        className="sm:h-36 h-full w-[40%] sm:w-full object-cover sm:rounded-3xl"
        alt="RestaurantCard logo"
        src={CDN_URL + cloudinaryImageId}
        p
      />
      <div className="p-3 w-[60%] sm:w-full">
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

export default RestaurantCard;
