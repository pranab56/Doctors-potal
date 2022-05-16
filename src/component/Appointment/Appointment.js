import React, { useState } from 'react';
import Footer from '../../Page/Home/HomeShare/Footer/Footer';
import AppointmentBennar from './AppointmentBennar';
import AvailableAppointment from './AvailableAppointment';
import BookingModal from './BookingModal';


const Appointment = () => {
  const [date,setDate]=useState(new Date())
  return (
    <div>
      <AppointmentBennar
      date={date}
      setDate={setDate}
      ></AppointmentBennar>
      <AvailableAppointment
      date={date}
      setDate={setDate}
      ></AvailableAppointment>
     <BookingModal
      date={date}
      setDate={setDate}
     >
     </BookingModal>
      <Footer></Footer>
    </div>
  );
};

export default Appointment;