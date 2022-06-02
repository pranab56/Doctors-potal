import { signOut } from 'firebase/auth';
import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Navigate, useNavigate } from 'react-router-dom';
import auth from '../../firebase.init';

const MyAppoinment = () => {
    const [appointment,setAppointment]=useState([]);
    const [user]=useAuthState(auth)
    const navigete=useNavigate();
    
    useEffect(()=>{
        if(user){
            fetch(`https://quiet-tor-61846.herokuapp.com/data?email=${user.email}`,{
              method:'GET',
              headers:{
                'authorization':`bearer ${localStorage.getItem('accessToken')}`
              }
            })
        .then(res=>{
          console.log('res',res);
          if(res.status===403 || res.status==401){
            signOut(auth)
            Navigate('/home')
          }
         return res.json()
        }
         )
        .then(data=>setAppointment(data))
        }
    },[user])
    return (
        <div class="overflow-x-auto">
        <table class="table w-full">
          
          <thead>
            <tr>
              <th>SL</th>
              <th>Name</th>
              <th>Date</th>
              <th>Time</th>
              <th>Treatment</th>
            </tr>
          </thead>
          {
              appointment.map((A,index)=><tbody>
            
                <tr>
                  <th>{index+1}</th>
                  <th>{A.name}</th>
                  <td>{A.date}</td>
                  <td>{A.slot}</td>
                  <td>{A.TreatmentName}</td>
                </tr>
                </tbody>)
          }
        </table>
      </div>
    );
};

export default MyAppoinment;