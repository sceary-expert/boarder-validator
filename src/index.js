import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';
import SignIn from './components/SignIn';
import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from 'react-router-dom';
import Layout from './Layout';
import DashBoard from './components/DashBoard';

const router = createBrowserRouter(
  createRoutesFromElements(
    
    <Route path='/' element={<Layout/>} >
      <Route path = '' element= {<SignIn/>} /> 
      <Route path = 'sign-in' element= {<SignIn/>} />   
      <Route path = 'dashboard' element = {<DashBoard/>}/>   
    </Route>

  )
)


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router = {router} />
  </React.StrictMode>
);

reportWebVitals();
