import styled from '@emotion/styled'
import { Drawer ,Box, Typography, Button} from '@mui/material'
import React, { useEffect } from 'react'
import { CloseIcon } from '../utils/Icons'
import Checkbox from '@mui/material/Checkbox';
import { useDispatch, useSelector } from 'react-redux';
import { addFilters } from '../ReduxSlice/FilterSlice';


function Filters({Filterdata,open,setopen}) {
    // const filterItems=useSelector(store=>store.filter.FiltersData)
    const dispatch=useDispatch()
    let selectedfilter=[];
    const FilterBox1=styled(Box)`
        padding: 2rem 2rem;
        & > h6 {
            margin-left: 1rem;
        }
    `
    const FilterBox2=styled(Box)`
        padding: 0 3rem;
        height: 70vh;
        overflow-y: scroll;
        & > h6{
            margin-bottom: .5rem;
        }
    `

    const FilterBox21=styled(Box)`
        display: flex;
        gap: 25%;
        flex-wrap: wrap;
        & > div{
            display: flex;
            gap:5px;
            margin-bottom: 1rem;
           min-width: 30%;
        }
    `

    const FilterBox3=styled(Box)`
        position: absolute;
        bottom: 0;
        padding: 1rem 3rem;
    `
    const handlecheckbox=(e)=>{
        const{value,checked}=e.target
        if(checked){
             selectedfilter.push(value)
        }else{
            selectedfilter=selectedfilter.filter((e)=>e!=value)
        }
    }


    const showrestaurant=()=>{
        setopen(false)
        dispatch(addFilters({selectedfilter}))
    }
    
  return (
    <>
     <Drawer
        anchor="right"
        open={open}
        onClose={()=>setopen(false)}
        >
            <Box width="450px">
                <FilterBox1 display="flex">
                    <CloseIcon  onClick={()=>setopen(!open)} style={{alignSelf:"center",cursor:"pointer"}}/>
                    <Typography variant='h6' fontWeight="bold"> Filters</Typography>
                </FilterBox1>

                <FilterBox2 className='filterscroll'>
                    <Typography variant='subtitle1' fontWeight="bold">Cuisines</Typography>
                    <FilterBox21>
                       {
                        Filterdata.map((opt,index)=>{
                            return(
                                <Box key={index}>
                                   {
                                    <Checkbox onClick={handlecheckbox} value={opt.option} style={{color:"#fc8019",padding:0} } size='small'/>
                                   } 
                                    <Typography variant='body2'>{opt.option}</Typography>
                                </Box>
                            )
                        })
                       } 
                    </FilterBox21>
                </FilterBox2>

                <FilterBox3>
                    <Button variant="outlined" style={{border:"1px solid #535665",padding:".7rem 1.7rem",color:"black"}}>Clear</Button>
                    <Button variant="contained" onClick={showrestaurant} style={{padding:".7rem 1.7rem",color:"white",marginLeft:"2rem",background:"#fc8019"}}>Show Restaurants</Button>
                </FilterBox3>
            </Box>

        </Drawer>
   
        
      
    </>
  )
}

export default Filters