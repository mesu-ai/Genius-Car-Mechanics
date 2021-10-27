import React from 'react';
import './manageService.css';
import { useForm } from "react-hook-form";
import axios from 'axios';

const AddService = () => {
    const { register, handleSubmit,reset } = useForm();
  
    const onSubmit = data =>{
    console.log(data);
    axios.post('http://localhost:5000/services',data)
    .then(res=>{
        // console.log(res.data);
        if(res.data.insertedId){
            alert('successfully !');
            reset();
        }
    })


    }


    return (
        <div className="mt-3">
            <h3>Please Add A Servece</h3>

            <form className="w-50 d-flex flex-column mx-auto addservice-form mt-5 shadow-lg p-3" onSubmit={handleSubmit(onSubmit)}>
            <input {...register("name", { required: true, maxLength: 20 })} placeholder="Name" />
            <input type="number" {...register("price")} placeholder="Service Charge" />
            <textarea type="text" rows="5" {...register("description") } placeholder="Service Details"/>
            <input type="text" {...register("img")} placeholder="Image URL"/>
           
            
            <input className="btn btn-secondary text-light btn-outline-primary fw-bold mt-3" type="submit" />
            </form>
            
            
        </div>
    );
};

export default AddService;