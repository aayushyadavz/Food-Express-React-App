const axios = require("axios");

exports.handler = async function (event, context) {
  try {
    console.log("Starting data fetch...");

    const apiUrl =
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=28.7040592&lng=77.10249019999999&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING";
    console.log("API URL:", apiUrl);

    const response = await axios.get(apiUrl, {
      headers: {
        "User-Agent":
          "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.124 Safari/537.36",
      },
    });

    console.log("Data fetched successfully:", response.data);

    return {
      statusCode: 200,
      body: JSON.stringify(response.data),
    };
  } catch (error) {
    console.error("Error fetching data:", error.message);
    console.error("Error details:", error);

    return {
      statusCode: 500,
      body: JSON.stringify({
        error: "Failed to fetch data",
        details: error.message,
      }),
    };
  }
};
