import React from 'react';

const Testimonial = (props) => {
    const {name,city,img,title}=props.user;
    return (
        <div className=" card w-auto bg-base-100 shadow-xl mb-10 ">
        
        <div className="card-body">
          <p>{title}</p>
          <div className='flex mt-5'>
          <img alt="" className="w-12 h-12 mt-1 rounded-full ring-2 ring-offset-4 dark:bg-gray-500 ring-violet-400 ring-offset-gray-800" src={img} />
          <div className=' ml-5'>
          <h4>{name}</h4>
          <p>{city}</p>
          </div>
          </div>
        </div>
      </div>
    );
};

export default Testimonial;