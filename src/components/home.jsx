import React from 'react';
import { Provider } from 'react-redux';
import { Link, NavLink } from 'react-router-dom';
import store from '../store';

function Home() {
    return (


<div className='w-full bg-black-600 h-screen border border-red-500' >
          <div className='text-right mx-3 mt-3'>
          <NavLink to='/Products' className='text-blue-800 '>Products</NavLink><br></br>
          <NavLink to='/Cart' className='text-blue-800'>Cart</NavLink><br></br>
          <NavLink to='/checkout' className='text-blue-800'>checkout</NavLink>



          </div>
          
         
             

</div>


        
            
    )
}

export default Home;