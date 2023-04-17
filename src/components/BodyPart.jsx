import {React,useContext, useEffect} from 'react'
import { FoodContext } from '../context/Provide';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea, Stack,Box, Divider, Grid } from '@mui/material';
import { StarIcon } from '../utils/Icons';
import { card_image } from '../utils/Images';
import { Link } from 'react-router-dom';
import ResCardShimmer from './ResCardShimmer';

function BodyPart({allRestaurant}) {
  return (
    <>
    <Grid container spacing={6} sx={{padding:"1rem 3rem"}}>  
      {
        allRestaurant.length==0? <ResCardShimmer/>:
        allRestaurant.map((element,index)=>{ 
          return (
              <Grid key={index} item xs={3}>
                <Link  to={`/restaurant/${element?.data?.id}/${index}`}>
                    <Card elevation={0} sx={{ maxWidth: 245 }}>
                            <CardActionArea>
                              <CardMedia
                                component="img"
                                height="140"
                                src={card_image+element?.data?.cloudinaryImageId}
                                alt="green iguana"
                              />
                              <CardContent>
                                <Typography gutterBottom variant="subtitle1" fontWeight="bold" component="div">
                                    {element?.data?.name}
                                </Typography>
                                <Stack flexWrap="wrap" display="flex" direction="row" spacing={.3}>
                                    {
                                      element?.data?.cuisines.map((el,index)=>{
                                        return (
                                            <Typography key={index} variant="body2" color="text.secondary">
                                            {el},
                                          </Typography>
                                        )
                                      })
                                    }
                                </Stack>
                            
                                <Stack display="flex" mt={2} mb={1} direction="row" alignItems="center" spacing={3}>
              
                                    <Stack p={.2} display="flex" direction="row" bgcolor={element?.data?.avgRating<4?`#db7c38`:" #48c479"} spacing={.5}>
                                        <StarIcon  sx={{alignSelf:"center",fontSize:"1rem",color:"white"}}/>
                                        <Box style={{paddingRight:"5px"}}>
                                          <Typography fontSize=".8rem" color="white"  variant='body2' alignSelf="self-end"> 
                                              {element?.data?.avgRating} 
                                          </Typography>
                                        </Box>
                                    </Stack>
              
                                    <Typography fontSize=".7rem" variant='body1'> {element.data.deliveryTime} mins</Typography>
                                    <Typography fontSize=".7rem" variant='body1'> ₹{element.data.costForTwo/100} FOR TWO</Typography>
              
                                  
                                </Stack>
              
                                <Divider/>
                              </CardContent>
                            </CardActionArea>
                      </Card>
                </Link>
              </Grid>  

          )
        })
      }
    </Grid>
   

    </>
  )
}

export default BodyPart