import styles from '../components/sidenav.module.css'
import KeyboardDoubleArrowLeftIcon from '@mui/icons-material/KeyboardDoubleArrowLeft';
import KeyboardDoubleArrowRightIcon from '@mui/icons-material/KeyboardDoubleArrowRight';
import Link from 'next/link';
import React, { useState } from 'react';
import Typography from '@mui/material/Typography';
import Stack from '@mui/material/Stack';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';


export default function Sidenav() {
  const [open, setopen] = useState(false);
  const toggleOpen = () => {
    setopen(!open);
  }
  return (
    <div className={open?styles.sidenav:styles.sidenavClosed}>
      <button className={styles.menuBtn} onClick={toggleOpen}>
        {open? <KeyboardDoubleArrowLeftIcon />: <KeyboardDoubleArrowRightIcon />}
      </button>
      <Stack spacing={2} direction="row">
        <Typography>Title</Typography>
        <Typography>element</Typography>
      </Stack>
      <Stack spacing={2} direction="row">
        <Typography>Title</Typography>
        <Typography>element</Typography>
      </Stack>
      <Stack spacing={2} direction="row">
        <Typography>Title</Typography>
        <Typography>element</Typography>
      </Stack>
      <Stack spacing={2} direction="row">
        <Typography>Title</Typography>
        <Typography>element</Typography>
      </Stack>
      <Stack spacing={2} direction="row">
        <Typography>Title</Typography>
        <Typography>element</Typography>
      </Stack>
      <Stack spacing={2} direction="row">
        <Typography>Title</Typography>
        <Typography>Text from API</Typography>
      </Stack>
      <Stack spacing={2} direction="row">
        <Typography>Title</Typography>
        <Typography>Text from API</Typography>
      </Stack>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2a-content"
          id="panel2a-header"
        >
          <Typography>Title</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>Content...</Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2a-content"
          id="panel2a-header"
        >
          <Typography>Title</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>Content...</Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2a-content"
          id="panel2a-header"
        >
          <Typography>Title</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>Content...</Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2a-content"
          id="panel2a-header"
        >
          <Typography>Title</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>Content...</Typography>
        </AccordionDetails>
      </Accordion>
    </div>
  );
}
