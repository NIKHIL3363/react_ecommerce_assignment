import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { Route, RouterProvider, Routes, createBrowserRouter, createRoutesFromChildren, createRoutesFromElements } from 'react-router-dom'
import Home from './components/home.jsx'
import Products from './components/Products.jsx'
import Cart from './components/Cart.jsx'
import { Provider } from 'react-redux'
import store from './store.js'
import Checkout from './components/checkout.jsx'





           const router=createBrowserRouter(

            createRoutesFromElements(

              <>

                <Route path='/' element={<Home/>}/>
            <Route path='/products' element={<Products />}/>
            <Route path='/cart' element={<Cart />}/>
            <Route path='/checkout' element={<Checkout />}/>



              </>
              
           ))

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={store}>

    <RouterProvider router={router}/>


    </Provider>

  </React.StrictMode>,
)
