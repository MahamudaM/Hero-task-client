import React from 'react';
import { useLoaderData } from 'react-router-dom';

const PostDetailes = () => {
    const post = useLoaderData()
    const {descip,postImg,}=post
    console.log(post)
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
     <button className="btn bg-[#ff5200]">comment</button>
      
    </div>
  </div>
</div>
    </div>
        </div>
    );
};

export default PostDetailes;