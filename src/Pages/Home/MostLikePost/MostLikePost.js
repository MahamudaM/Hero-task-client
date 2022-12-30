import { faThumbsUp } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';

const MostLikePost = ({likepost}) => {
const {descip,postImg,_id,comment,likes} = likepost

 // send commet mongodb
 const addCommentHandl=event=>{
    event.preventDefault();
 const form =event.target;    
    const comment =form.comment.value;           
    fetch(`https://hero-job-task-server.vercel.app/posts/${_id}`,{
      method:'PUT',
      headers:{
        'content-type':'application/json'
      },
      body:JSON.stringify({comment})
    })
    .then(res=>res.json())
    .then(data=>{
      console.log(data)
  
           })
  }
    return (
        <div>
                  <div className="card w-96 bg-base-100 shadow-xl mx-auto">
  <figure><img src={postImg} alt="Shoes" /></figure>
  <div className="card-body">
    
    <p>{descip}</p>
    <div className="card-actions justify-between">       
        {/* <button className="btn bg-[#ff5200]"> */}
       {likes?.length? <p>{ likes?.length} likes</p>  : 0 + "likes"}  
       {comment?.length? <p>{comment?.length} comment</p> : 0 + "comment" }            
    </div>

    {/* <p>{likes?.length} likes</p> */}
    {/* comment form */}
    <form onSubmit={addCommentHandl}>
    <input type="text" name='comment' placeholder="comment" className="input input-bordered w-full max-w-xs" />
    </form>
  </div>
</div>
 {/* see coment */}
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
    );
};

export default MostLikePost;