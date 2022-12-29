
import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../Context/AuthProvider';
import AddPosts from './AddPosts/AddPosts';

const Home = () => {
    const {user} = useContext(AuthContext)
    return (
        <div>
            <p></p>
            {
             user?.uid?
<div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100 mx-auto p-10 my-20">
           <AddPosts></AddPosts>
           </div>
             :
             <p className='text-4xl text-center'>pleace <Link to='/login' className='text-[#ff5200]'>Log in</Link> to add post</p>   
            }
           
        </div>
    );
};

export default Home;