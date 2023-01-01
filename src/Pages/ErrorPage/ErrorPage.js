import React from 'react';
import { Link } from 'react-router-dom';
import errorImg from '../../Assets/img/404imf.png'
const ErrorPage = () => {
    return (
        <div>
              <div className="hero min-h-screen" style={{ backgroundImage: `url(${errorImg })` }}>
  <div className="hero-overlay bg-opacity-60"></div>
  <div className="hero-content text-center text-neutral-content">
    <div className="max-w-md">
     
      <p className='text-red-600'>samething went wrong!!</p>
            
            <h1 className="mb-5 text-5xl font-bold"><Link to='/'> pleace back to home page</Link></h1>
           
    </div>
  </div>
</div>
        </div>
    );
};

export default ErrorPage;