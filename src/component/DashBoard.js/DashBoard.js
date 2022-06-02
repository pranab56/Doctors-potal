import React from 'react';
import { Link, Outlet } from 'react-router-dom';
import UseAdmin from '../../Hooks/UseAdmin';
import { useAuthState } from "react-firebase-hooks/auth";
import auth from "../../firebase.init";


const DashBoard = () => {
  const [user]=useAuthState(auth)
  const [Admin]=UseAdmin(user);
    return (
        <div class="drawer drawer-mobile">
        <input id="my-drawer-2" type="checkbox" class="drawer-toggle" />
        <div class="drawer-content flex flex-col  justify-center">
            <h3 className='text-5xl text-purple-500 mb-10   '>DashBoard</h3>
          {/* <!-- Page content here --> */}
          <Outlet></Outlet>
          
          <label for="my-drawer-2" class="btn btn-primary drawer-button lg:hidden">Open drawer</label>
        
        </div> 
        <div class="drawer-side">
          <label for="my-drawer-2" class="drawer-overlay"></label> 
          <ul class="menu p-4 overflow-y-auto w-80 bg-base-100 text-base-content">
            {/* <!-- Sidebar content here --> */}
            <li><Link to='/dashboard'>DashBoard</Link></li>
            <li><Link to='/dashboard/myreview'>My Review</Link></li>
            <li><Link to='/dashboard/mystory'>my Story</Link></li>
           {Admin && <>
            <li><Link to='/dashboard/alluser'>All User</Link></li>
            <li><Link to='/dashboard/doctor'>Add Doctor</Link></li>
            <li><Link to='/dashboard/manageDoctor'>Manage Doctor</Link></li>
           </>}
          </ul>
        
        </div>
      </div>
    );
};

export default DashBoard;