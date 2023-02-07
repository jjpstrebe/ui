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
import styled from "styled-components";


interface IProps {
  color: string,
  font: string,
  label: string
}

interface IState {
}
export default class StatusLight extends React.Component<IProps, IState> {

  constructor(props: IProps) {
    super(props);
  }

  render() {
    const LightBox = styled.div`
      margin-left: 2px;
      width: 30px;
      height: 36px;
      border-radius: 3px;
      font-size: 12px;
      color: ${this.props.font};
      display: flex;
      align-items: center;
      justify-content: center;
      background: ${this.props.color};
      box-shadow: 0px 0 15px ${this.props.color};`;
    return (
      <LightBox>
        {this.props.label}
      </LightBox>
    );
  }

}
