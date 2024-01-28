import "./App.css";
import Home from "./pages/Home";
import ErrorPage from "./pages/ErrorPage";
import RecipePage from "./pages/RecipePage";
import SingleRecipe from "./pages/";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
    errorElement: <ErrorPage />,
  },
  {
    path: "/recipePage",
    element: <RecipePage />,
  },
  {
    path: "/singleRecipe/:id",
    element: <SingleRecipe />,
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
