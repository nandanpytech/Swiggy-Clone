import React from 'react'
import Snackbar from '@mui/material/Snackbar';
import MuiAlert from '@mui/material/Alert';
import { Typography } from '@mui/material';




const Alert = React.forwardRef(function Alert(props, ref) {
  return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
});

function Toast({isToastOpen}) {
    const state={
        vertical: 'bottom',
        horizontal: 'center',
    }
    const {vertical,horizontal}=state
    // console.log("hi");
  return (
    <>
         <Snackbar
         style={{width:"60%"}}
        anchorOrigin={{vertical,horizontal}}
        open={true}
        // onClose={!isToastOpen}
        message=""
        key={vertical + horizontal}
      >

        <Alert  severity="success" style={{ width: '100%' ,backgroundColor:"#60b246",display:"flex", justifyContent:"space-between"}}>
            <Typography variant='body2'>View Cart </Typography>
        </Alert>

        </Snackbar>
    </>
  )
}

export default Toast