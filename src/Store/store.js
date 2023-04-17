import {configureStore} from '@reduxjs/toolkit'
import Cartslice from '../ReduxSlice/Cartslice'
const store=configureStore(
    {
        reducer:{
            cart:Cartslice
        }
    }
)

export default store