const fetch = require("node-fetch");

export const MENU_URL =
  "https://thingproxy.freeboard.io/fetch/https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=28.7040592&lng=77.10249019999999&restaurantId=";

export const REST_OF_MENU_URL = "&catalog_qa=undefined&submitAction=ENTER";

exports.handler = async (event, context) => {
  const { resId } = event.queryStringParameters;

  if (!resId) {
    return {
      statusCode: 400,
      body: JSON.stringify({ message: "resId parameter is required" }),
    };
  }

  try {
    // Replace with your actual restaurant menu API
    const response = await fetch(MENU_URL + resId + REST_OF_MENU_URL);
    const data = await response.json();

    return {
      statusCode: 200,
      body: JSON.stringify(data),
    };
  } catch (error) {
    return {
      statusCode: 500,
      body: JSON.stringify({
        message: "Error fetching data",
        error: error.message,
      }),
    };
  }
};
