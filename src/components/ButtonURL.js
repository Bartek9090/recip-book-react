import { useState, useEffect } from "react";
import axios from "axios";

const ButtonURL = ({ recipeId }) => {
  const [url, setUrl] = useState("");

  useEffect(() => {
    const fetchRecipeUrl = async () => {
      try {
        const response = await axios.get(
          `https://api.spoonacular.com/recipes/${recipeId}/information?apiKey=${process.env.REACT_APP_API_RECIP_BOOK_KEY}`
        );
        setUrl(response.data.sourceUrl);
      } catch (error) {
        console.error("Error fetching recipe URL:", error);
      }
    };

    if (recipeId) {
      fetchRecipeUrl();
    }
  }, [recipeId]);

  return (
    <button>
      <a href={url} target="_blank" rel="noopener noreferrer">
        Full Instruction
      </a>
    </button>
  );
};

export default ButtonURL;
