import { GoogleAuthProvider } from 'firebase/auth';
import React, { useContext, useState } from 'react';
import { useForm } from 'react-hook-form';
import { Link, useNavigate } from 'react-router-dom';
// import { toast } from 'react-toastify';

import { AuthContext } from '../Context/AuthProvider';

const Register = () => {

    const {register,handleSubmit,formState: { errors } }=useForm();
    const [erro,setErro]=useState()
const {userRegister,googleSignIn,updateUser}=useContext(AuthContext)
const navigate = useNavigate()


const registerHandler =(data)=>{
    setErro('')
    console.log(data)
const email = data.email;
const password = data.password;
const name = data.name;
const university = data.university
const address = data.address
// create user
    userRegister(email,password)
    .then(result=>{
        console.log(result)
        // toast('successfully register user')
        const userInfo = {displayName:data.name}
        updateUser(userInfo)
        .then(()=>{
          navigate('/')
          saveUser(email,name,university,address)
        })
        .catch(err=>console.log(err))
    })
    .catch(error=>{
        const errors = error.message;
        setErro(errors)
    })

}
// sign in withe goole 
const provider = new GoogleAuthProvider()
const googleHandler =()=>{
    googleSignIn(provider)
    .then(result=>{
        const user = result.user;       
       const email=user.email;
       const name = user.displayName;
       const university =" ";
       const address =" ";
        saveUser(email,name,university,address);
        console.log(user)
        navigate('/')
    })
    .catch(err=>console.log(err))
}
// send user in mongodb
const saveUser = (email,name,university,address)=>{
  const user = {email,name,university,address}
  fetch(`https://hero-job-task-server.vercel.app/users`,{
    method:'POST',
    headers:{
      'content-type':'application/json'
    },
    body:JSON.stringify(user)
  })
  .then(res=>res.json())
  .then(data=>{
    console.log(data)
  })
}
    return (
        <div>
            <div  className='card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100 mx-auto p-10 my-20'>
<h1 className="text-2xl font-bold text-center">Sign up</h1>
{/* register  from */}
<form onSubmit={handleSubmit(registerHandler)}  >

<div className="form-control">
  <label className="label">
    <span className="label-text">Name</span>   
  </label>
  <input type="text" {...register("name",{required:'Name is required'})} placeholder="Name" className="input input-bordered w-full " />
  {errors.name && <p role="alert">{errors.name?.message}</p>}
</div>   
  
   
<div className="form-control">
  <label className="label">
    <span className="label-text">Email</span>   
  </label>
  <input type="email" {...register("email",{required:'Email Address is required'})} placeholder="email" className="input input-bordered w-full " />
  {errors.email && <p role="alert">{errors.email?.message}</p>}
</div>
<div className="form-control ">
  <label className="label">
    <span className="label-text">password</span>   
  </label>
  <input type="password" {...register("password",{required:'password required'})} placeholder="password" className="input input-bordered w-full " />
  {errors.password && <p className="text-primary">{errors.password?.message}</p>}
</div>

<div className="form-control">
  <label className="label">
    <span className="label-text">university</span>   
  </label>
  <input type="text" {...register("university",{required:'university is required'})} placeholder="university" className="input input-bordered w-full " />
  {errors.university && <p role="alert">{errors.university?.message}</p>}
</div>  

<div className="form-control">
  <label className="label">
    <span className="label-text">address</span>   
  </label>
  <input type="text" {...register("address",{required:'address is required'})} placeholder="Address" className="input input-bordered w-full " />
  {errors.address && <p role="alert">{errors.address?.message}</p>}
</div>  

      <div className="form-control mt-6">
      <input className=" bg-primary input input-bordered w-full  text-white" value="Sing up" type="submit" />
      </div>
<small className='mt-3'>Have an account? <Link to='/login'className='text-primary'>Longin</Link></small>

<div className="divider">OR</div>
      <div className=" mt-6">      
      <button onClick={googleHandler} className="btn btn-outline  w-full ">  sing up with google </button>
      </div>
     <div>
     {
       erro && <p>{erro}</p>
      }
     </div>
    </form>

            </div>
        </div>
    );
};

export default Register;