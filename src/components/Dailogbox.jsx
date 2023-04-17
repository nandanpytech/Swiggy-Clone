import {React,useContext,useEffect,useState} from 'react'
import {Dialog,DialogTitle,DialogContent,DialogActions, DialogContentText } from '@mui/material';
import { Typography, styled,Button,Box } from '@mui/material';
import Dailogtitle from './DailogBox/Dailogtitle';
import DailogContent from './DailogBox/DailogContent';
import { useDispatch } from 'react-redux'
import { addItem } from '../ReduxSlice/Cartslice';
import { FoodContext } from '../context/Provide';



function Dailogbox({open,handleClose,ItemDetails,priceRange,opentoast}) {
  const dispatch=useDispatch()
  const {ParticularRes}=useContext(FoodContext)

  
 
  const [counter, setcounter] = useState(1)
  const [addonsamount, setaddonsamount] = useState(0)
  const [bill, setbill] = useState({})

  const setbilling=(e,name)=>{
    if(e.target.checked){
      let selectedstack=e.target.parentNode.parentNode.childNodes
      let name_of_selected=selectedstack[1].innerHTML
      let price_of_selected=selectedstack[2].innerHTML
      setaddonsamount(prev=>prev+ parseInt(price_of_selected.slice(1)))
      if(!bill[name]){
         setbill({...bill,[name]:[{"name_of_selected":name_of_selected,"price_of_selected":price_of_selected}]})
      }else{
        setbill({...bill,[name]:[...bill[name],{"name_of_selected":name_of_selected,"price_of_selected":price_of_selected}]})

      }
    }
  }
  console.log(bill);


 
  const dailogboxclose=()=>{
    setcounter(1)
    handleClose()
  }


  const HandleModalButton=(counter)=>{
    if(counter==1){
      setcounter(prev=>prev+1)
    }else{
      dailogboxclose()
      
    }
  }

  const handleOrderedItem=(OrderedItem,addons)=>{
    dispatch(addItem({OrderedItem,ParticularRes,addons,addonsamount}))
    opentoast()
    dailogboxclose()
  
  }

 
 



    const NextStepButton=styled(Button)`
    width: 100%;
    color: #4caf50;
    border: 1px solid #4caf50;
    display: flex;
    margin-top: 2rem !important;
    justify-content: space-between;
    padding: .5rem 1rem;
  `
  const change={
    color:"#fc8019",
    border:"1px solid #fc8019",
    fontSize:".5rem",
    marginLeft:"1.9rem"
  }

 
  return (
    <div>
      <Dialog open={open} onClose={dailogboxclose} fullWidth maxWidth="xs">
        <DialogTitle>
          <Dailogtitle ItemDetails={ItemDetails} priceRange={priceRange}/>
        </DialogTitle>  


        <DialogContent>
            <DialogContentText>
            {counter!==1 && 
                <Box mt={2}>
                  <Typography variant='body1' color="black" ml={4} fontWeight={600}>Portion</Typography>
                  <Button variant='outlined' style={change} onClick={()=>setcounter((prev)=>prev-1)}>Change</Button>
              </Box>
             }
              {
                counter==1? <DailogContent  setbilling={setbilling} name="Portion" ItemDetails={ItemDetails?.variantsV2?.pricingModels}/> 
                : 
                ItemDetails?.addons?.map((addons,index)=>{
                  return  <DailogContent setbilling={setbilling}  key={index}  name={addons?.groupName} ItemDetails={addons?.choices}/>
                })
               
              }
            </DialogContentText>
        </DialogContent>

        <DialogActions> 
            {
              counter==1?
                 <NextStepButton onClick={()=>HandleModalButton(counter)}  variant="outlined">
                      <Typography variant='body2' fontWeight={700}>step 1/1'</Typography>
                      <Typography variant='body2' fontWeight={700}>Continue</Typography>
                  </NextStepButton>
           
              :
              <NextStepButton onClick={()=>handleOrderedItem(ItemDetails,bill)}  variant="outlined">
                 <Typography variant='body2' fontWeight={700}>{`Total ₹${420}`}</Typography>
                 <Typography variant='body2' fontWeight={700}>Add Item</Typography>
              </NextStepButton>
             
            }
        </DialogActions>
      </Dialog>
        
      
  
     
            
    </div>
  );


}

export default Dailogbox