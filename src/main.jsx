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
import PrivateRoute from './Private/PrivateRoute';
import Details from './pages/Details';
import MyCart from './pages/MyCart';
import Update from './pages/Update';
import ErrorPage from './pages/ErrorPage';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
        loader: () => fetch("../Brands.json")
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
        element: <PrivateRoute><CustomerService></CustomerService></PrivateRoute>
      },
      {
        path: "/aboutus",
        element: <AboutUs></AboutUs>
      },
      {
        path: "/membership",
        element: <PrivateRoute><Membership></Membership></PrivateRoute>
      },
      {
        path: "/addproduct",
        element: <PrivateRoute><AddProduct></AddProduct></PrivateRoute>,
        loader: () => fetch("/Brands.json")
      },
      {
        path: "/brands/:name",
        element: <Brands></Brands>,
        loader: ({ params }) => fetch(`http://localhost:5000/brands/${params.name}`)
      },
      {
        path: "/details/:product",
        element: <PrivateRoute><Details></Details></PrivateRoute>,
        loader: ({params}) => fetch(`http://localhost:5000/products/${params.product}`)
      },
      {
        path: "/mycart/",
        element: <PrivateRoute><MyCart></MyCart></PrivateRoute>,
      },
      {
        path: "/myupdate/:product",
        element: <PrivateRoute><Update></Update></PrivateRoute>,
        loader: ({params}) => fetch(`http://localhost:5000/update/${params.product}`)
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
