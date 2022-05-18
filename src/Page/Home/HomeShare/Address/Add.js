import React from 'react';

const Add = (props) => {
    const {img,name,Title}=props.add;
    return (
        <div className="card w-auto bg-base-100 shadow-2xl mb-10 ml-auto">
        <figure className="px-10 pt-10">
          <img src={img} alt="Shoes" className="rounded-xl" />
        </figure>
        <div className="card-body items-center text-center">
          <h2 className="card-title">{name}</h2>
          <p>{Title}</p>
          
        </div>
      </div>
    );
};

export default Add;