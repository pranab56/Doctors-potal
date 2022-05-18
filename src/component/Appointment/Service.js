import React from 'react';

const Service = ({service,setTreatment}) => {
    const {name,slots}=service;
    return (
        <div className="card w-auto bg-base-100 shadow-xl">
        <div className="card-body text-center">
          <h2 className="text-lg text-primary">{name}</h2>
          <p>{slots.length>0 ?
        <span>{slots[0]}</span>:
        <span className='text-red-500'>try another day</span>  
        }</p>
          <p>{slots.length} {slots.length>1 ? "spaces":"space"} Available</p>
          <div className="card-actions justify-center">
              <label 
              onClick={()=>setTreatment(service)}
               for="Booking-modal" 
               disabled={slots.length===0} 
               className="btn btn-primary">Book Appointment
               </label>
          </div>
        </div>
      </div>
    );
};

export default Service;