import React, { useEffect, useState } from 'react';
import Add from './Add';

const Address = () => {
    const [address,setAddress]=useState([]);
    useEffect(()=>{
        fetch('Services.json')
        .then(res=>res.json())
        .then(data=>setAddress(data))
    },[])
    return (
        <div>
            <h4 className='text-center text-sm font-bold text-primary mb-5 mt-20'>Our Service</h4>
            <h2 className='text-center text-3xl mb-10'>Services We Provide</h2>
            <div className='lg:flex lg:ml-5 lg:mb-20 gap-10 sm:block sm:mb-10 sm:ml-10'>
            {
                address.map(add=><Add
                key={add.id}
                add={add}
                ></Add>)
            }
        </div>
        </div>
    );
};

export default Address;