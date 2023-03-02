import React from 'react'
import Accordion from '@mui/material/Accordion';
import AccordionDetails from '@mui/material/AccordionDetails';
import AccordionSummary from '@mui/material/AccordionSummary';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import "./BusinessPerformance.scss"

const BusinessPerformance = () => {
    const [expanded, setExpanded] = React.useState(false);
    const handleChange = (panel) => (event, isExpanded) => {
        setExpanded(isExpanded ? panel : false);
      };
  return (
    
 <div className='business-per'>
 <div className='head-sec'>
  <h3>Business Performance</h3>
 </div>

<Accordion expanded={expanded === 'panel1'} onChange={handleChange('panel1')}>
      
        <AccordionDetails>
          <Typography>
            Donec placerat, lectus sed mattis semper, neque lectus feugiat lectus,
            varius pulvinar diam eros in elit. Pellentesque convallis laoreet
            laoreet.
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates veniam ipsam dolores dolorum expedita animi eveniet sequi, quis ipsum inventore laborum quaerat maiores, cumque quod voluptatum aut eligendi odit. Saepe?
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates veniam ipsam dolores dolorum expedita animi eveniet sequi, quis ipsum inventore laborum quaerat maiores, cumque quod voluptatum aut eligendi odit. Saepe?
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates veniam ipsam dolores dolorum expedita animi eveniet sequi, quis ipsum inventore laborum quaerat maiores, cumque quod voluptatum aut eligendi odit. Saepe?
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates veniam ipsam dolores dolorum expedita animi eveniet sequi, quis ipsum inventore laborum quaerat maiores, cumque quod voluptatum aut eligendi odit. Saepe?
            
          </Typography>
        </AccordionDetails>
      </Accordion>

    </div>

    
  )
}

export default BusinessPerformance