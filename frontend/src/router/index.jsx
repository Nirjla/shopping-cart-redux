import { createBrowserRouter } from "react-router-dom";
import Root from "../components/Root";
import Home from "../components/Home";
import NotFoundPage from "../components/Error";
import Cart from "../components/Cart";
import Login from "../components/Login.jsx";
import Register from "../components/Register/index.jsx";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <NotFoundPage />,
    children: [
      {
        path: "/",
        element: <Home />,
        index: true,
      },
    ],
  },
  {
    path: "/login",
    element: <Login />,
    errorElement: <NotFoundPage />,
  },
  {
      path: "/register",
      element: <Register />,
      errorElement: <NotFoundPage />,
    },
]);
