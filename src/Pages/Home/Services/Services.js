import React, { useEffect, useState } from 'react';
import useService from '../../../hooks/useService';
import Service from '../Service/Service';
import './Services.css';

const Services = () => {
    const {services} = useService();
    

    return (
        <div id="services">
            <h2 className="text-primary mt-5">Our services</h2>
            <div className="service-container">
                {
                    services.map(service => <Service
                        key={service._id}
                        service={service}
                    ></Service>)
                }
            </div>
        </div>
    );
};

export default Services;