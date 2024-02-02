const express = require("express");
const cors = require("cors");
const axios = require("axios");
require("dotenv").config();

const api = express();

api.use(cors());
api.use(express.json());
api.get("/recipesByIngredients", async (req, res) => {
  const { search } = req.query;
  console.log("MAIN INQUARIES ");
  try {
    const response = await axios.get(
      `https://api.spoonacular.com/recipes/findByIngredients?apiKey=${process.env.REACT_APP_API_RECIP_BOOK_KEY}&ingredients=${search}`
    );

    res.json(response.data);
  } catch (error) {
    console.error("Error fetching recipes:", error);
    res.status(500).json({ error: "Error fetching recipes" });
  }
});

const PORT = process.env.PORT || 4000;
api.listen(PORT, () => console.log(`Server is running on ${PORT}`));
