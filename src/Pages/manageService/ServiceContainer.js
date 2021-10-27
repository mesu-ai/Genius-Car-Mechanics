import Button from '@restart/ui/esm/Button';
import React from 'react';
import { Card, Col } from 'react-bootstrap';

const ServiceContainer = (props) => {
    const {_id,img,name}=props?.service;
    return (
        <Col>
        <Card className="shadow-lg h-100">
          <Card.Img className="p-2" variant="top" src={img} />
          <Card.Body>
            <Card.Title>{name}</Card.Title>
          </Card.Body>
          <Card.Footer>
              <Button className="btn btn-danger" onClick={()=>props.handleService(_id)} > {props.children} </Button>
            
        </Card.Footer>
        </Card>
      </Col>
    );
};

export default ServiceContainer;