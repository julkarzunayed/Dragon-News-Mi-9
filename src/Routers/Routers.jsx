import { createBrowserRouter } from "react-router";
import HomeLayout from "../layouts/HomeLayout/HomeLayout";
import Home from "../pages/Home/Home";
import CategoryNews from "../pages/CategoryNews/CategoryNews";
import Auth from "../pages/Auth/Auth";
import LogIn from "../components/LogIn/LogIn";
import Register from "../components/Register/Register";
import ReadMore from "../pages/ReadMore/ReadMore";

const router = createBrowserRouter([
    {
        path: "/",
        Component: HomeLayout,
        children: [
            {
                index: true,
                path: "/category/:id",
                loader: () => fetch("/data/news.json"),
                Component: CategoryNews
            }
        ]
    },
    {
        Component: Auth,
        children: [
            {
                path: "login",
                Component: LogIn
            },
            {
                path: "register",
                Component: Register
            }
        ]
    },
    {
        path: "read-more/:id",
        Component: ReadMore,
        loader: () => fetch("/data/news.json"),
    },
    {
        path: "*",
        element: <h2>HI You got an error</h2>
    }
]);

export default router