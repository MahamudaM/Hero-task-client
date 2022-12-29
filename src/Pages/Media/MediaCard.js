import React from 'react';
import { Link } from 'react-router-dom';

const MediaCard = ({post}) => {
    const {descip,postImg,_id}=post
    console.log(post)
    return (
        <div>
            <div className="card w-96 bg-base-100 shadow-xl mx-auto">
  <figure><img src={postImg} alt="Shoes" /></figure>
  <div className="card-body">
    
    <p>{descip.slice(0,80) + '.....'}</p>
    <div className="card-actions justify-end">
      <Link to={`/posts/${_id}`}><button className="btn bg-[#ff5200]">Details</button></Link>
      
    </div>
  </div>
</div>
        </div>
    );
};

export default MediaCard;