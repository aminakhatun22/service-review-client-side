import React from 'react';
import { Outlet } from 'react-router-dom';
import Navigation from '../Pages/Navigation/Navigation';
import Footer from '../Pages/Shared/Footer/Footer';
import Header from '../Pages/Shared/Header/Header';

const Main = () => {
    return (
        <div>
            <Navigation></Navigation>
            <Header></Header>
            <Outlet></Outlet>
            <Footer></Footer>
        </div>
    );
};

export default Main;