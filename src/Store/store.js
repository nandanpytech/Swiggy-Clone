import {configureStore} from '@reduxjs/toolkit'
import Cartslice from '../ReduxSlice/Cartslice'
import FilterSlice from '../ReduxSlice/FilterSlice'
const store=configureStore(
    {
        reducer:{
            cart:Cartslice,
            filter:FilterSlice
        }
    }
)

export default store