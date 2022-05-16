import React, { useEffect, useState } from 'react';
import Testimonial from '../Testimonial/Testimonial';

const Testimonials = () => {
    const [users,setuser]=useState([]);
    useEffect(()=>{
        fetch('Testimonial.json')
        .then(res=>res.json())
        .then(data=>setuser(data))
    },[])
    return (
       <nav>
           <p className='text-primary ml-10  mt-10'>Testimonial</p>
           <p className='text-3xl ml-10 mt-5'>What Our Patients Says</p>
            <div className='lg:flex justify-center lg:gap-10 sm:block sm:mt-10'>
            {
                users.map(user=><Testimonial
                key={user.id}
                user={user}
                ></Testimonial>)
            }
        </div>
       </nav>
    );
};

export default Testimonials;