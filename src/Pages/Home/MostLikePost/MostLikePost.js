import React from 'react';

const MostLikePost = ({likepost}) => {
  console.log(likepost)


 // send commet mongodb
 const addCommentHandl=event=>{
    event.preventDefault();
 const form =event.target;    
    const comment =form.comment.value;          
    fetch(`https://hero-job-task-server.vercel.app/posts/${likepost?._id?._id}`,{
      method:'PUT',
      headers:{
        'content-type':'application/json'
      },
      body:JSON.stringify({comment})
    })
    .then(res=>res.json())
    .then(data=>{
      console.log(data)
  form.reset()
           })
  }
    return (
        <div>
                  <div className="card w-4/5 mx-auto bg-base-100 shadow-xl ">
  <figure><img src={likepost?._id?.postImg} alt="Shoes" /></figure>
  <div className="card-body">
    
    <p>{likepost?.postInfo?.descip}</p>
    <div className="card-actions justify-between">       
        {/* <button className="btn bg-[#ff5200]"> */}
     { likepost?.len} <p>likes</p> 
       {likepost?._id?.comment?.length }  <p> comment </p>            
    </div>

    {/* <p>{likes?.length} likes</p> */}
    {/* comment form */}
    <form onSubmit={addCommentHandl}>
    <input type="text" name='comment' placeholder="comment" className="input input-bordered w-full max-w-xs" />
    </form>
  </div>
</div>

        </div>
    );
};

export default MostLikePost;