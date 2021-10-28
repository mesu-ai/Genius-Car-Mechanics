import Button from '@restart/ui/esm/Button';
import React, { useState } from 'react';
import { Modal } from 'react-bootstrap';
import { useForm } from 'react-hook-form';
import { useParams } from 'react-router';

const Update = () => {
    const {id} =useParams();
    console.log(id);
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const { register, handleSubmit,reset } = useForm();
  
    const onSubmit = data =>{
        console.log(data)
    }
    return (
        <>
      <Button variant="primary" onClick={handleShow}>
        Launch static backdrop
      </Button>

      <Modal
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
      >
        <Modal.Header closeButton>
          <Modal.Title>Modal title</Modal.Title>
        </Modal.Header>
        <Modal.Body>
        <form className="w-100 d-flex flex-column mx-auto addservice-form mt-5 shadow-lg p-3" onSubmit={handleSubmit(onSubmit)}>
            <input {...register("name", { required: true, maxLength: 20 })} placeholder="Name" />
            <input type="number" {...register("price")} placeholder="Service Charge" />
            <textarea type="text" rows="5" {...register("description") } placeholder="Service Details"/>
            <input type="text" {...register("img")} placeholder="Image URL"/>

          
            <input className="btn btn-secondary text-light btn-outline-primary fw-bold mt-3" type="submit" />
            </form>
        </Modal.Body>
        <Modal.Footer>
          <Button className="btn btn-danger" onClick={handleClose}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </>
    );
};

export default Update;