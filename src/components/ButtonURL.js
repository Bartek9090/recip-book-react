// import axios from "axios";
// import { useState, useEffect } from "react";

// const ButtonURL = ({ recipeId }) => {
//   const [url, setUrl] = useState("");

//   useEffect(() => {
//     const fetchRecipeUrl = async () => {
//       try {
//         const response = await axios.get(
//           `http://localhost:4000/getRecipeURL?recipeId=${recipeId}`
//         );
//         setUrl(response.data.url);
//       } catch (error) {
//         console.error("Error fetching recipe URL:", error);
//       }
//     };

//     if (recipeId) {
//       fetchRecipeUrl();
//     }
//   }, [recipeId]);

//   return (
//     <button>
//       <a href={url} target="_blank" rel="noopener noreferrer">
//         Full Instruction
//       </a>
//     </button>
//   );
// };

// export default ButtonURL;

// // api request

// // api querry about
// api.get("/getRecipeURL", async (req, res) => {
//   const { recipeId } = req.body;
//   console.log("URL INQUARIES ");
//   try {
//     const response = await axios.get(
//       `https://api.spoonacular.com/recipes/${recipeId}/information?includeNutrition=false`
//     );

//     res.json(response.data);
//   } catch (error) {
//     console.error("Error fetching recipes:", error);
//     res.status(500).json({ error: "Error fetching recipes" });
//   }
// });
