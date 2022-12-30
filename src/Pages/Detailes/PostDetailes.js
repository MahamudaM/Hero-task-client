import { faThumbsUp } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useContext } from 'react';
import { useLoaderData } from 'react-router-dom';
import { AuthContext } from '../../Context/AuthProvider';


const PostDetailes = () => {
    const post = useLoaderData()
   const {user} =useContext(AuthContext)
    const {descip,postImg,_id,comment,likes}=post
    const refresh = () => window.location.reload(true)

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
          refresh()
               })
      }

      // like handler
      const addLike =email=>{
       const like = email
        fetch(`https://hero-job-task-server.vercel.app/likes/${_id}`,{
          method:'PUT',
          headers:{
            'content-type':'application/json'
          },
          body:JSON.stringify({like})
        })
        .then(res=>res.json())
        .then(data=>{
          console.log(data)
          refresh()
       
        })
      }
    return (
        <div className='my-10 max-w-6xl mx-auto'>
    <div>
  
            <div className="card w-96 bg-base-100 shadow-xl mx-auto">
  <figure><img src={postImg} alt="Shoes" /></figure>
  <div className="card-body">
    
    <p>{descip}</p>
    <div className="card-actions justify-end">       
       
        <FontAwesomeIcon onClick={()=>addLike (user.email)} icon={faThumbsUp} className="mr-2 text-[#ff5200] h-6"/>
          {comment?.length? <p>{comment?.length} comment</p> : 0 + "comment" }              
    </div>

    {likes?.length? <p>{ likes?.length} likes </p>  : 0 + "likes"} 
    {/* comment form */}
    <form onSubmit={addCommentHandl}>
    <input  type="text" name='comment' placeholder="Write comment" className="input input-bordered w-full max-w-xs" />
    </form>
  </div>
</div>

{
    comment?.map((com,i)=><div key={i}  className="card w-96 bg-base-100 shadow-xl my-5 mx-auto">
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