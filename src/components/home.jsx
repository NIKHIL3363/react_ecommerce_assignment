import React from 'react';
import { Provider, useSelector } from 'react-redux';
import { Link, NavLink } from 'react-router-dom';
import store from '../store';

function Home() {
         const l=useSelector(state=>state.cart.carts).length

    return (


<div className='w-30 h-20 bg-black-600  border border-black-500 bg-blue-800 rounded-xl' >
          <div className=' mx-3 mt-4'>
          <NavLink   to='/Products' className='text-black-800 mr-6'>Products</NavLink>
          <NavLink to='/Cart' className='text-black-800 mr-6 px-2'>Cart({l||0})</NavLink>
          <NavLink to='/checkout' className='text-blue-1000 ml-6'>checkout</NavLink>



          </div>
          
         
             

</div>


        
            
    )
}

export default Home;