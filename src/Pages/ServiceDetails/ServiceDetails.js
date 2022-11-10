import React from 'react';
import { useLoaderData } from 'react-router-dom';

const ServiceDetails = () => {
    const { image } = useLoaderData();
    return (
        <div>
            <img src={image} alt="" />
        </div>
    );
};

export default ServiceDetails;
