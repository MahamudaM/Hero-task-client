import React from 'react';
import { useLoaderData } from 'react-router-dom';


const PostDetailes = () => {
    const post = useLoaderData()
   
    const {descip,postImg,_id,comment}=post


    // send commet mongodb
    const addCommentHandl=event=>{
        event.preventDefault();
     const form =event.target;    
        const comment =form.comment.value;           
        fetch(`http://localhost:5000/posts/${_id}`,{
          method:'PUT',
          headers:{
            'content-type':'application/json'
          },
          body:JSON.stringify({comment})
        })
        .then(res=>res.json())
        .then(data=>{
          console.log(data)
      
        //  if(data.modifiedCount>0){
        //   toast("successful add commenst");
        //  }
        })
      }
    return (
        <div className='my-10 max-w-6xl mx-auto'>
    <div>
    <p>post Details</p>
            <div className="card w-96 bg-base-100 shadow-xl mx-auto">
  <figure><img src={postImg} alt="Shoes" /></figure>
  <div className="card-body">
    
    <p>{descip}</p>
    <div className="card-actions justify-between">
       
        <button className="btn bg-[#ff5200]">like</button>      
    </div>
    {/* comment form */}
    <form onSubmit={addCommentHandl}>
    <input type="text" name='comment' placeholder="comment" className="input input-bordered w-full max-w-xs" />
    </form>
  </div>
</div>

<p className='text-xl text-center my-5'> See All comment</p>
{
    comment?.map((com,i)=><div key={i}  className="card w-96 bg-base-100 shadow-xl mb-5 mx-auto">
         <div className="card-body">
    <div className="card-actions justify-end">
    </div>
    <p>{com}</p>
   
  </div>
    </div>)
    }
    </div>
        </div>
    );
};

export default PostDetailes;