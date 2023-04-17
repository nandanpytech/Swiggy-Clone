import React from 'react'
import { Link } from 'react-router-dom'
import {  Breadcrumbs,Stack,styled } from '@mui/material'
import { FavoriteBorderIcon,SearchIcon } from '../utils/Icons'


function Breadcrumb() {
  const Bread=styled(Breadcrumbs)`
    &>ol>li>a{
      color: #93959f;
      font-size:.6rem;
    }

  `
 
  return (
   <>
   <Stack display="flex" mb={3} mt={12} direction="row" justifyContent="space-between">
       <Bread  aria-label="breadcrumb">
          <Link underline="hover"  href="">
              Home
          </Link>
          <Link underline="hover"  href="">
              Bangalore
          </Link>
          <Link underline="hover"  href="">
              Brigade Road
          </Link>
          <Link underline="hover"  href="">
              Hotel Empire
          </Link>
          
      </Bread>

      <Stack  display="flex" gap={3} direction="row" justifyContent="space-between">
        <FavoriteBorderIcon/>
        <SearchIcon/>
      </Stack>
   </Stack>


   </>
  )
}

export default Breadcrumb