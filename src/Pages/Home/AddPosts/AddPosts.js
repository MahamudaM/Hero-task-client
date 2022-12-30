import React from 'react';
import { useForm } from 'react-hook-form';



const AddPosts = () => {
    const {register,handleSubmit,formState: { errors },} = useForm();
    const refresh = () => window.location.reload(true)
const imgHostKey = process.env.REACT_APP_ImageBB_Key

const addPostHandler =data =>{
console.log(data)
const date=new Date().getTime();
const img = data.image[0]
const formData = new FormData()
formData.append('image',img)
const url = `https://api.imgbb.com/1/upload?key=${imgHostKey}`
fetch(url,{
    method:'POST',
    body:formData
})
.then(res=>res.json())
.then(imgData=>{
    console.log(imgData)
    if(imgData.success){
        console.log(imgData.data.url)
        const postInfo = {
          descip:data.description,
          postImg:imgData.data.url,
          date

        }
       fetch('https://hero-job-task-server.vercel.app/posts',{
        method:"POST",
      headers:{
        'content-type':'application/json'
      },
      body:JSON.stringify(postInfo)
       }) 
       .then(res=>res.json())
       .then(result=>{
         console.log(result)
         refresh()
               
       })
    }
})

}

    return (
        <div>
            <h1 className="text-2xl font-bold text-center">Add Post</h1>
           <form onSubmit={handleSubmit(addPostHandler)}>
           <div className="form-control">
  <label className="label">
  </label>
  <input type="text" {...register("description",{required:'description is required'})} placeholder="write somthing" className="input input-bordered w-full " />
  {errors.description && <p role="alert">{errors.description.message}</p>}
</div>


<div className="form-control">
  <label className="label">
  </label>
  <input type="file" {...register("image",{required:'Image is required'})} placeholder="Choose Image" className="input input-bordered w-full " />
  {errors.image && <p role="alert">{errors.image.message}</p>}
</div>
      <div className="form-control mt-6">
      <input className=" bg-[#ff5200] input input-bordered w-full  text-white" value="Submit" type="submit" />
      </div>

    </form> 
    
        </div>
    );
};

export default AddPosts;