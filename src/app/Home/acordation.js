import * as React from 'react';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

export default function PerguntaEResposta({questao, resposta}) {
  return (

      <Accordion  >
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography variant='h5'>{questao}</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            {resposta}
          </Typography>
        </AccordionDetails>
      </Accordion>
   
  );
}