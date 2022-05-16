import React from 'react';
import img from '../../../../assets/images/chair.png';
import 'animate.css';

const Part1 = () => {
    return (
        <div>
            <div class="lg:mt-32 sm:mt-20 ">
  <div class="hero-content flex-col lg:flex-row-reverse">
    <img src={img} class="lg:max-w-xl sm:max-w-sm rounded-lg shadow-2xl" />
    <div>
      <h1 class="text-5xl font-bold lg:ml-11 sm:ml-0 animate__bounceIn animate__animated animate__bounce animate__slower 3s animate__infinite	infinite">Your New Smile Starts</h1>
      <p class="py-6 lg:w-2/3 sm:w-auto lg:ml-11 sm:ml-0">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
      <button class="btn btn-primary bg-teal-400 lg:ml-11 sm:ml-0">GET STARTED</button>
    </div>
  </div>
</div>
        </div>
    );
};

export default Part1;