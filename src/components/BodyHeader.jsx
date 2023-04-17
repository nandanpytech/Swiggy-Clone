import { Stack, Divider, Typography, Box, styled } from '@mui/material'
import {React,useContext} from 'react'
import {filters} from '../utils/const.js'
import {FoodContext }from '../context/Provide'

function BodyHeader() {
   const {setsorttype}=useContext(FoodContext)
    const Secondstack=styled(Stack)`
        &> h6{
            color: #686b78;
        }
        & > h6:hover{
            cursor: pointer;
        }
    `

    const filterdata=(key)=>{
        setsorttype(key)
    }
  return (
   <>
    <Box sx={{margin:"2rem 1rem"}}>
        <Stack display="flex" direction="row">
            <Stack display="flex" direction="row" spacing={1}>
                <Typography alignSelf="center" variant='h5' fontWeight="800">
                    1547
                </Typography>
                <Typography alignSelf="center" variant='h5' fontWeight="800">
                    restaurants
                </Typography>
            </Stack>

            <Secondstack display="flex" direction="row" spacing={5} sx={{marginLeft:"auto !important"}}>
                {
                     Object.keys(filters).map(key => {
                        return (
                            <Typography alignSelf="center" variant='subtitle1' onClick={()=>filterdata(key)}>
                                {filters[key]}
                             </Typography>

                        )
                    })
                    
                }
                <Stack display="flex" marginLeft={4} direction="row" spacing={1}>
                        <Typography alignSelf="center" variant='subtitle1' fontWeight="bold">
                                Filters
                        </Typography>
                        <div className='Filter-icon'>
                            <span id="Filter-icon-inside"></span>
                        </div>
                </Stack>
            </Secondstack>
        </Stack>
        <Divider/>
    </Box>
  
   </>
  )
}

export default BodyHeader