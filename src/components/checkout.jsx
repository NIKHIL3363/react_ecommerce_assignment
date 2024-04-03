import React from 'react';
import { useLocation, useParams } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faIndianRupee } from '@fortawesome/free-solid-svg-icons';

function Checkout() {
  const icon=<FontAwesomeIcon icon={faIndianRupee} />

const location=useLocation()
                     //const {finalBill}=useParams()

                  const {finalbill,total}=location.state
 
    return (
      <div className="flex flex-col items-center justify-center p-8">
      <h1 className="text-gray-500 text-2xl font-bold mb-4">Checkout Page</h1>
      <p className='text-blue-500'>SubTotal:{icon}{total}</p>

      <p className='text-blue-500'>Final Bill:{icon}{finalbill} </p>
      <p className='text-blue-700'>Saved Amount:{icon}{total-finalbill}</p>
      
      <div className='mt-6 text-cyan-500 text-3xl font-extrabold'> 
      {icon}{finalbill}



      </div>

      <button className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded mt-4">
        Pay Now 
      </button>
    </div>
    );
}

export default Checkout;