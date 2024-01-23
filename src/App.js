import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./App.css";
import RecipePage from "./pages/RecipePage";
import ErrorPage from "./pages/ErrorPage";
import Home from "./pages/Home";
import SingleRecipe from "./pages/SingleRecipe";

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
