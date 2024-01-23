import { useState, useEffect } from "react";
import { useParams, Link, useLocation } from "react-router-dom";
import axios from "axios";
import classes from "./SinglePage.module.css";
import MainNavigation from "../components/MainNavigation";
import ButtonURL from "../components/ButtonURL";
const SingleRecipe = () => {
  const { id } = useParams();
  const { state } = useLocation();

  const [recipe, setRecipe] = useState(state ? state.recipe : null);

  useEffect(() => {
    const fetchRecipe = async () => {
      try {
        const response = await axios.get(
          `https://api.spoonacular.com/recipes/${id}/information?apiKey=${process.env.REACT_APP_API_RECIP_BOOK_KEY}`
        );
        setRecipe(response.data);
      } catch (error) {
        console.error("Error fetching recipe:", error);
      }
    };

    if (!recipe) {
      fetchRecipe();
    }
  }, [id, recipe]);

  if (!recipe) {
    return (
      <div>
        <p>Brak danych receptury</p>
        <Link to="/" className={classes.button}>
          Back
        </Link>
      </div>
    );
  }

  return (
    <div>
      <MainNavigation />
      <div className={classes.singleRecipeMainContainer}>
        <div className={classes.singleRecipeImgContainer}>
          <img src={recipe.image} alt="food img" />
        </div>
        <div className={classes.singleRecipeDescriptionContainer}>
          <h1>{recipe.title}</h1>
          <p>Used Ingredients:</p>
          <ul>
            {recipe.usedIngredients.map((ingredient) => (
              <li key={ingredient.id}>
                {ingredient.amount} {ingredient.unitShort} {ingredient.name}
              </li>
            ))}
          </ul>
          {recipe.missedIngredients && recipe.missedIngredients.length > 0 && (
            <>
              <ul>
                {recipe.missedIngredients.map((ingredient) => (
                  <li key={ingredient.id}>
                    {ingredient.amount} {ingredient.unitShort} {ingredient.name}
                  </li>
                ))}
              </ul>
            </>
          )}
          {recipe.unusedIngredients && recipe.unusedIngredients.length > 0 && (
            <>
              <p>Unused Ingredients:</p>
              <ul>
                {recipe.unusedIngredients.map((ingredient) => (
                  <li key={ingredient.id}>
                    {ingredient.amount} {ingredient.unitShort} {ingredient.name}
                  </li>
                ))}
              </ul>
            </>
          )}
          {recipe.instructions && (
            <>
              <p>Instructions:</p>
              <p>{recipe.instructions}</p>
            </>
          )}
          <div className={classes.buttonCointainer}>
            <button>
              <Link to={"/recipePage"} className={classes.button}>
                Back to Recipe List
              </Link>
            </button>
            <ButtonURL recipeId={recipe.id} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default SingleRecipe;
