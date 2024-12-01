exports.handler = async (event, context) => {
  const { resId } = event.queryStringParameters;

  if (!resId) {
    return {
      statusCode: 400,
      body: JSON.stringify({ message: "resId parameter is required" }),
    };
  }

  try {
    // Dynamically import node-fetch
    const { default: fetch } = await import("node-fetch");

    const response = await fetch(
      `https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=28.7040592&lng=77.10249019999999&restaurantId=${resId}&catalog_qa=undefined&submitAction=ENTER`
    );
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
