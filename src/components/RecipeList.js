import { Link } from "react-router-dom";
import classes from "./RecipList.module.css";

const RecipeList = ({ recipes, searchTerm, searchClicked }) => {
  const showNoRecipesFound =
    searchClicked && searchTerm && recipes && recipes.length === 0;

  return (
    <div className={classes.RecipListMainContainer}>
      <h1>Recipe Search List</h1>
      {!showNoRecipesFound ? (
        <ul>
          {recipes.map((recipe) => (
            <li key={recipe.id} className={classes.recipeItem}>
              <Link to={`/singleRecipe/${recipe.id}`} state={{ recipe }}>
                <img src={recipe.image} alt={recipe.title} />
              </Link>
              <h3>{recipe.title}</h3>
              <p>Provided by Spoonacular </p>
              <p>{recipe.summary}</p>
              <div className={classes.ButtonContainer}>
                <button>
                  <Link
                    to={`/singleRecipe/${recipe.id}`}
                    state={{ recipe }}
                    className={classes.detailButton}
                  >
                    Details
                  </Link>
                </button>
              </div>
            </li>
          ))}
        </ul>
      ) : (
        <p>No recipes found.</p>
      )}
    </div>
  );
};

export default RecipeList;
