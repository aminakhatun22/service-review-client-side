import React from 'react';
import { Link } from 'react-router-dom';
import Banner from '../Banner/Banner';
import Services from '../Services/Services';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Services></Services>

            <Link to='/services'>
                <button className="btn btn-primary">See all</button></Link>
            <h3>home</h3>
        </div>
    );
};

export default Home;
