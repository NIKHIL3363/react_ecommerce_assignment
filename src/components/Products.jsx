import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';
import { addTocartitem } from '../storedata';
import { updateproduct } from '../productslice';


 function Products() {
  const cart=useSelector((state)=>state.cart.cart)
    const dispatch=useDispatch()
    const number=useSelector((state)=>state.cart.carts.length)
    const productsarray=useSelector((state)=>state.product.products)

    /*const [products,setproducts]=useState([
{id:1,name:'Bread',price:100,addedToCart:false},
{id:2,name:'Milk',price:120, addedToCart:false},
{id:3,name:'cake',price:150,addedToCart:false},
{id:4,name:'cheese',price:200,addedToCart:false},
{id:5,name:'soup',price:300,addedToCart:false},
{id:6,name:'butter',price:500,addedToCart:false},
  ]
*/

  const   handleaddtocart=(item)=> {

    console.log('item come in')
    const id=item.id

    dispatch(addTocartitem(item))




    dispatch(updateproduct(id))


  
             


  }
  
    
    



  return (
    <div className='w-full h-full mx-auto'>
    <div className='text-center  text-blue-900 text-2xl font-semibold pl-5 mr-22 hover:underline'>
            <NavLink to='/cart'>Cart({number})</NavLink>

        
     </div>
    <div className='text-left ml-12 text-3xl mb-2 text-blue-500 font-bold'>
      <h1>Products</h1>
    </div>


    <div className="container mx-auto">
      {productsarray.map((product) => (
        <div key={product.id} className="flex items-center justify-between bg-white p-4 mb-4 rounded shadow">
          <div className="flex items-center">
            <div>
              <h2 className="text-lg font-semibold">{product.name}</h2>
              <p className="text-gray-700">RS{product.price}</p>
            </div>
          </div>

              
          <button  onClick={(e)=>handleaddtocart(product)} disabled={product.addedToCart} className='bg-blue-500 text-white font-bold py-2 px-4 rounded hover:underline'>
            { product.addedToCart? "Added to Cart" : "Add to Cart"}
          </button>
        </div>
      ))}
    </div>
  
  

    </div>


    );

      }
      export default Products




   
      
  



    
            

    

    

   

