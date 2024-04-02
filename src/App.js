import React, { useContext } from 'react'
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import Home from './Components/Home';
import About from './Components/About';
import Store from './Components/Store';
import ContactUs from './Components/ContactUs';
import ProductDetail from './Components/ProductDetal';
import Login from './Components/Login';



const router = createBrowserRouter([
  {path: '/', element: <Home />},
  {path: '/about', element: <About />},
  {path: '/store', element: <Store />},
  {path: '/contactUs', element: <ContactUs />},
  {path: '/product/:id', element: <ProductDetail /> },
  {path: '/login', element: <Login />}
])

const App = () => {
  return <RouterProvider router={router} />
}

export default App