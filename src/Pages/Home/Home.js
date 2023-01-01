
import { useQuery } from '@tanstack/react-query';
import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../Context/AuthProvider';
import AddPosts from './AddPosts/AddPosts';
import MostLikePost from './MostLikePost/MostLikePost';
import profilimg from '../../Assets/img/profil.webp'
import bannar from '../../Assets/img/flower.jpg'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowDownAZ, faReceipt, faSave, faSwatchbook, faUserFriends, faUserGroup } from '@fortawesome/free-solid-svg-icons';
const Home = () => {
    const {user} = useContext(AuthContext)
// get most like post
const {data:likePosts,isLoading }=useQuery({
    queryKey:['posts'],
    queryFn:async()=>{
        try{
          
            const res =await fetch('https://hero-job-task-server.vercel.app/likePosts')
            const data = await res.json();
            return data;
        }
        catch(error){

        }
    
    }

})
 if(isLoading){
    return <p>loading.,.</p>
 }
// get mostly like post detaisl


    return (
        <div className='my-10 max-w-6xl mx-auto flex  flex-col md:flex-row lg:flex-row  '>
           
          <div className="wrap">
          <div className="flex-auto w-1/4  mb-4" >
           <div className="card w-96   bg-base-100 shadow-xl">
  <figure style={{position: 'avsolute'}}><img src={bannar} alt="Shoes" /></figure>
  {/* avater */}
  <div className="avatar " style={{position: 'relative',bottom: '62px',
    left: '142px'}}>
  <div className="w-24 rounded-full">
    <img src={profilimg}  alt='profil img'/>
  </div>
</div>
  {/* avater end */}
  <div className="card-body items-center text-center">
    <h2 className="card-title">
   {user?.displayName}
        </h2>
    <p>{user?.email}</p>
    <div className="card-actions justify-end">
      <div className="badge badge-outline">Fashion</div> 
      <div className="badge badge-outline">Products</div>
    </div>
  </div>
</div>
           </div>
           {/* manubar */}
           <ul className=" shadow-xl menu menu-compact lg:menu-normal bg-base-100 w-96 p-2 rounded-box">
  <li><a href='/'><FontAwesomeIcon icon={faUserFriends} className="mr-2 text-[#ff5200] h-4"/>Find friends</a></li>
  <li><a href='/'><FontAwesomeIcon icon={faSave} className="mr-2 text-[#ff5200] h-4"/>Saved</a></li>
  <li><a href='/'><FontAwesomeIcon icon={faReceipt} className="mr-2 text-[#ff5200] h-4"/>Most Recent</a></li>
  <li><a href='/'><FontAwesomeIcon icon={faUserGroup} className="mr-2 text-[#ff5200] h-4"/>Groups</a></li>
  <li><a href='/'><FontAwesomeIcon icon={faSwatchbook} className="mr-2 text-[#ff5200] h-4"/>Watch</a></li>
  <li><a href='/'><FontAwesomeIcon icon={faArrowDownAZ} className="mr-2 text-[#ff5200] h-4"/>See more</a></li>
</ul>
           {/* manubar end */}
          </div>
           {/* add comment section */}
           <div className="flex-auto w-3/4">
           {
             user?.uid?
<div className="card w-4/5 shadow-2xl bg-base-100 mx-auto p-10 my-20">
           <AddPosts ></AddPosts>
           </div>
             :
             <p className='text-4xl text-center'>pleace <Link to='/login' className='text-[#ff5200]'>Log in</Link> to add post</p>   
            }
             <p className='text-2xl font-bold text-center my-5'>Popular posts</p>
           <div className='flex flex-col gap-12'>
     {
likePosts?.map(likepost=><MostLikePost key={likepost._id} likepost={likepost}></MostLikePost>)
     }
           </div>
           </div>
        </div>
    );
};

export default Home;