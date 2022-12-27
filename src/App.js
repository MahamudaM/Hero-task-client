
import { RouterProvider } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';

import './App.css';
import { routes } from './Routes/Routes';

function App() {
  return (
    <div >
  <RouterProvider router={routes}></RouterProvider>
  <ToastContainer />
    </div>
  );
}

export default App;
