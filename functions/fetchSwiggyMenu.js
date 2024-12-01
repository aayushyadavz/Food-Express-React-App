exports.handler = async (event, context) => {
  const { resId } = event.queryStringParameters;

  console.log("Received resId:", resId); // Log the resId

  if (!resId) {
    return {
      statusCode: 400,
      body: JSON.stringify({ message: "resId parameter is required" }),
    };
  }

  try {
    // Construct the API URL using the resId
    const apiUrl = `https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=28.7040592&lng=77.10249019999999&restaurantId=${resId}&catalog_qa=undefined&submitAction=ENTER`;

    console.log("API URL:", apiUrl); // Log the full URL to check if it's correct

    const { default: fetch } = await import("node-fetch");
    const response = await fetch(apiUrl, {
      method: "GET",
      headers: {
        "User-Agent":
          "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.124 Safari/537.36",
        // Add other necessary headers here, if any
      },
    });

    if (!response.ok) {
      console.log("API response error:", response.status);
      return {
        statusCode: 500,
        body: JSON.stringify({
          message: "Error fetching menu",
          status: response.status,
        }),
      };
    }

    const data = await response.json();
    console.log("Fetched menu data:", data); // Log the fetched menu data

    return {
      statusCode: 200,
      body: JSON.stringify(data),
    };
  } catch (error) {
    console.error("Error fetching menu:", error); // Log the exact error message
    return {
      statusCode: 500,
      body: JSON.stringify({
        message: "Error fetching data",
        error: error.message,
      }),
    };
  }
};
