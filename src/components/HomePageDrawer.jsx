import {React, useContext,useEffect,useState} from 'react'
import { Box, Drawer, InputBase, Typography, Stack } from '@mui/material';
import GpsFixedOutlinedIcon from '@mui/icons-material/GpsFixedOutlined';
import { FoodContext } from '../context/Provide';
import { CloseIcon,HistoryIcon } from '../utils/Icons';

function HomePageDrawer() {
    const {isdraweropen,setisdraweropen,inputdata,setinputdata,getlocation}=useContext(FoodContext)
    const [locationdata, setlocationdata] = useState()
    const [recentsearches, setrecentsearches] = useState([])

    const handleinput=(e)=>{
        setinputdata(e.target.value)
    }
    const handlesubmit=(e)=>{
        e.preventDefault()
        setisdraweropen(false)
        let a=getlocation(inputdata)
        setlocationdata(a)
    }


    useEffect(()=>{
        let value=JSON.parse(localStorage.getItem("recentSearch"))
        if(!Array.isArray(value)){
            value=[]
        }
        if(!value.includes(inputdata)){
            if(value.length>2){
                value.shift()
                console.log(value);
            }
            value.push(inputdata)
        }
        localStorage.setItem("recentSearch",JSON.stringify(value))
        setrecentsearches(value)
    },[locationdata])


  return (
        <Drawer
        anchor="left"
        open={isdraweropen}
        onClose={()=>setisdraweropen(false)}
        >
            <Box p={4}  role="presentation" width='450px' >
                <CloseIcon onClick={()=>setisdraweropen(false)} style={{cursor:"pointer"}}/>
                <form action="" onSubmit={(e)=>handlesubmit(e)}>
                    <InputBase 
                        onChange={(e)=>handleinput(e)}
                        value={inputdata}
                        style={{border:".3px solid #a9abb2",padding:".3rem 1rem",marginTop:"2rem",width:"100%"}}
                        placeholder="Search for area,street name..."
                    ></InputBase>
                </form>
                

                <Box display="flex"  p={3} mt={5} gap="1rem" style={{border:".3px solid #a9abb2"}}>
                    <GpsFixedOutlinedIcon/>
                    <Box>
                        <Typography fontSize={15} fontWeight="bold" color="#282c3f">Get Current Location</Typography>
                        <Typography fontSize={10} color="#93959f">Get Current Location</Typography>

                    </Box>
                </Box>

                <Stack display="flex" direction="column" p={2} mt={5} spacing={2} style={{border:".3px solid #a9abb2"}}>
                        <Typography fontSize={12} color="#93959f" style={{padding:"1rem 3.5rem 0"}}>RECENT SEARCHES</Typography>

                        {
                            recentsearches.slice(0).reverse().map((ele)=>{
                                return (
                                    <Box display="flex"  p={2} pt={0}  gap="1rem" >
                                            <HistoryIcon/>
                                            <Box onClick={()=>setinputdata(ele)} style={{cursor:"pointer"}}>
                                                <Typography fontSize={15} fontWeight="bold" color="#282c3f">{ele}</Typography>
                                                <Typography fontSize={10} color="#93959f">Karnatak, India</Typography>
                                            </Box>
                                    </Box>
                                )
                            })
                        }
                        
                </Stack>
               


            </Box>
            

        </Drawer>
  )
}

export default HomePageDrawer