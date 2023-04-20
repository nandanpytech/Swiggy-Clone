import { createSlice } from "@reduxjs/toolkit";
import { current } from '@reduxjs/toolkit'

const filterslice=createSlice({
    name:"Filters",
    initialState:{
        FiltersData:[]
    },
    reducers:{
        addFilters:(state,action)=>{
            const {selectedfilter}=action.payload
            state.FiltersData=[...selectedfilter]
        },
        getFilters:(state)=>{
            return state
        },
        deleteFilters:(state,action)=>{
            const {item}=action.payload
            state.FiltersData=state.FiltersData.filter((e)=>e!=item)
        }
    }
})

export default filterslice.reducer
export const {addFilters,getFilters,deleteFilters}=filterslice.actions