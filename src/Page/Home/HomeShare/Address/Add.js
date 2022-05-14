import React from 'react';

const Add = (props) => {
    const {img,name,Title}=props.add;
    return (
        <div class="card w-96 bg-base-100 shadow-2xl mb-10 ml-auto">
        <figure class="px-10 pt-10">
          <img src={img} alt="Shoes" class="rounded-xl" />
        </figure>
        <div class="card-body items-center text-center">
          <h2 class="card-title">{name}</h2>
          <p>{Title}</p>
          
        </div>
      </div>
    );
};

export default Add;