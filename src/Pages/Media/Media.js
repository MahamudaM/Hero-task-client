import { useQuery } from '@tanstack/react-query';

import React from 'react';
import MediaCard from './MediaCard';

const Media = () => {
const {data:posts}=useQuery({
    queryKey:['posts'],
    queryFn:async()=>{
        try{
            const res =await fetch('https://hero-job-task-server.vercel.app/posts')
            const data = await res.json();
            return data;
        }
        catch(error){

        }
    
    }

})
console.log(posts)
    return (
        <div className='my-10 max-w-6xl mx-auto'>
          
            
            <div className="flex flex-col gap-12">
            {
                posts?.map(post=><MediaCard key={post._id} post={post}></MediaCard>)
            }
            </div>
            
        </div>
    );
};

export default Media;