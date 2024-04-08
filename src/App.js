import React, { Suspense } from 'react'
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
const Home = React.lazy(() => import('./Components/Home'));
const About = React.lazy(() => import('./Components/About'));
const Store = React.lazy(() => import('./Components/Store'));
const ContactUs = React.lazy(() => import('./Components/ContactUs'));
const ProductDetail = React.lazy(() => import('./Components/ProductDetal'));
const Login = React.lazy(() => import('./Components/Login'));



const router = createBrowserRouter([
  {path: '/', element: <Home />},
  {path: '/about', element: <About />},
  {path: '/store', element: <Store />},
  {path: '/contactUs', element: <ContactUs />},
  {path: '/product/:id', element: <ProductDetail /> },
  {path: '/login', element: <Login />}
])

const App = () => {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <RouterProvider router={router} />
    </Suspense>
  )
}

export default App