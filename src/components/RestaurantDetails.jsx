import {React,useEffect, useContext,useState} from 'react'
import { Box,Divider,Stack,styled, Typography } from '@mui/material'
import { StarIcon,DirectionsBikeIcon, TimelapseIcon } from '../utils/Icons'
import ResShimmer from './ResShimmer'
import { FoodContext } from '../context/Provide'


function RestaurantDetails({RestaurantDetail}) {
  console.log(RestaurantDetail);
  const {setParticularRes}=useContext(FoodContext)
  // useEffect(()=>{
  //   setParticularRes(RestaurantDetail[id])
  // },[RestaurantDetail])

  
  
    const Namestack=styled(Stack)`
    & > div{
      & > h6{
        font-weight: 700;
      }
      & > p{
        color:#93959f ;
        font-size: .8rem;
        margin-bottom: 2px;

      }
      & > div > p{
        color:#93959f ;
        font-size: .8rem;
        margin-bottom: 2px;

      }
      
    }
  `

  const Ratingstack=styled(Stack)`
    width: max-content;
    & > svg{
      font-size: 1.3rem;
      color: green;
    }
    & > span{
        font-weight: 600;
        color: green;
    }
    & > hr {
      padding: 0 5px;
    }
  `

  const DeliveryFee=styled(Stack)`
        color:#93959f ;
        & > svg{
          font-size:1rem;
        }
        & > p{
          font-size: .7rem;
        }
  `

  const DeliveryTime=styled(Stack)`
    & > div > p {
      font-weight: 700;
    }
  
  `

  return (
    <>
  {
    RestaurantDetail?.length==0?
   <ResShimmer/>
    :
    
    <>
       <Namestack display="flex" mb={2} direction="row" justifyContent="space-between">
      <Box>
        <Typography variant='h6' component="h6">{RestaurantDetail?.name}</Typography>
        <Box sx={{display:"flex"}}>
          {
            RestaurantDetail?.cuisines.map((cuisine,index)=>{
            return <Typography variant='body2' key={index} component="p">{cuisine},</Typography>
            })
          }
        </Box>
    
   
        <Typography variant='body2' component="p">{RestaurantDetail?.areaName}, 2.0 km</Typography>
      </Box>

      <Box>
          <Ratingstack mb={.3} display="flex"  spacing={.5}  direction="row" justifyContent="center">
            <StarIcon />
            <Typography variant='boy1'>
                {RestaurantDetail?.avgRating}
            </Typography>
          </Ratingstack>
            <Divider />

            <Typography sx={{fontSize:".7rem !important"}} variant='body1'>
              {RestaurantDetail?.totalRatingsString??"No ratings"}
            </Typography>
      </Box>
   </Namestack>

    <DeliveryFee display="flex" mb={2} direction="row" spacing={1}>
      <DirectionsBikeIcon/>
        <Typography>
          {RestaurantDetail?.locality} | ₹29 Delivery fee will apply
        </Typography>
    </DeliveryFee>

    <Divider/>

    <DeliveryTime display="flex" direction="row" spacing={3} mb={4}  mt={2}>
      <Stack display="flex" direction="row" spacing={1}>
        <TimelapseIcon/>
        <Typography variant='body1'>
            {RestaurantDetail?.sla?.deliveryTime} MINS
        </Typography>
      </Stack>

      <Stack display="flex" direction="row" spacing={.5}>
        <Typography variant='body1'>
             ₹ {RestaurantDetail?.costForTwo/100} for two
        </Typography>
      </Stack>
    </DeliveryTime>
    </>


  }  
  
    </>
  )
}

export default RestaurantDetails