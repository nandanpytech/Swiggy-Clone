import {React,useRef,useState} from 'react'
import { Card,CardMedia,EastIcon,WestIcon } from '../utils/Icons'
import Slider from "react-slick";
import { Box,styled } from '@mui/material';
import { Carousel_Image_Url } from '../utils/const';
import CarouselShimmer from './CarouselShimmer';


function Carousel({CaroCard}) {
    const [showPrev, setshowPrev] = useState(false)

    const slider = useRef(null)
    var settings = {
        arrows: false,
        infinite: false,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 1
      };
    
    const ArrowIcon=styled(Box)`
     
        width: 100%;
        display: flex;
        justify-content: space-between;
        position: absolute;
        padding: 0 2rem;
        top: 40%;

        & > div {
        background-color: white;
        border-radius: 50%;
        cursor: pointer;
        padding: 10px;
        }
        
    `
    const Arrowclick=()=>{
        slider?.current?.slickNext()
        setshowPrev(true)
    }
  return (
    <>
    <Box sx={{marginTop:"4rem",position:"relative"}}>
    {
        CaroCard.length!=0?(
            <Box  bgcolor="#282c3f" p={4}>
            {
                    <Slider  ref={slider} {...settings}>
                        {
                            CaroCard.map((element,index)=>{
                            return (<Card key={index} className='Carousel-Card' sx={{width:"max-content !important"}}>
                                        <CardMedia sx={{ height: 260, width:260 }} image={Carousel_Image_Url+"/"+element.data.creativeId}/>
                                    </Card>)
                            })
                        }
                    </Slider>
                   
             }
            </Box>
        ):
        <Box   bgcolor="#282c3f" p={4}>
            <CarouselShimmer/>   
        </Box>
    }

    
    <ArrowIcon>
        <Box style={{visibility:showPrev?"visible":"hidden"}} onClick={() => slider?.current?.slickPrev()}>
            <WestIcon/>
        </Box>
        <Box onClick={Arrowclick}>
            <EastIcon/>
        </Box>
    </ArrowIcon>
   
    </Box>
    
    </>
  )
}

export default Carousel