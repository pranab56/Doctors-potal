import React from 'react';
import img from '../../../../assets/images/treatment.png';

const DantalCare = () => {
    return (
        <div class="hero min-h-screen" data-aos="fade-up-right">
  <div class="hero-content flex-col lg:flex-row">
    <img src={img} class="lg;max-w-lg sm:max-w-sm rounded-lg shadow-2xl" />
    <div className='lg:ml-32 sm:ml-0'>
        <p className='text-primary text-sm'>Appoinment</p>
      <h1 class="text-5xl font-bold">Exceptional Dental Care, on Your Terms</h1>
      <p class="py-6 text-justify">It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsumis that it has a more-or-less normal distribution of letters,as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page</p>
      <button class="btn btn-primary bg-teal-400">GET STARTED</button>
    </div>
  </div>
</div>
    );
};

export default DantalCare;