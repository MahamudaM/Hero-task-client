
import { useQuery } from '@tanstack/react-query';
import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../Context/AuthProvider';
import AddPosts from './AddPosts/AddPosts';
import MostLikePost from './MostLikePost/MostLikePost';

const Home = () => {
    const {user} = useContext(AuthContext)
// get most like post
const {data:likePosts }=useQuery({
    queryKey:['posts'],
    queryFn:async()=>{
        try{
            // https://hero-job-task-server.vercel.app/likePosts
            const res =await fetch('https://hero-job-task-server.vercel.app/likePosts')
            const data = await res.json();
            return data;
        }
        catch(error){

        }
    
    }

})

// get mostly like post detaisl


    return (
        <div className='my-10 max-w-6xl mx-auto'>
            <p></p>
            {
             user?.uid?
<div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100 mx-auto p-10 my-20">
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
    );
};

export default Home;