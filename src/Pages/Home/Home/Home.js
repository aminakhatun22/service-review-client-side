import React from 'react';
import { Link } from 'react-router-dom';
import useTitle from '../../../Hooks/UseTitle';
import Banner from '../Banner/Banner';
import Services from '../Services/Services';
import ExtraSection from './ExtraSection';

const Home = () => {
    useTitle('Home')
    return (
        <div>
            <Banner></Banner>
            <Services></Services>




            <div className="card-actions justify-center">
                <Link to='/services'> <button className="btn btn-primary">See All</button></Link>
            </div>

            <ExtraSection></ExtraSection>

        </div>
    );
};

export default Home;
