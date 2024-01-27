import axios from "axios";
import { useState, useEffect } from "react";
import classes from "./SinglePage.module.css";
// import ButtonURL from "../components/ButtonURL";
import MainNavigation from "../components/MainNavigation";
import { useParams, Link, useLocation } from "react-router-dom";

const SingleRecipe = () => {
  const { id } = useParams();
  const { state } = useLocation();
  const [recipe, setRecipe] = useState(state ? state.recipe : null);

  useEffect(() => {
    console.log("Sending request for recipe details");
  }, [id, recipe]);

  if (!recipe) {
    return (
      <div>
        <p>No data available</p>
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
            {/* <ButtonURL recipeId={recipe.id} /> */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default SingleRecipe;
