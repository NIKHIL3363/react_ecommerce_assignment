import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link, NavLink, useNavigate } from 'react-router-dom';
import { decrementupdate, deleteCartItem, incrementupdate, updatecartitem, updatecartitem1 } from '../storedata';
import { updateproduct } from '../productslice';



export default function Cart() {
  const cart = useSelector((state) => state.cart.carts)
  const [cartcopy,setcopy]=useState(cart)
  const [total, settotal] = useState(0)
  const [change, setchange] = useState(true)
  const [finalbill, setbill] = useState(0);
  const [cheseamount, setcheeseamount] = useState()
  const [ableapplebtn,setit]=useState(false)


  //const[change2,setchange2]=useState(true)


  console.log('cart items coming in this')
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const removeFromCart = (id) => {

    console.log('inside remove function and dispatching')
    dispatch(deleteCartItem(id))
    dispatch(updateproduct(id))

    navigate('/products')



  }
  const increment = (id) => {



    dispatch(incrementupdate(id))
    setchange(!change)
  }
  const decrement = (id) => {


    dispatch(decrementupdate(id))
    setchange(!change)


  }


  useEffect(() => {
    let tot = 0

    console.log('call happen to this')
    let tot1 = cart.map((item) => {




      tot += item.price * item.quantity


      settotal(tot)

      return tot


    })




  }, [change])
  useEffect(()=>{


    console.log('inside 2nd useffec don')

   const as= cart.filter((item)=>item.name==='Cheese'||item.name==="Soup"||item.name==='Bread'||item.name==='Butter')

  if(as.length>0)
  {


    setit(false)
  }
  else
  {setit(true)}

  },[])






  const applyOffer = () => {
    console.log('inside applyoffer')
    let finalamount = 0

    cart.map((item) => {
      if (item.name === 'Cheese') 
      {
        if (item.quantity > 1) 
        {


          finalamount += item.price * item.quantity / 2
          setcheeseamount(item.price * item.quantity / 2)
          dispatch(updatecartitem(item.id))
        }
        else
        {

          finalamount += item.price * item.quantity
          dispatch(updatecartitem(item.id))


        }


      }
      else if (item.name === "Soup") 
      {
        console.log('inside soup')

        finalamount += item.price * item.quantity
        
      }
      else if (item.name === 'Bread') 
      { const checker = cartcopy.some((item)=>
        item.name ==='Soup')
         console.log(checker)
         if(checker)
         {finalamount += item.price / 2 * item.quantity
          dispatch(updatecartitem1('Bread'))
         }
        else
        {finalamount+=item.price*item.quantity
          
        }




      }

      else if (item.name === 'Butter') 
      {



        console.log('inside butter')



        if (item.quantity > 2) 
        {



          finalamount += item.price * item.quantity - item.price
        }
        else 
        {

          finalamount += item.price * item.quantity


        }
        dispatch(updatecartitem1("Butter"))


      }
      else 
      {
           console.log(finalamount)
        finalamount += item.price * item.quantity
      }




      setbill(finalamount)
    })

  }
  const gun=()=>{

    navigate('/checkout',{state:{finalbill,total}});
    
    // navigate(`/checkout/${finalbill}/${total}`) 
    
  }


return (
      
      <div className="container mx-auto">
      <h1 className="text-3xl font-semibold mb-4">Shopping Cart</h1>
      {cart.length === 0 ? (
        <p>Your cart is empty. <Link to="/Products">Shop now</Link>.</p>
      ) : (
        <div>
          {cart.map((item) => (


            <div key={item.id} className="flex items-center justify-between bg-blue-700 p-4 mb-4 rounded shadow">
              <div className="flex items-center">
                <img className="w-16 h-16 mr-4" src={item.image} alt={item.name} />
                <div>
                  <h2 className="text-lg font-semibold">{item.name}</h2>

                  <p className="text-black font-medium">Rs-{item.price}</p>
                  <p className='text-red-700 text-xl font-semibold '>{item.offermessage || null}</p>

                </div>








                <div className='flex justify-between'>



                  <button onClick={() => decrement(item.id)} className='mx-12 font-extrabold rounded bg-slate-300 text-2xl'>-</button>
                  <span className='font-bold text-2xl'>{item.quantity}</span>
                  <button onClick={() => increment(item.id)} className='mx-12 font-extrabold rounded bg-slate-300 text-2xl'>+</button>


                </div>



              </div>
              <button onClick={() => removeFromCart(item.id)} className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded">
                Remove
              </button>
            </div>
          ))}
          <div className="flex justify-between mb-4">
            <div>
              <h2 className="text-xl font-semibold">Available Offers:</h2>
              <ul>
                <li>Buy Cheese, get one free</li>
                <li>Buy one soup, get bread at half price</li>
                <li>Get a third off butter</li>
              </ul>
            </div>
            {
              <button disabled={ableapplebtn} onClick={() => applyOffer()} className={`px-4 py-2 rounded-md ${
                ableapplebtn ? 'bg-gray-300 text-gray-500 cursor-not-allowed' : 'bg-blue-500 text-white hover:bg-blue-600'
              }`}>
                Apply Offer
              </button>
            }
          </div>
          <div className="flex justify-between">
            
            
            <h2 className="text-xl font-semibold">total:Rs:{total||0}
            </h2>
            <h2 className="text-xl font-semibold">totalAfterOfferApplied:Rs:{finalbill || 0}
            </h2>



                



            <button onClick={gun} className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
              Checkout
            </button>






          </div>
        </div>

      )}

     
    </div>
)   

}



