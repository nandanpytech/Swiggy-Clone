import React from 'react'
import { Stack,Typography,Checkbox, styled, Divider,Button  } from '@mui/material';
import { EjectIcon } from '../utils/Icons';

function ModalStep1({ItemDetails,priceRange}) {
    console.log(ItemDetails);
    const PricingModels=["Full","Half","Quat"]
    const style = {
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        width: 600,
        bgcolor: 'background.paper',
        boxShadow: 24,
        p: 4,
      };

      const NextStepButton=styled(Button)`
        color: #4caf50;
        border: 1px solid #4caf50;
        display: flex;
        margin-top: 2rem !important;
        justify-content: space-between;
        padding: .5rem 1rem;
      `
  return (
    <>
         <Stack sx={style} bgcolor="white" display="flex" spacing={1}>
            <Stack display="flex" direction="row" spacing={1} >
                <EjectIcon sx={{color:"red",alignSelf:"center"}}></EjectIcon>
                <Typography variant='h6'sx={{fontWeight:"600"}}>Customize "{ItemDetails.name}" </Typography>
            </Stack>

            <Typography sx={{paddingLeft:"2rem"}}>₹{priceRange.initial} - ₹{priceRange.last}</Typography>
            <Divider/>

            <Stack display="flex" direction="row" spacing={1} >
                <Typography variant='h6' sx={{fontWeight:"700"}}>Portion</Typography>
            </Stack>
            
                {
                    ItemDetails?.variantsV2?.pricingModels?.map((index)=>{
                        if(index==0){
                            return (
                                <>
                                <Stack key={index} display="flex" direction="row" spacing={2}>
                                      
                                      <Checkbox  defaultChecked /> <Typography style={{alignSelf:"center"}}>{PricingModels[index]}</Typography>
                                </Stack>
                                </>
                            )
                        }else{
                            return (
                                <>
                                  <Stack key={index}   display="flex" direction="row"  spacing={2}>
                                     <Checkbox  /> <Typography style={{alignSelf:"center"}}>{PricingModels[index]}</Typography>
                                </Stack>
                                </>
                            )
                        }
                    })
                }
         
        </Stack>
    </>
  )
}

export default ModalStep1