import axios from "axios";
import { useState } from "react";
import Search from "../components/Search";
import RecipeList from "../components/RecipeList";
import MainNavigation from "../components/MainNavigation";

export default function RecipePage() {
  const [search, setSearch] = useState("");
  const [recipes, setRecipes] = useState([]);
  const [searchClicked, setSearchClicked] = useState(false);

  async function getRecipesByIngredients() {
    try {
      console.log("jestem");
      const resp = await axios.get(
        "http://localhost:4000/recipesByIngredients",

        {
          params: { search },
        }
      );
      setRecipes(resp.data);
    } catch (error) {
      console.error("Error fetching recipes:", error);
    }
  }

  const handleChange = (e) => {
    setSearch(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (search.trim() !== "") {
      await getRecipesByIngredients(search);
      setSearchClicked(true);
    } else {
      alert("Search field is empty. Please enter ingredients.");
    }
  };

  return (
    <>
      <MainNavigation />
      <Search
        search={search}
        handleChange={handleChange}
        handleSubmit={handleSubmit}
      />
      <RecipeList
        recipes={recipes}
        searchTerm={search}
        searchClicked={searchClicked}
      />
    </>
  );
}
