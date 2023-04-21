import { createSlice } from "@reduxjs/toolkit";


const filterslice=createSlice({
    name:"Filters",
    initialState:{
        GeneralData:{
            FiltersData:[],
            OffSet:15,
            AllRestaurant:[]
        }  
    },
    reducers:{
        addFilters:(state,action)=>{
            const {selectedfilter}=action.payload
            state.GeneralData.FiltersData=[...selectedfilter]
        },
        getFilters:(state)=>{
            return state
        },
        deleteFilters:(state,action)=>{
            const {item}=action.payload
            state.GeneralData.FiltersData=state.FiltersData.filter((e)=>e!=item)
        },
        offsetincrease:(state,action)=>{
            const {value}=action.payload
            if(value){
                state.OffSet=value
            }
           
        },
        addRestaurant:(state,action)=>{
            state.GeneralData.AllRestaurant=action.payload
        }
    }
})

export default filterslice.reducer
export const {addFilters,getFilters,deleteFilters,offsetincrease,addRestaurant}=filterslice.actions