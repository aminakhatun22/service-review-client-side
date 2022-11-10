import Main from "../../../Layout/Main";
import Blog from "../../Blog/Blog";
import CheckOut from "../../CheckOut/CheckOut";
import ErrorPage from "../../ErrorPage/ErrorPage";
import Home from "../../Home/Home/Home";
import Services from "../../Home/Services/Services";
import Login from "../../Login/Login";
import SignUp from "../../Sign Up/SignUp";


const { createBrowserRouter } = require("react-router-dom");

const router = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        errorElement: <ErrorPage></ErrorPage>,
        children: [
            {
                path: '/home',
                element: <Home></Home>
            },
            {
                path: '/blog',
                element: <Blog></Blog>
            },
            {
                path: '/login',
                element: <Login></Login>
            },
            {
                path: '/signup',
                element: <SignUp></SignUp>
            },
            {
                path: '/checkout/:id',
                element: <CheckOut></CheckOut>,
                loader: ({ params }) => fetch(`https://b6a11-service-review-server-side-aminakhatun22.vercel.app/services/${params.id}`)
            },
            {
                path: '/services',
                element: <Services></Services>
            }
        ]

    }
]);

export default router;