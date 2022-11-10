import Main from "../../../Layout/Main";
import Blog from "../../Blog/Blog";

import ErrorPage from "../../ErrorPage/ErrorPage";
import Home from "../../Home/Home/Home";
import Services from "../../Home/Services/Services";
import Login from "../../Login/Login";
import SignUp from "../../Sign Up/SignUp";
import ServiceDetails from "../../ServiceDetails/ServiceDetails";
import MyReview from "../../MyReview/MyReview";

import AddServices from "../../AddServices/AddServices";




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
                element: <Blog
                ></Blog>
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
                path: '/servicedetails/:id',
                element: <ServiceDetails></ServiceDetails>,
                loader: ({ params }) => fetch(`https://b6a11-service-review-server-side-aminakhatun22.vercel.app/services/${params.id}`)
            },
            {
                path: '/services',
                element: <Services></Services>
            },
            {
                path: '/my reviews',
                element: <MyReview></MyReview>
            },
            {
                path: '/add services',
                element: <AddServices></AddServices>
            },

        ]

    }
]);

export default router;