import React from 'react';
import { useQuery } from 'react-query';
import Loading from '../../Page/Loading';
import User from './User';

const AllUser = () => {
    const { isLoading, error, data:user,refetch } = useQuery('user', () =>
    fetch('https://quiet-tor-61846.herokuapp.com/users').then(res =>
      res.json()
      
    )

  )
 
  if(isLoading){
      return <Loading></Loading>
  }
  
    return (
        <div>
            <h3>this is all user : {user.length}</h3>
            <div class="overflow-x-auto">
  <table class="table w-full">
    
    <thead>
      <tr>
        <th></th>
        <th>Name</th>
        <th>Job</th>
        <th>Favorite Color</th>
      </tr>
    </thead>
    <tbody>
    
      {
          user.map(u=><User
          user={u}
          refetch={refetch}
          >

          </User>)
      }
    </tbody>
  </table>
</div>
        </div>
    );
};

export default AllUser;