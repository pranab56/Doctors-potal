import React from 'react';
import { toast } from 'react-toastify';

const User = ({user,refetch}) => {
    const {email,Role}=user;
    const handleAdmin=()=>{
        fetch(`https://quiet-tor-61846.herokuapp.com/users/admin/${email}`,{
            method:'put',
            headers:{
                authorization:`Bearer ${localStorage.getItem('accessToken')}`
            }
        })
        .then(res=>{
            if(res.status===401 || res.status===403){
                toast.error('You do not have an admin')
            }
           return res.json()})
        .then(data=>{
         if(data.modifiedCount >0){
            toast.success('congratulation you are Admin')
            refetch()
         }
           
        })
    }
    return (
        <tr>
        <th>1</th>
        <td>{email}</td>
        <td>{Role !== "Admin" && <button onClick={handleAdmin} class="btn btn-xs">Make Admin</button>}</td>
        <td><button class="btn btn-xs">Remove Admin</button></td>
      </tr>
    );
};

export default User;