import React from 'react';
import AddPosts from './AddPosts/AddPosts';

const Home = () => {
    return (
        <div>
            <p></p>
           <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100 mx-auto p-10 my-20">
           <AddPosts></AddPosts>
           </div>
        </div>
    );
};

export default Home;