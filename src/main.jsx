import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Root from './pages/Root';
import Home from './pages/Home';
import Login from './pages/Login';
import Register from './pages/Register';
import CustomerService from './pages/CustomerService';
import AboutUs from './pages/AboutUs';
import Membership from './pages/Membership';
import AuthProvider from './AuthProvider/AuthProvider';
import AddProduct from './pages/AddProduct';
import Brands from './pages/Brands';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
        loader: () => fetch("./Brands.json")
      },
      {
        path: "/login",
        element: <Login></Login>
      },
      {
        path: "/register",
        element: <Register></Register>
      },
      {
        path: "/customerservice",
        element: <CustomerService></CustomerService>
      },
      {
        path: "/aboutus",
        element: <AboutUs></AboutUs>
      },
      {
        path: "/membership",
        element: <Membership></Membership>
      },
      {
        path: "/addproduct",
        element: <AddProduct></AddProduct>,
        loader: () => fetch("./Brands.json")
      },
      {
        path: "/brands/:name",
        element: <Brands></Brands>
      }
    ]
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AuthProvider>
      <RouterProvider router={router} />
    </AuthProvider>
  </React.StrictMode>,
)
