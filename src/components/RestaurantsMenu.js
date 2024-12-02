import { useParams } from "react-router-dom";
import Accordian from "./Accordian";
import useRestaurantsMenu from "../utils/coustomHooks/useRestaurantsMenu";
import { ShimmerForMenu } from "./Shimmer";
import { useState } from "react";

const RestaurantsMenu = () => {
  const { resId } = useParams();
  const resMenu = useRestaurantsMenu(resId);
  const [showIndex, setShowIndex] = useState(0);

  if (resMenu === null) {
    return (
      <div className="flex justify-center w-full pt-16">
        <div className="w-[63%]">
          {Array(10)
            .fill("")
            .map((_, index) => (
              <ShimmerForMenu key={index} />
            ))}
        </div>
      </div>
    );
  }

  const {
    name,
    avgRating,
    costForTwoMessage,
    cuisines,
    areaName,
    sla: { minDeliveryTime, maxDeliveryTime },
  } = resMenu?.cards[2]?.card?.card?.info;

  const categories =
    resMenu?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards.filter(
      (category) =>
        category.card?.card?.["@type"] ===
        "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"
    );

  return (
    <div className="flex justify-center w-full md:mt-20 mt-16 bg-gray-200">
      <div className="md:w-3/5 w-full bg-white">
        <h1 className="text-3xl font-bold pl-4 pt-3">{name}</h1>
        <div className="p-4 rounded-br-3xl rounded-bl-3xl mt-4 mb-6 bg-gradient">
          <div className="bg-white px-4 py-5 rounded-2xl font-bold">
            <h3 className="text-xl">
              {avgRating} • {costForTwoMessage}
            </h3>
            <h4 className="text-red-600 text-lg underline cursor-pointer">
              {cuisines.join(", ")}
            </h4>
            <h4 className="mb-1">
              Outlet{" "}
              <span className="pl-2 text-base font-normal">{areaName}</span>
            </h4>
            <h4 className="mb-1">
              {minDeliveryTime}-{maxDeliveryTime} mins
            </h4>
          </div>
        </div>

        <p className="text-center tracking-[3px] mb-3 font-medium text-gray-500">
          - MENU -
        </p>
        <hr></hr>
        <div className="bg-gray-200">
          {categories.map((category, index) => (
            // Controlled Component
            <Accordian
              key={index}
              data={category.card.card}
              isOpen={index === showIndex}
              setShowIndex={() =>
                setShowIndex(index === showIndex ? null : index)
              }
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default RestaurantsMenu;
