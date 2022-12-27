import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import About from "../Pages/About/About";
import PostDetailes from "../Pages/Detailes/PostDetailes";
import Home from "../Pages/Home/Home";
import Media from "../Pages/Media/Media";
import Message from "../Pages/Message/Message";

export const routes = createBrowserRouter([
    {
        path:'/',
        element:<Main></Main>,
        children:[
            {
                path:'/',
                element:<Home></Home>
            },
            {
                path:'/Message',
                element:<Message></Message>
            },
            {
                path:'/media',
                element:<Media></Media>
            },
            {
                path:'/posts/:id',
                element:<PostDetailes></PostDetailes>,
                loader:({params})=>fetch(`http://localhost:5000/posts/${params.id}`)          
                
              },
            {
                path:'/about',
                element:<About></About>
            },
        ]
    }
])