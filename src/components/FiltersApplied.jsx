import { Typography,Box, Stack } from '@mui/material'
import React from 'react'
import { CloseIcon } from '../utils/Icons'
import { useDispatch, useSelector } from 'react-redux'
import { deleteFilters } from '../ReduxSlice/FilterSlice'

function FiltersApplied() {
    const FilterItems=useSelector(store=>store.filter.GeneralData.FiltersData)
    const dispatch=useDispatch()

    const DeletFilter=(item)=>{
        dispatch(deleteFilters({item}))
    }
  return (
    <>
       <Stack display="flex" spacing={2} direction="row" style={{margin:"0 3rem 1rem"}}>
        {
            FilterItems.map((item)=>{
                return (
                    <Box display="flex" p={.5} style={{border:"1px solid rgba(147,163,172,.2)",maxWidth:"fit-content"}}>
                        <Typography variant='body2' mr={1} fontSize=".8rem">{item}</Typography>
                        <CloseIcon onClick={()=>DeletFilter(item)}   style={{fontSize:"18px",cursor:"pointer",alignSelf:"center"}}/>
                   </Box>   

                )
            })
        }
                 
        </Stack> 
    </>
  )
}

export default FiltersApplied