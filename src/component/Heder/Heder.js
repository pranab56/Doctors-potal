import React from 'react';
import CustomLink from '../../Page/CustomLink/CustomLink';
import Home from '../Home/Home';

const Heder = () => {
    return (
        <div class="navbar bg-base-100">
  <div class="navbar-start">
    <div class="dropdown">
      <label tabIndex="0" class="btn btn-ghost lg:hidden">
        <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
      </label>
      <ul tabindex="0" class="menu menu-compact dropdown-content mt-3 shadow bg-base-100 rounded-box w-52">
       <CustomLink to={'/home'}>Home</CustomLink>
       <CustomLink to={'/about'}>About</CustomLink>
       <CustomLink to={'/appointment'}>Appointment</CustomLink>
       <CustomLink to={'/review'}>Review</CustomLink>
       <CustomLink to={'/contact'}>Contact us</CustomLink>
       <CustomLink to={'/login'}>Login</CustomLink>
      </ul>
    </div>
    <a class="btn btn-ghost normal-case text-xl">Doctors Portal</a>
  </div>
  <div class="navbar-center hidden lg:flex">
    <ul class="menu menu-horizontal mr-14 ">
       <CustomLink class='mr-5' to={'/home'}>Home</CustomLink>
       <CustomLink class='mr-5' to={'/about'}>About</CustomLink>
       <CustomLink class='mr-5' to={'/appointment'}>Appointment</CustomLink>
       <CustomLink class='mr-5' to={'/review'}>Review</CustomLink>
       <CustomLink class='mr-5' to={'/contact'}>Contact us</CustomLink>
       <CustomLink class='mr-5' to={'/login'}>Login</CustomLink>
    </ul>
  </div>
 
</div>
    );
};

export default Heder;