import React from 'react';
import { Link } from 'react-router-dom';
import 'react-photo-view/dist/react-photo-view.css';
import { PhotoProvider, PhotoView } from 'react-photo-view';

const ServiceCard = ({ service }) => {
    const { _id, image, price, description, rating, name } = service;
    return (
        <div>
            <div className="card card-compact w-96 bg-base-100 shadow-xl">

                <figure> <PhotoProvider>
                    <PhotoView src={image}>
                        <img src={image} alt="" />
                    </PhotoView>
                </PhotoProvider></figure>
                <div className="card-body">
                    <h2 className="card-title">{name}</h2>
                    <p>{description.slice(10)}</p>
                    <div className='flex'>
                        <p className='text-blue-600'>
                            Rating: {rating}
                        </p>
                        <p className='text-blue-600'>Price: ${price}</p>
                    </div>
                    <div className="card-actions justify-center">

                        <Link to={`/services/${_id}`}>
                            <button className="btn btn-primary">View Details</button></Link>
                    </div>
                </div>

            </div>

        </div>
    );
};

export default ServiceCard;
