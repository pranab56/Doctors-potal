import { format } from 'date-fns';
import React, {useState } from 'react';
import { useQuery } from 'react-query';
import Loading from '../../Page/Loading';
import BookingModal from './BookingModal';
import Service from './Service';

const AvailableAppointment = ({date,setDate}) => {
    // const [services,setservice]=useState([])
    const [treatment,setTreatment]=useState({})
    
    const formattedDate=format(date,'PP');
    
    const {data:services,isLoading,refetch}=useQuery(['available',formattedDate],()=> fetch(`https://quiet-tor-61846.herokuapp.com/available?date=${formattedDate}`)
        .then(res=>res.json())
        );
        if(isLoading){
            return <Loading></Loading>
        }

    return (
        <div>
            <p className='text-center text-lg text-primary'>Available service on {format(date,'PP')}</p>
            <p className='text-center text-black mt-3'>Please select your service</p>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 mt-12'>
                {
                    services?.map(service=><Service
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
                refetch={refetch}
                ></BookingModal>
            }
        </div>
    );
};

export default AvailableAppointment;