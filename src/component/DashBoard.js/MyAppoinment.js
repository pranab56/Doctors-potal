import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';

const MyAppoinment = () => {
    const [appointment,setAppointment]=useState([]);
    const [user]=useAuthState(auth)
    
    useEffect(()=>{
        if(user){
            fetch(`http://localhost:5000/data?email=${user.email}`)
        .then(res=>res.json())
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