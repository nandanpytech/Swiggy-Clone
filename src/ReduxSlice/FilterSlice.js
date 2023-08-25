import { createSlice } from "@reduxjs/toolkit";


const filterslice=createSlice({
    name:"Filters",
    initialState:{
        GeneralData:{
            FiltersData:[],
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
            state.GeneralData.FiltersData=state.GeneralData.FiltersData.filter((e)=>e!=item)
        },
        addRestaurant:(state,action)=>{
            console.log(action.payload);
            state.GeneralData.AllRestaurant=action.payload
        }
    }
})

export default filterslice.reducer
export const {addFilters,getFilters,deleteFilters,addRestaurant}=filterslice.actions