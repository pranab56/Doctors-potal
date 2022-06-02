import { useEffect, useState } from "react"

const UseAdmin=user=>{
    const [Admin ,setAdmin]=useState(false);
    const [AdminLoading,setloading]=useState(true);
    useEffect(()=>{
        const email=user.email;
        if(email){
            fetch(`https://quiet-tor-61846.herokuapp.com/admin/${email}`, {
                method:  'GET',
                headers: {
                  'Content-Type': 'application/json',
                  authorization:`bearer ${localStorage.getItem('accessToken')}`
                },
                
              })
              .then(response => response.json())
              .then(data => { 
                setAdmin(data.Admin)
                setloading(false)
        })
    }
    },[user])
    return [Admin,AdminLoading]
}
export default UseAdmin;