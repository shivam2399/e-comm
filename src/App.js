import React from 'react'
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import Home from './Components/Home';
import About from './Components/About';
import Store from './Components/Store';
import ContactUs from './Components/ContactUs';

const router = createBrowserRouter([
  {path: '/', element: <Store />},
  {path: '/about', element: <About />},
  {path: '/home', element: <Home />},
  {path: '/contactUs', element: <ContactUs />},
])

const App = () => {
  return <RouterProvider router={router} />
}

export default App