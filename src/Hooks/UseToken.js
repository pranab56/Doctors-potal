import { useEffect, useState } from "react"

const UseToken=user=>{
    const [token,setToken]=useState('');
    useEffect(()=>{
        const email=user?.user?.email;
        const currentUser={email:email}
        if(email){
          fetch(`https://quiet-tor-61846.herokuapp.com/users/${email}`, {
    method:  'PUT',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(currentUser),
  })
  .then(response => response.json())
  .then(data => { 
    console.log('Success:', data);
    const accessToken=data.token;
    localStorage.setItem('accessToken',accessToken);
    setToken(accessToken)
  })  
        }
    },[user])
    return [token]
}

export default UseToken;