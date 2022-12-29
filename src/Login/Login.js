import React, { useContext, useState } from 'react';
import { useForm } from 'react-hook-form';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../Context/AuthProvider';

const Login = () => {
    const {register,handleSubmit,formState: { errors } }=useForm();
    const {login}=useContext(AuthContext)
    const [loginEror,setLoginEror] = useState()
    const navigate = useNavigate()
    const location = useLocation()
    const from = location.state?.from?.pathname || '/'
    
        // login handler
        const loginHandl=data=>{
            setLoginEror('')
            console.log(data)
            const email = data.email;
            const password = data.password;
            login(email,password)
            .then(result=>{
                console.log(result)
                navigate(from,{replace:true})
            })
            .catch(err=>{
                const error = err.message;
                setLoginEror(error)
            })
        }
    return (
        <div>
            <div  className='card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100 mx-auto p-10 my-20'>
<h1 className="text-2xl font-bold text-center">Log in</h1>
<form onSubmit={handleSubmit(loginHandl)}  >   
   
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

{
    loginEror && <p>{loginEror}</p>
}
<p className='mt-2'>forget password?</p>
      <div className="form-control mt-6">
      <input className=" bg-primary input input-bordered w-full  text-white" value="Log in" type="submit" />
      </div>
<small className='mt-3'> Don't have an account? <Link to='/regiester'className='text-primary'>Sign up</Link></small>
    </form>

            </div> 
        </div>
    );
};

export default Login;