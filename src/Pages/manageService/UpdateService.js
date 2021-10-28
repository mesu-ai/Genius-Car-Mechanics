import React from 'react';
import { Row } from 'react-bootstrap';
import { useHistory } from 'react-router';
import useService from '../../hooks/useService';
import ServiceContainer from './ServiceContainer';

const UpdateService = () => {
   const {services}= useService();

  const history= useHistory();
   const handleService=(id)=>{
       const url=`/update/${id}`;
       history.push(url);

   }
    return (
        <div>
            <h3>Please Update A Servece</h3>
            <Row xs={1} md={2} lg={3} className="g-4 container mx-auto my-5">
            {services.map(service=><ServiceContainer service={service} handleService={handleService} key={Math.random()}>
                <span>Update</span>
            </ServiceContainer>)}
            </Row>
 
        </div>
    );
};

export default UpdateService;