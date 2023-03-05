import React from "react";
import styled from "styled-components";
import VpnKeyIcon from '@mui/icons-material/VpnKey';
import LockIcon from '@mui/icons-material/Lock';
import LockOpenIcon from '@mui/icons-material/LockOpen';
import Button from '@mui/material/Button';


const height = 40;
const width = 180;
const lockOffset = 20;


// Colors
const thumbColor = "rgba(255, 255, 255, 0)";
const thumbHoverColor = "rgba(255, 255, 255, 0)";
const upperBackground = "rgba(255, 255, 255, 0)";
const lowerBackground = "rgba(255, 255, 255, 0)";


const Wrapper = styled.div`
  /* width:100%; */
  position: relative;
`;

const Range = styled.input`
  position: absolute;
  z-index: 2;
  left: 0px;
  top: 0px;
  overflow: hidden;
  display: block;
  appearance: none;
  width: ${width}px;
  margin: 0;
  height: ${height}px;
  cursor: pointer;
  background: inherit;

  &:focus {
    outline: none;
  }

  &::-webkit-slider-runnable-track {
    width: 100%;
    height: ${height}px;
    background: ${lowerBackground};
  }

  &::-webkit-slider-thumb {
    position: relative;
    appearance: none;
    height: ${height}px;
    width: ${height}px;
    background: ${thumbColor};
    border-radius: 100%;
    border: 0;
    top: 50%;
    transform: translateY(-50%);
    transition: background-color 150ms;
  }

  &::-moz-range-track,
  &::-moz-range-progress {
    width: 100%;
    height: ${height}px;
    background: ${upperBackground};
  }

  &::-moz-range-progress {
    background: ${lowerBackground};
  }

  &::-moz-range-thumb {
    appearance: none;
    margin: 0;
    height: ${height}px;
    width: ${height}px;
    background: ${thumbColor};
    border-radius: 100%;
    border: 0;
  }

  &::-ms-track {
    width: 100%;
    height: ${height}px;
    border: 0;
    /* color needed to hide track marks */
    color: transparent;
    background: transparent;
  }

  &::-ms-fill-lower {
    background: ${lowerBackground};
  }

  &::-ms-fill-upper {
    background: ${upperBackground};
  }

  &::-ms-thumb {
    appearance: none;
    height: ${height}px;
    width: ${height}px;
    background: ${thumbColor};
    border-radius: 100%;
    border: 0;
    transition: background-color 150ms;
    /* IE Edge thinks it can support -webkit prefixes */
    top: 0;
    margin: 0;
    box-shadow: none;
  }

  &:hover,
  &:focus {
    &::-webkit-slider-thumb {
      background-color: ${thumbHoverColor};
    }
    &::-moz-range-thumb {
      background-color: ${thumbHoverColor};
    }
    &::-ms-thumb {
      background-color: ${thumbHoverColor};
    }
  }
`;


interface IProps {
}


interface IState {
  value: number,
  unlocked: boolean,
}


export default class UnlockableButton extends React.Component<IProps, IState> {

  constructor(props: IProps) {
    super(props);
    this.state = {
      value: 0,
      unlocked: false,
    };
  }
 
  componentDidMount() {
  }

  handleEvent = (event: React.SyntheticEvent) => {
    if (event.type === "mousedown") {
      //this.unlockStartHandler(event.target.value);
    } else if (event.type === "mouseup") {
      this.unlockEndHandler(event.target.value);
    } else if (event.type === "change") {
      this.setState({value: event.target.value});
    }
  }

  unlockEndHandler = (componentValue: number) => {
    // store current value
    this.setState({value: componentValue});
    // determine if we have reached success or not
    if(componentValue >= width) {
        this.successHandler();
    } else {
      this.setState({value: 0});
    }
  }

  // handle successful unlock
  successHandler = () => {
    // reset input range
    this.setState({value: 0});
    this.setState({unlocked: !this.state.unlocked});
  }

  render() {
    const Dragable = styled.div`
      position: absolute;
      left: ${this.state.value - (height * (this.state.value / width))}px;
      top: 0px;
      z-index: 1;
      width: ${height}px;
      height: ${height}px;
      background-color: rgba(255, 255, 255, 0);
    `;
    return (
      <div>
        <Button
          variant="contained"
          disabled={!this.state.unlocked}
          sx={{width: (width + lockOffset).toString() + 'px', marginBottom: 1}}
        >
          Simulate
        </Button>
        <Wrapper>
          <Range
            type="range"
            min={0}
            max={width}
            value={this.state.value}
            onChange={this.handleEvent}
            onMouseUp={this.handleEvent}
          />
          <Dragable><VpnKeyIcon sx={{ fontSize: 40 }} /></Dragable>
        </Wrapper>
        {
          this.state.unlocked ?
            <LockOpenIcon sx={{ fontSize: 40, marginLeft: (width - lockOffset).toString() + 'px'}} /> :
            <LockIcon sx={{ fontSize: 40, marginLeft: (width - lockOffset).toString() + 'px'}} />
        }
      </div>
    );
  }

}
