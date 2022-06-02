import React from 'react';
import { useQuery } from 'react-query';
import Loading from '../../Page/Loading';
import DoctorRow from './DoctorRow';

const ManageDoctors = () => {
    const {data:doctors,isLoading,refetch}=useQuery('doctor',()=>fetch('https://quiet-tor-61846.herokuapp.com/doctors',{
        headers:{
            authorization:`bearer ${localStorage.getItem('accessToken')}`
        }
    }).then(res=>res.json()))
    if(isLoading){
        return <Loading></Loading>
    }
    return (
        <div>
            <h2 className="text-2xl mb-10">Manage doctor : {doctors.length}</h2>
            <div class="overflow-x-auto">
  <table class="table w-full">
    
    <thead>
      <tr>
        <th>Photo</th>
        <th>Name</th>
        <th>email</th>
        <th>Action</th>
      </tr>
    </thead>
    <tbody>
        {
            doctors.map(doctor=><DoctorRow 
            key={doctor._id}
            doctor={doctor}
            refetch={refetch}
            ></DoctorRow>)
        }
   
    </tbody>
  </table>
</div>
        </div>
    );
};

export default ManageDoctors;