import {React,useState} from 'react'
import MenuItem from './MenuItem'
import {Accordion,AccordionSummary,AccordionDetails,Typography} from '@mui/material';
import { ExpandMoreIcon } from '../utils/Icons';


function ItemAccordion({title,ItemCards,categorylength}) {
  const [expanded, setExpanded] =useState("panel1")
  const handleChange = (panel) => (event, newExpanded) => {
    setExpanded(newExpanded ? panel : false);
  };
  return (
    <>
         <Accordion expanded={expanded === 'panel1'} onChange={handleChange('panel1')}>
                <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel1a-content"
                    id="panel1a-header"
                    >
                    <Typography sx={{fontWeight:700}}>{title} ({categorylength})</Typography>
                 </AccordionSummary>

                <AccordionDetails>
                  {
                      ItemCards?.map((element,index)=>
                        element.itemCards?
                          <ItemAccordion ItemCards={element.itemCards} key={index} categorylength={element.itemCards.length} title={element.title}/>
                          :
                          <MenuItem key={index}  ItemDetails={element.card.info}></MenuItem>
                        )
                  }
                </AccordionDetails>
      </Accordion>
    </>
  )
}

export default ItemAccordion