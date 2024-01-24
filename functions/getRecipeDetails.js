const axios = require("axios");
exports.handler = async function (event, context) {
  const { query } = event.queryStringParameters;
  const api_key = "164af9704a534bacb1c4fbb6086ed10b";

  try {
    const response = await axios.get(
      `https://api.spoonacular.com/recipes/findByIngredients?apiKey=${api_key}&ingredients=${query}`
    );
    return {
      statusCode: 200,
      body: JSON.stringify(response.data),
    };
  } catch (error) {
    console.error("Error fetching recipes:", error);
    return {
      statusCode: 500,
      body: JSON.stringify({ error: "Internal Server Error" }),
    };
  }
};
