import React from 'react';
import { Outlet } from 'react-router-dom';
import Login from '../Pages/Login/Login';
import Navigation from '../Pages/Navigation/Navigation';
import Footer from '../Pages/Shared/Footer/Footer';


const Main = () => {
    return (
        <div>
            <Navigation></Navigation>


            <Outlet></Outlet>
            <Footer></Footer>
        </div>
    );
};

export default Main;