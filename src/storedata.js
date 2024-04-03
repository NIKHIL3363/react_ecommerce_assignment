import { createSlice } from "@reduxjs/toolkit";

     
const initialState={
    
    
    carts:[]
    
   
   
}




   const cartSlice= createSlice({
      name:'cart',

       initialState,
reducers:{

             addTocartitem:(state,action)=>{

                   console.log('item came in slice')
                   console.log(action.payload)
                   

                state.carts.push({...action.payload,quantity:0})
                          
              
             },
             updatecartitem:(state,action)=>{

                    state.carts=state.carts.map((item)=>{
                          
                      if(item.id===action.payload)
                      {

                        return {...item,offermessage:'offerapplied'}
                      }
                      else{
                        return item
                      }

                    })

             },
             updatecartitem1:(state,action)=>{


              console.log('inside chaning price ')

              state.carts=state.carts.map((item)=>{
                    
                if(item.name===action.payload)
                {
                

                  return {...item,offermessage:'offerapplied'}
                }
                else{
                  return item
                }

              })

       },
       




               
             deleteCartItem:(state,action)=>
             {
               

                  console.log(action.payload)
               
                 state.carts= state.carts.filter((item)=> item.id!=action.payload)




            

                  
                   
             },
             incrementupdate:(state, action)=>{

               console.log('inside upadetproduct')
                console.log(state.carts)
 
         state.carts=state.carts.map((item)=>{
 
           if(item.id===action.payload){
 
 
             item.quantity++;

             return {...item}
 
 
           }
           else
 
           {
 
             return item
           }
 
         })
 
       },
       decrementupdate:(state, action)=>{

         console.log('inside upadetproduct')
          console.log(state.carts)

   state.carts=state.carts.map((item)=>{

     if(item.id===action.payload){


       item.quantity--;

       return {...item}


     }
     else

     {

       return item
     }

   })

 }
             

}



     })
     
   

    


     

     export const {addTocartitem,deleteCartItem,incrementupdate,decrementupdate,updatecartitem,updatecartitem1}=cartSlice.actions
     export  const  cartReducer=cartSlice.reducer
