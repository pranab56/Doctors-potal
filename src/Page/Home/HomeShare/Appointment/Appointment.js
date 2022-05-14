import React from 'react';
import img from '../../../../assets/images/appointment.png';
import doctor from '../../../../assets/images/doctor-small.png'
const Appointment = () => {
    return (
        <div class="hero min-h-screen lg:bg-base-200 sm:bg-white lg:mt-24 sm:mt-10">
        <div class="hero-content flex-col lg:flex-row">
          <img width={606} height={636} src={doctor} class="max-w-sm rounded-lg shadow-2xl lg:ml-24" />
          <div>
          <p className='text-primary text-sm lg:ml-36 sm:ml-0'>Appoinment</p>
            <h1 class="text-5xl font-bold lg:ml-36 sm:ml-0">Make an appointment Today</h1>
            <p class="py-6 lg:ml-36 sm:ml-0 text-justify">It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsumis that it has a more-or-less normal distribution of letters,as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web pag</p>
            <button class="btn btn-primary bg-teal-400 lg:ml-36 sm:ml-0">Get Started</button>
          </div>
        </div>
      </div>
    );
};

export default Appointment;