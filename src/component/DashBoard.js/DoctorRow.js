import React from 'react';
import { toast } from 'react-toastify';

const DoctorRow = ({doctor,refetch}) => {
    const {image,name,email}=doctor;
    const handleDelete=()=>{
        fetch(`https://quiet-tor-61846.herokuapp.com/doctors/${email}`,{
            method:'DELETE',
            headers:{
                authorization:`bearer ${localStorage.getItem('accessToken')}`
            }
        })
        .then(res=>res.json())
        .then(data=>{
            console.log(data);
            if(data.deletedCount){
                toast('doctor have a remove');
                refetch()
            }
        })
        
    }
    return (        
      <tr>
        <th><div class="avatar">
  <div class="w-20 rounded">
    <img src={image} alt="Tailwind-CSS-Avatar-component" />
  </div>
</div></th>
        
        <td>{name}</td>
        <td>{email}</td>
        <td><button onClick={()=>handleDelete(email)} class="btn btn-xs">DELETE</button></td>
      </tr>
        
    );
};

export default DoctorRow;