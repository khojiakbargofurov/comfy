import React from 'react'
import { createBrowserRouter, Router, RouterProvider } from 'react-router-dom'
import {
  HomeLayout, 
  Landing, 
  Error,
  Products,
  SingleProducts,
  Cart,
  About,
  Register,
  Login,
  Checkout,
  Orders, 
} from "./pages"
 
function App() {
  const routes = createBrowserRouter([
    {
      path: "/",
      element: <HomeLayout/>,
      errorElement: <Error/>,
      children: [
      {
        index: true,
        element: <Landing/>
      },
      {
        path: "/products",
        element: <Products/>
      },
      {
        path: "/products/:id",
        element: <SingleProducts/>
      },
      {
        path: "/cart",
        element: <Cart/>
      },
      {
        path: "/about",
        element: <About/>
      },
      {
        path: "/checkout",
        element: <Checkout/>
      },
      {
        path: "/orders",
        element: <Orders/>
      },
    ],
  },
    {
      path: "/login",
      element: "<Login/>",
      errorElement: <Error/>,
    }
  ])
  return <RouterProvider router={routes} />
}

export default App
