import { useQuery } from '@tanstack/react-query';
import React, { useContext } from 'react';

import { AuthContext } from '../../Context/AuthProvider';

const About = () => {
    const {user}=useContext(AuthContext)
  
    // loading login user info
    const {data:loginUser=[],isLoading,refetch}=useQuery({
        queryKey:['users',user?.email],
        queryFn:async()=>{
            try{
                const res =await fetch(`http://localhost:5000/users?email=${user?.email}`)
                const data = await res.json();
                return data;
            }
            catch(error){

            }
        
        }
    
    })
    
    if(isLoading){
        return <button className='btn btn-loading'>loading</button>
    }
   
    // udate user     

  const updateUserHandler=event=>{
    event.preventDefault();

 const form =event.target;
    const address =form.address.value;
    const university =form.university.value;
    const name =form.name.value;
    const email =form.email.value;
  
   
    fetch(`http://localhost:5000/users/${loginUser._id}`,{
      method:'PUT',
      headers:{
        'content-type':'application/json'
      },
      body:JSON.stringify({address,university,name,email})
    })
    .then(res=>res.json())
    .then(data=>{
      console.log(data)
      refetch()
    //  if(data.modifiedCount>0){
    //   toast("Update successfully");
    //  }
    })
  }
    return (
        <div className ="my-10 max-w-6xl mx-auto">
          {
user?.uid?

          
          <div>
          <div className="grid justify-end ">           
            {/* The button to open modal */}
<label  htmlFor="userUpdateModal" className="btn ">edit</label>
           </div>
           {/* card */}
           <div className="card w-96 bg-base-100 shadow-xl mx-auto">
  <div className="card-body items-center text-center">
    <h2 className="card-title">Name : {loginUser?.name}</h2>
    <p>Email: {loginUser?.email}</p>
    <div className="card-actions justify-end">
     <p>University : {loginUser?.university}</p>
     <p>Address : {loginUser?.address}</p>
    </div>
  </div>
</div>
{/* modal */}

<input type="checkbox" id="userUpdateModal" className="modal-toggle" />
<div className="modal modal-bottom sm:modal-middle">
  <div className="modal-box">
  <div className="modal-action">
      <label htmlFor="userUpdateModal" className="btn">X</label>
    </div>
    {/* udate form */}
  <form onSubmit={updateUserHandler}  >
<div className="form-control">
  <label className="label">
    <span className="label-text">Name</span>   
  </label>
  <input type="text" name='name' placeholder="Name" className="input input-bordered w-full " defaultValue={loginUser?.name} />
</div>    
<div className="form-control">
  <label className="label">
    <span className="label-text">Email</span>   
  </label>
  <input type="email" name='email'  placeholder="email" className="input input-bordered w-full " defaultValue={loginUser?.email}/>
</div>

<div className="form-control">
  <label className="label">
    <span className="label-text">university</span>   
  </label>
  <input type="text" name='university'  placeholder="university" className="input input-bordered w-full " defaultValue={loginUser?.university}/>
</div>  

<div className="form-control">
  <label className="label">
    <span className="label-text">address</span>   
  </label>
  <input type="text" name='address' placeholder="Address" className="input input-bordered w-full " defaultValue={loginUser?.address}/>
</div> 

      <div className="form-control mt-6">
      <input className=" bg-primary input input-bordered w-full  text-white" value="Save" type="submit" />
      </div>     
    </form>
   
  </div>
</div>
          </div>
          :
          <p className='text-4xl text-center'>No  Log in user</p>
           }

        </div>
    );
};

export default About;