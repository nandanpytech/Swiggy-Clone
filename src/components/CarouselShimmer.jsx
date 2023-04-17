import { Stack } from '@mui/material'
import React from 'react'
import { Card,CardMedia } from '../utils/Icons'

function CarouselShimmer() {
    const arr=[1,1,1,1]
  return (
    <>
   <Stack display="flex" pl={4} direction="row" spacing={4}>
        {
            arr.map((e,index)=>{
                return (
                    (<Card key={index}  sx={{width:"max-content !important",backgroundColor:"#686b78"}}>
                        <CardMedia sx={{ height: 260, width:260 }} />
                    </Card>)
                )
            })
        }
   </Stack>
       
    </>
    
  )
}

export default CarouselShimmer