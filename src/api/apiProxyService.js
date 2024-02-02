const axios = require("axios");
require("dotenv").config();

const apiEndpoint = "https://api.spoonacular.com/recipes/findByIngredients";

const handler = async (req, res) => {
  const { search } = req.query;
  console.log("MAIN INQUARIES ");

  try {
    console.log("jestem w backendzie");

    const response = await axios.get(
      `${apiEndpoint}?apiKey=${process.env.REACT_APP_API_RECIP_BOOK_KEY}&ingredients=${search}`
    );
    res.status(200).json(response.data);
  } catch (error) {
    console.error("Error fetching recipes:", error);
    res.status(500).json({ error: "Error fetching recipes" });
  }
};

module.exports = async (req, res) => {
  // Obsługa CORS
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader("Access-Control-Allow-Methods", "GET");

  // Wywołanie funkcji głównej
  await handler(req, res);
};
