import React, { useContext } from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { AuthContext } from '../Context/AuthProvider';

const PrivateRoute = ({children}) => {
    
        const location = useLocation()
        const {user,loader}=useContext(AuthContext)
        if(loader){
            return <button className='btn btn-loading'>loading...</button>
        }
        if(user){
            return children
        }
    
        return <Navigate to='/login' state={{from:location}} replace></Navigate>
    
};

export default PrivateRoute;