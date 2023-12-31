import { createBrowserRouter } from "react-router-dom";
import Root from "../Root/Root";
import ErrorPage from "../ErrorPage/ErrorPage";
import Home from "../Pages/Home/Home";
import Login from "../Login/Login";
import Register from "../Register/Register";
import CardDetails from "../Pages/CardDetails/CardDetails";
import PrivateRoute from "./PrivateRoute/PrivateRoute";
import AboutUs from "../Pages/AboutUs/AboutUs";
import Blog from "../Pages3/Blog/Blog";
import Galleries from "../pages2/Gallery/Galleries";
import GalleriesCardDetails from "../pages2/GalleriesCardDetails/GalleriesCardDetails";
import PrivateRoute2 from "../PrivateRoute2/PrivateRoute2";
import BlogsCards from "../Pages3/BlogsCards/BlogsCards";
import PrivateRoute3 from "../PrivateRoute3/PrivateRoute3";






const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
        loader: () => fetch("/services.json"),
      },

      {
        path: "/card/:id",
        element: (
          <PrivateRoute>
            <CardDetails></CardDetails>
          </PrivateRoute>
        ),
        loader: () => fetch("/services.json"),
      },

      {
        path: "/login",
        element: <Login></Login>,
      },
      {
        path: "/register",
        element: <Register></Register>,
      },
      {
        path: "about",
        element: <AboutUs></AboutUs>,
      },
      {
        path: "/blog",
        loader: () => fetch("/categories.json"),
        element: <Blog></Blog>,
      },

      {
        path: "/blogs/:id",
        element: (
          <PrivateRoute3>
            <BlogsCards></BlogsCards>,
          </PrivateRoute3>
        ),
        loader: () => fetch("/blog.json"),
      },

      {
        path: "/galleries",
        element: <Galleries></Galleries>,
        loader: () => fetch("/categories.json"),
      },

      {
        path: "/galleries/:id",
        element: (
          <PrivateRoute2>
            <GalleriesCardDetails></GalleriesCardDetails>
          </PrivateRoute2>
        ),
        loader: () => fetch("/gallery.json"),
      },
    ],
  },
]);
export default router;