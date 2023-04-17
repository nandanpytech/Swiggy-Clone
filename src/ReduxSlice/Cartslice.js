import { createSlice } from "@reduxjs/toolkit";
import { current } from '@reduxjs/toolkit'

const cartslice=createSlice({
    name:"cart",
    initialState:{
        CartItems:{RestaurantDetails:[],ResturantOrderedItems:[]},
    },
    reducers:{
        addItem:(state,action)=>{
            const PrevRes=current(state.CartItems.RestaurantDetails[0] || state.CartItems.RestaurantDetails)
            const {OrderedItem,ParticularRes,addons,addonsamount}=action.payload

            if(PrevRes.length==0){
                const amount=addonsamount || OrderedItem.price/100 
                state.CartItems.RestaurantDetails.push(ParticularRes)
                state.CartItems.ResturantOrderedItems.push( {OrderedItem,addons, amount})
            }else{
                
                const amount=addonsamount || OrderedItem.price/100 
                if(PrevRes.data.id!==ParticularRes.data.id){
                    state.CartItems={RestaurantDetails:[],ResturantOrderedItems:[]}
                    state.CartItems.RestaurantDetails.push(ParticularRes)
                }
                state.CartItems.ResturantOrderedItems.push( {OrderedItem,addons,amount})
            }
        }
    }
})

export default cartslice.reducer
export const {addItem}=cartslice.actions