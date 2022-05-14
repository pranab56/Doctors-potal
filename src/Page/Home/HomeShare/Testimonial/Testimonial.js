import React from 'react';

const Testimonial = (props) => {
    const {name,city,img,title}=props.user;
    return (
        <div class=" card w-96 bg-base-100 shadow-xl">
        
        <div class="card-body">
          <p>{title}</p>
          <div className='flex mt-5'>
          <img class="mask mask-circle w-20" src={img} />
          <div className='mt-3 ml-5'>
          <h4>{name}</h4>
          <p>{city}</p>
          </div>
          </div>
        </div>
      </div>
    );
};

export default Testimonial;