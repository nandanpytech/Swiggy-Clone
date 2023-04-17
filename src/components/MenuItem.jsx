import { Card, CardActionArea, CardMedia,Box, styled, Typography, Button, Divider } from '@mui/material'
import { Stack } from '@mui/system'
import {React,useContext,useState,useEffect} from 'react'
import { Menu_Item_Image } from '../utils/const'
import { EjectIcon } from '../utils/Icons'
import Dailogbox from './Dailogbox'
import { pricerange } from '../utils/CalculateRange'
import { useDispatch } from 'react-redux'
import { addItem } from '../ReduxSlice/Cartslice'
import { FoodContext } from '../context/Provide'
import Toast from './Toast';



function MenuItem({ItemDetails}) {
   const {imageId,name,defaultPrice,description,price,itemAttribute}=ItemDetails
   const [priceRange, setpriceRange] = useState({initial:"",last:""})
   const [ParticularItemdetails, setParticularItemdetails] = useState([])
   const [open, setOpen] = useState(false);
   const [isToastOpen, setisToastOpen] = useState(false)

   const {ParticularRes}=useContext(FoodContext)
   const dispatch=useDispatch()

   const handleOpen=(ItemDetails)=>{
    orderitemdirectly(ItemDetails)
    setParticularItemdetails(ItemDetails)
    setpriceRange (pricerange(ItemDetails)) 
   }

   const orderitemdirectly=(OrderedItem,addons,addonsamount)=>{
        if(!(OrderedItem?.variantsV2?.pricingModels) && !( OrderedItem?.addons)){  
            dispatch(addItem({OrderedItem,ParticularRes,addons,addonsamount}))
            setisToastOpen(true)
        }else{
            setOpen(true)
        }
   }

   const handleClose = () => setOpen(false);

   const opentoast=()=>{
    setisToastOpen(true)
   }

   useEffect(() => {
    if(isToastOpen){
      const ref=setTimeout(() => {
        setisToastOpen(false)
      }, 2000);

      return () => {
        clearInterval(ref)
      }

    }
  }, [isToastOpen])
  

    const ItemName=styled(Stack)`
        width: 50%;
        & > h6 {
            font-weight: 700;
            margin-bottom: 5px;
        }
        & > span{
            color: #93959f;
            margin-top: 10px;
            white-space: break-spaces;
        }
       
    `
    const ItemImage=styled(Box)`
    position: relative;
    height: max-content;
     &>div > button > img{
        width: 130px;
     }
     & > button{
        color: #60b246;
        position: absolute;
        bottom: -12px;
        left: 25%;
        background-color: white;
     }
    `
  
  return (
   <>
       <Box mb={4}>
            <Stack display="flex" mb={4} justifyContent="space-between" direction="row">
            <ItemName>
                <EjectIcon sx={{color:itemAttribute?.vegClassifier=="VEG"?"#0f8a65":"red"}}/>
                <Typography component="h6">
                    {name}
                </Typography>
                <Typography component="p" variant='body2'>
                    ₹{(defaultPrice/100) || (price/100)}
                </Typography>
                <Typography component="span" variant='body2'>
                    {description}
                </Typography>
            </ItemName>


            <ItemImage>
                <Card>
                    <CardActionArea>
                        <CardMedia component="img" width="118px" height="96px" alt="No Image!"  image={Menu_Item_Image+imageId}/>
                    </CardActionArea>
                </Card>
                <Button variant='contained' onClick={()=>handleOpen(ItemDetails,{},undefined)} > ADD </Button>
            </ItemImage>
            </Stack>
            <Divider/>
       </Box>

       {
        open &&
        <Dailogbox opentoast={opentoast} priceRange={priceRange}  open={open} ItemDetails={ParticularItemdetails} handleClose={handleClose}></Dailogbox>
       }

        {/* Toast */}
        {
         isToastOpen &&
           <Toast  ></Toast>
        } 
   </>
  )
}

export default MenuItem