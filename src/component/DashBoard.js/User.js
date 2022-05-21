import React from 'react';
import { toast } from 'react-toastify';

const User = ({user,refetch}) => {
    const {email,Role}=user;
    const handleAdmin=()=>{
        fetch(`http://localhost:5000/users/admin/${email}`,{
            method:'put',
            headers:{
                authorization:`Bearer ${localStorage.getItem('accessToken')}`
            }
        })
        .then(res=>res.json())
        .then(data=>{
            toast.success('congratulation you are Admin')
            refetch()
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