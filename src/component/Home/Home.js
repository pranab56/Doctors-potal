import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Navigate, useNavigate } from 'react-router-dom';
import auth from '../../firebase.init';
import Address from '../../Page/Home/HomeShare/Address/Address';
import Appointment from '../../Page/Home/HomeShare/Appointment/Appointment';
import ContactFrom from '../../Page/Home/HomeShare/ContactFrom/ContactFrom';
import DantalCare from '../../Page/Home/HomeShare/DantalCare/DantalCare';
import Footer from '../../Page/Home/HomeShare/Footer/Footer';
import Part1 from '../../Page/Home/HomeShare/Part1/Part1';
import Testimonials from '../../Page/Home/HomeShare/Testimonials/Testimonials';
import Location from '../../Page/Home/Location/Location';


const Home = () => {
    return (
        <div>
           <Part1></Part1>
           <Location></Location>
           <Address></Address>
           <DantalCare></DantalCare>
           <Appointment></Appointment>
           <Testimonials></Testimonials>
           <ContactFrom></ContactFrom>
           <Footer></Footer>
          
        </div>
    );
};

export default Home;