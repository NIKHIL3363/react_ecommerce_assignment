import {  createSlice } from "@reduxjs/toolkit"


const initialState={


    products:[
       {id:1,name:'Bread',price:100,addedToCart:false},
       {id:2,name:'Milk',price:120, addedToCart:false},
       {id:3,name:'Cake',price:150,addedToCart:false},
       {id:4,name:'Cheese',price:200,addedToCart:false},
       {id:5,name:'Soup',price:300,addedToCart:false},
       {id:6,name:'Butter',price:500,addedToCart:false}
         ],
        };
 
 const productSlice=createSlice({

    name:'product',
    initialState,
    reducers:{


      updateproduct:(state, action)=>{

              console.log('inside upadetproduct')
               console.log(state.products)

        state.products=state.products.map((item)=>{

          if(item.id===action.payload){


            item.addedToCart=!item.addedToCart
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



export const {updateproduct}=productSlice.actions
 export const productReducer=productSlice.reducer

