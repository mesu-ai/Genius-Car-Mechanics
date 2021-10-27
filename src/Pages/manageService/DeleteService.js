
import axios from 'axios';
import React from 'react';
import { Row } from 'react-bootstrap'
import useService from '../../hooks/useService';
import ServiceContainer from './ServiceContainer';

const DeleteService = () => {

   const {services,setServices}= useService();
//    console.log(services);


const handleService=(id)=>{

    const proceed=window.confirm('Are you sure delete the service?');
    if(proceed){
        const url=`http://localhost:5000/services/${id}`;
    axios.delete(url)
    .then(res=>{
        const remainingService=services.filter(service=>service._id!==id);
        setServices(remainingService);
    })

    }
   
    

}

    return (
        <Row xs={1} md={2} lg={3} className="g-4 container mx-auto my-5">
            {services.map(service=><ServiceContainer key={Math.random()} service={service} handleService={handleService}>
            <span>Delete</span>
            </ServiceContainer>)}
         
      </Row>
    );
};

export default DeleteService;