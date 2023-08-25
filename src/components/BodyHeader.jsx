import { Stack, Divider, Typography, Box, styled } from '@mui/material'
import {React,useContext} from 'react'
import {filters} from '../utils/const.js'
import {FoodContext }from '../context/Provide'
import {RestaurantIcon} from '../utils/Icons.js'


function BodyHeader({setopen,totalRescount,filterRestaurantWithActiveFilter}) {
   const {setsorttype}=useContext(FoodContext)
    const Secondstack=styled(Stack)`
        &> h6{
            
             & > button{
                background-color: transparent;
                border: none;
                cursor: pointer;
                font-size: 1rem;
                color: #686b78;
             }
             & > button:hover{
                color: black;
                font-weight: 700;
             }
        }
        & > h6:hover{
            cursor: pointer;
        }
        & > div{
            cursor: pointer;
        }
    `

    const filterdata=(key)=>{
        setsorttype(key)
    }
  return (
   <>
    <Box sx={{margin:"2rem 3rem 1rem"}}>
        <Stack display="flex" direction="row">
            <Stack display="flex" direction="row" spacing={1}>
                <Typography alignSelf="center" variant='h5' fontWeight="800">
                    {totalRescount}
                </Typography>
                <Typography alignSelf="center" variant='h5' fontWeight="800">
                    restaurants
                </Typography>
            </Stack>

            <Secondstack display="flex" direction="row" spacing={5} sx={{marginLeft:"auto !important"}}>
                {
                     Object.keys(filters).map((key,index) => {
                        return (
                            <Typography key={index} className={key} alignSelf="center" variant='subtitle1' onClick={()=>filterdata(key)}>
                               <button onClick={()=>filterRestaurantWithActiveFilter(key)}> {filters[key]}</button>
                            </Typography>
                        )
                    })
                    
                }
                <Stack display="flex"  onClick={()=>setopen(true)}  marginLeft={4} direction="row" spacing={1}>
                        <Typography alignSelf="center" variant='subtitle1' fontWeight="bold">
                                Filters
                        </Typography>
                        <div className='Filter-icon' style={{alignSelf:"center"}}>
                            <RestaurantIcon fontSize='14px'/>
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