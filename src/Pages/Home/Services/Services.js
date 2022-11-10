import React, { useEffect, useState } from 'react';
import ServiceCard from './ServiceCard';
import ClipLoader from "react-spinners/ClipLoader";
import useTitle from '../../../Hooks/UseTitle';



const Services = () => {
    useTitle('Services')

    let [loading, setLoading] = useState(true);
    let [color, setColor] = useState("orange");
    useEffect(() => {
        setTimeout(() => setLoading(false), 1000)
    }, []);
    const [services, setServices] = useState([]);
    useEffect(() => {
        fetch('https://b6a11-service-review-server-side-aminakhatun22.vercel.app/services')
            .then(res => res.json())
            .then(data => setServices(data))

        // console.log();
    }, [])
    // setLoading(false);
    return (
        <div>
            <div className='text-center'>
                <p className='text-2xl font-bold text-orange-600'>Services</p>
            </div>
            <div className='grid  gap-24 grid-cols-1 md:grid-cols-2 lg:grid-cols-3'>
                {
                    services.map(service => <ServiceCard key={service._id}
                        service={service}></ServiceCard>)
                }
            </div>
            <ClipLoader
                color={color}
                loading={loading}

                size={50}
                aria-label="Loading Spinner"
                data-testid="loader"
            />



        </div>
    );
};

export default Services;