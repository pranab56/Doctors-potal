import { format } from 'date-fns';
import React, { useEffect, useState } from 'react';
import AppointmentModal from './AppointmentModal';
import BookingModal from './BookingModal';
import Service from './Service';

const AvailableAppointment = ({date,setDate}) => {
    const [services,setservice]=useState([])
    const [treatment,setTreatment]=useState({})
    
    useEffect(()=>{
        fetch('Service.json')
        .then(res=>res.json())
        .then(data=>setservice(data))
    },[])
    return (
        <div>
            <p className='text-center text-lg text-primary'>Available service on {format(date,'PP')}</p>
            <p className='text-center text-black mt-3'>Please select your service</p>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 mt-12'>
                {
                    services.map(service=><Service
                    key={service._id}
                    service={service}
                    setTreatment={setTreatment}
                    ></Service>)
                }
              
            </div>
            {
                treatment && <BookingModal 
                date={date}
                treatment={treatment}
                setTreatment={setTreatment}
                ></BookingModal>
            }
        </div>
    );
};

export default AvailableAppointment;