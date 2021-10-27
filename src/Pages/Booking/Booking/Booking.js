import Button from '@restart/ui/esm/Button';
import React, { useEffect, useState } from 'react';
import { Card } from 'react-bootstrap';
import { useParams } from 'react-router';

const Booking = () => {
    const { serviceId } = useParams();

    const [service,setService]=useState([]);
    
    useEffect(()=>{
        const url=`http://localhost:5000/services/${serviceId}`;
        fetch(url)
        .then(res=>res.json())
        .then(data=>setService(data));

    },[serviceId]);



    return (
        <Card style={{backgroundColor:'cornsilk'}} className="text-center m-5 w-75 mx-auto shadow-lg">
        <Card.Header>Booking Id: {service._id}</Card.Header>
        <Card.Body>
        <Card.Img className="" src={service.img} alt="" height="250"></Card.Img>
        <Card.Title>{service.name}</Card.Title>
        <Card.Text>
        {service.description}
        </Card.Text>
        <Button className="btn btn-danger">Book Now</Button>
        </Card.Body>
        <Card.Footer className="text-muted">Last Updated 2 days ago</Card.Footer>
        </Card>
    );
};

export default Booking;