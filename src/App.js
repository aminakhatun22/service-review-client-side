import logo from './logo.svg';
import './App.css';
import { RouterProvider } from 'react-router-dom';
import router from './Pages/Router/Routes/Routes';



function App() {


  return (
    <div className='mx-auto' >
      <RouterProvider router={router}></RouterProvider>
    </div>
  );
}

export default App;
