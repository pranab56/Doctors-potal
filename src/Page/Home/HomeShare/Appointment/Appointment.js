import React from 'react';
import doctor from '../../../../assets/images/doctor-small.png'
const Appointment = () => {
    return (
        <div className="hero min-h-screen lg:bg-base-200 sm:bg-white lg:mt-24 sm:mt-5" >
        <div className="hero-content flex-col lg:flex-row">
     <div className='flex-1 hidden lg:block'>
     <img src={doctor} className="max-w-sm rounded-lg shadow-2xl lg:ml-24  " />
     </div>
          <div>
          <p className='text-primary text-sm lg:ml-36 sm:ml-0'>Appoinment</p>
            <h1 className="text-5xl font-bold lg:ml-36 sm:ml-0">Make an appointment Today</h1>
            <p className="py-6 lg:ml-36 sm:ml-0 text-justify">It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsumis that it has a more-or-less normal distribution of letters,as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web pag</p>
            <button className="btn btn-primary bg-teal-400 lg:ml-36 sm:ml-0">Get Started</button>
          </div>
        </div>
      </div>
    );
};

export default Appointment;