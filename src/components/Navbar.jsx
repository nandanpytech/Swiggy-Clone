import React, { useContext } from 'react'
import {Stack, Typography, styled} from '@mui/material'
import { KeyboardArrowDownIcon,
    SearchIcon,
    DiscountOutlinedIcon,
    SupportOutlinedIcon,
    PersonOutlineOutlinedIcon,
    ShoppingBagOutlinedIcon} from '../utils/Icons'
import { Link, NavLink } from 'react-router-dom'
import { FoodContext } from '../context/Provide'



function Navbar() {
const {setisdraweropen,inputdata}=useContext(FoodContext)
const FirstStack=styled(Stack)` 
    cursor: pointer;
    & > h4{
        text-decoration: underline;
        font-size:.9rem;
        font-weight: 700;
    }
    & > p{
        font-size: 0.8rem;
        color: #686b78;
        font-weight: 400;
    }
    &  #arrowicon{
        color:#fc8019 ;
        margin-left: 5px !important;
        font-size: 1.5rem;
    }
`

const SecondStack=styled(Stack)`
    margin-left: auto !important;
    margin-right: 1rem  !important;
    & > a > li{
        list-style-type: none;
        cursor: pointer;
        display: flex;
        gap: 5px;
        align-items: center;
        font-size: 0.9rem;
        font-weight: 500;
        color: black;
    }

`
  return (
    <Stack sx={{position:"fixed",top:0,width:"100%",backgroundColor:"white",zIndex:1}} display="flex" spacing={2} p={1} direction="row">
        <NavLink to="/">
          <img width="100" height="55" src="https://logosandtypes.com/wp-content/uploads/2021/01/swiggy.svg" alt="" />
        </NavLink>
        <FirstStack display="flex" spacing={2}  direction="row" alignItems="center" onClick={()=>setisdraweropen(true)}>
            <Typography component="h4">
                Others
            </Typography>
            <Typography>
                {inputdata},Karnatak,India 
            </Typography>
            <KeyboardArrowDownIcon id="arrowicon"/>
        </FirstStack>

        <SecondStack  display="flex" alignItems="center" spacing={8} direction="row">
                 <Link>
                    <li className="nav-list-item">
                    <SearchIcon/> Search
                    </li>
                </Link> 

                <Link>
                    <li className="nav-list-item">
                    <DiscountOutlinedIcon/> 
                    Offers
                    </li>
                </Link>
                
                <Link>
                    <li className="nav-list-item">
                    <SupportOutlinedIcon/> Help
                    </li>
                </Link>
              
              <Link>
                <li className="nav-list-item">
                    <PersonOutlineOutlinedIcon/> Nandan
                </li>
              </Link>
               

                <Link to="/cart/2">
                    <li className="nav-list-item">
                    <ShoppingBagOutlinedIcon/> Cart
                    </li>
                </Link>   
               
        </SecondStack>
          
    </Stack>
  )
}

export default Navbar