import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import { useParams } from 'react-router';

const Update = () => {
   const {id}= useParams();
   const [service,setService]= useState([]);
   
   const url=`http://localhost:5000/services/${id}`;
   useEffect(()=>{
    fetch(url)
    .then(res=>res.json())
    .then(data=>setService(data));

   },[url]);
   
   const { register, handleSubmit,reset } = useForm();


   const nameChange=(e)=>{
       const updatedName=e.target.value;
       const updatedService={...service};
       updatedService.name=updatedName;

       setService(updatedService);

       
   }
   const priceChange=(e)=>{
    const updatedPrice=e.target.value;
    const updatedService={...service};
    updatedService.price=updatedPrice;

    setService(updatedService);

   }
   const descriptionChange=(e)=>{
    const updatedDetails=e.target.value;
    const updatedService={...service};
    updatedService.description=updatedDetails;

    setService(updatedService);

   }
   const imgChange=(e)=>{
    const updatedImg=e.target.value;
    const updatedService={...service};
    updatedService.img=updatedImg;

    setService(updatedService);

   }

   const onSubmit = data =>{

   axios.put(url,service)
   .then(res=>{
       console.log(service);
       reset();
   })
   


}
    return (
        <div>
            <h3>Update page {id}</h3>
            <form className="w-50 d-flex flex-column mx-auto addservice-form mt-5 shadow-lg p-3" onSubmit={handleSubmit(onSubmit)}>
            <input {...register("name", { required: true, maxLength: 20 })} placeholder="Name" onChange={nameChange} value={service.name || ''} />
            <input type="number" {...register("price")} placeholder="Service Charge" onChange={priceChange} value={service.price || ''}/>
            <textarea type="text" rows="5" {...register("description") } placeholder="Service Details" onChange={descriptionChange} value={service.description || ''}/>
            <input type="text" {...register("img")} placeholder="Image URL" onChange={imgChange} value={service.img || ''}/>
           
            
            <input className="btn btn-secondary text-light btn-outline-primary fw-bold mt-3" type="submit" />
            </form>
            
        </div>
    );
};

export default Update;