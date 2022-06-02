import React from 'react';
import { useForm } from 'react-hook-form';
import { useQuery } from 'react-query'
import { toast } from 'react-toastify';
import Loading from '../../Page/Loading';

const AddDoctors = () => {
    const { register, formState: { errors }, handleSubmit,reset } = useForm();
    const { isLoading, error, data:docName } = useQuery('repoData', () =>
    fetch('https://quiet-tor-61846.herokuapp.com/service').then(res =>
      res.json()
    ))

    const IMAGEPRIVATEKEY='332c4fd76bcbedab8932e57f1538543b';

    const onSubmit =async data =>{
        const image=data.image[0];
        const formData = new FormData();
        formData.append('image', image)
        const url=`https://api.imgbb.com/1/upload?key=${IMAGEPRIVATEKEY}`;
        fetch(url,{
          method:"POST",
          body:formData
        })
        .then(res=>res.json())
        .then(result=>{
          if(result.success){
            const img=result.data.url;
            const doctor={
              name : data.Name,
              email : data.email,
              specialty:data.specialty,
              image:img
            }
            fetch('https://quiet-tor-61846.herokuapp.com/doctors', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
              'authorization':`bearer ${localStorage.getItem('accessToken')}`
            },
            body: JSON.stringify(doctor),
          })
          .then(response => response.json())
          .then(insart => {
            if(insart.insertedId){
              reset()
              toast('Added a doctor')
            }
            else{
              toast('please try again')
            }
          })
          }
       
         
        })
        
    }
    if(isLoading){
      return <Loading></Loading>
    }
    return (
        <div>
            <h3 className='text-2xl'>All doctor</h3>
            <form className="mt-6 max-w-lg" onSubmit={handleSubmit(onSubmit)}>
        <div>
          <label
            htmlFor="Name"
            className="block text-sm text-gray-800 dark:text-gray-200"
          >
            Name
          </label>
          <input
            type="text"
            placeholder="Your name"
            // react from hooks theke vailded kora 
            {...register("Name",{
              required:{
                value:true,
                message:'Name is required'
              },
             
            })} 
            className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 dark:focus:border-blue-300 focus:ring-blue-300 focus:outline-none focus:ring focus:ring-opacity-40"
          />
        
        </div>
        {/* react from hooks theke handle error theke bosate hobe */}
        {errors.Name?.type === 'required' && <p className="text-red-500">{errors.Name.message}</p>}
          
        <div>
          <label
            htmlFor="email"
            className="block text-sm text-gray-800 dark:text-gray-200"
          >
            Email
          </label>
          <input
            type="email"
            placeholder="Please your email"
            // react from hooks theke vailded kora 
            {...register("email",{
              required:{
                value:true,
                message:'Email is required'
              },
              pattern: {
                value: /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/,
                message: 'Provide is valid Email' 
              }
            })} 
            className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 dark:focus:border-blue-300 focus:ring-blue-300 focus:outline-none focus:ring focus:ring-opacity-40"
          />
        
        </div>
        {/* react from hooks theke handle error theke bosate hobe */}
        {errors.email?.type === 'required' && <p className="text-red-500">{errors.email.message}</p>}
          {errors.email?.type === 'pattern' && <p className="text-red-500">{errors.email.message}</p>}
        <div className="mt-4">
          <div className="flex items-center justify-between">
            <label
              htmlFor="specialty"
              className="block text-sm text-gray-800 dark:text-gray-200 mb-3"
            >
              specialty
            </label>
         
          </div>

           
        
           
            <select {...register("specialty")} class="select select-bordered w-full max-w-lg">
  {
    docName.map(name=><option 
    key={name._id}
    value={name.name}
    >{name.name}</option>)
  }

</select>
           
        </div>
        <input
            type="file"
            
            // react from hooks theke vailded kora 
            {...register("image",{
              required:{
                value:true,
                message:'image is required'
              },
             
            })} 
            className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 dark:focus:border-blue-300 focus:ring-blue-300 focus:outline-none focus:ring focus:ring-opacity-40"
          />
          {errors.image?.type === 'required' && <p className="text-red-500">{errors.image.message}</p>}


        <div className="mt-6">
          <button className="w-full px-4 py-2 tracking-wide text-white transition-colors duration-200 transform bg-gray-700 rounded-md hover:bg-gray-600 focus:outline-none focus:bg-gray-600">
            REGISTER
          </button>
        </div>
      </form>

        </div>
    );
};

export default AddDoctors;