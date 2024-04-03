import React from 'react';
import { useLocation, useParams } from 'react-router-dom';

function Checkout() {

const location=useLocation()
                     //const {finalBill}=useParams()

                  const {finalbill,total}=location.state
 
    return (
      <div className="flex flex-col items-center justify-center p-8">
      <h2 className="text-2xl font-bold mb-4">Checkout Page</h2>
      <p>Final Bill:{finalbill} </p>
      <p>Total:{total}</p>
      <p>Saved Amount:{total-finalbill}</p>
      <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mt-4">
        Pay Now
      </button>
    </div>
    );
}

export default Checkout;