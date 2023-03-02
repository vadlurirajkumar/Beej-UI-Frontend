import React from 'react'
import Accordion from '@mui/material/Accordion';
import AccordionDetails from '@mui/material/AccordionDetails';
import AccordionSummary from '@mui/material/AccordionSummary';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import "./EngagementPerformance.scss"

const EngagementPerformance = () => {
  const [expanded, setExpanded] = React.useState(false);
  const handleChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };
  return (
    <div className='engagement-per'>
      <div className='head-sec'>
        <h3>Engagement Performance</h3>
      </div>
      <Accordion expanded={expanded === 'panel1'} onChange={handleChange('panel1')}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1bh-content"
          id="panel1bh-header"
          sx={{ "background-color": "#EDEDED", "border-radius": "10px" }}
        >
          <div className='accordian-header'>
            <Typography sx={{ width: '100%', flexShrink: 0 }} className="rev">Transaction / Order Count</Typography>
            <small>Last Updated - sep 16, 2022</small>
          </div>
        </AccordionSummary>
        <AccordionDetails>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus iusto
        </AccordionDetails>
      </Accordion>

    </div>
  )
}

export default EngagementPerformance