const axios = require("axios");

module.exports = async (req, res) => {
  const { search } = req.query;
  console.log("MAIN INQUARIES ");

  try {
    const response = await axios.get(
      `https://api.spoonacular.com/recipes/findByIngredients?apiKey=${process.env.REACT_APP_API_RECIP_BOOK_KEY}&ingredients=${search}`
    );

    res.status(200).json(response.data);
  } catch (error) {
    console.error("Error fetching recipes:", error);
    res.status(500).json({ error: "Error fetching recipes" });
  }
};
