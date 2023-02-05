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
import Box from '@mui/material/Box';


interface IProps {
  color: string,
  label: string
}

interface IState {
}
export default class StatusLight extends React.Component<IProps, IState> {

  constructor(props: IProps) {
    super(props);
  }

  render() {
    return (
      <Box sx={{ padding: 0.4, width: '25', height: '25', background: this.props.color }}>
        {this.props.label}
      </Box>
    );
  }

}
