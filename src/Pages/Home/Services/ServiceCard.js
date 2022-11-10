import React from 'react';
import { Link } from 'react-router-dom';

const ServiceCard = ({ service }) => {
    const { _id, image, price, description, rating, name } = service;
    return (
        <div>
            <div className="card card-compact w-96 bg-base-100 shadow-xl">
                <figure><img src={image} alt="Shoes" /></figure>
                <div className="card-body">
                    <h2 className="card-title">{name}</h2>
                    <p>{description}</p>
                    <p>
                        {rating}
                    </p>
                    <div className="card-actions justify-end">
                        <p>{price}</p>
                        <Link to={`/checkout/${_id}`}>
                            <button className="btn btn-primary">Buy Now</button></Link>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default ServiceCard;
