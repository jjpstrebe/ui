import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';
import Tooltip from '@mui/material/Tooltip';
import Badge from '@mui/material/Badge';
import TabContext from '@mui/lab/TabContext';
import TabList from '@mui/lab/TabList';
import TabPanel from '@mui/lab/TabPanel';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import Container from '@mui/material/Container';
import AlertDialogSlide from '../components/alertDialogSlide';
import BasicSelect from '../components/basicSelect';
import React, { useState, SyntheticEvent, ReactNode } from "react";
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';


export default function ModifyPanel() {
  const [value, setValue] = useState('1');

  const handleChange = (event: SyntheticEvent, newValue: string) => {
    setValue(newValue);
  };

  return (
    <Box sx={{ width: '100%', typography: 'body1' }}>
      <TabContext value={value}>
        <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
          <TabList onChange={handleChange} aria-label="lab API tabs example">
            <Tab label="Item One" value="1" />
            <Tab label="Item Two" value="2" />
          </TabList>
        </Box>
        <TabPanel value="1">
          <TextField id="outlined-basic" label="Outlined" variant="outlined" />
          <TextField id="outlined-basic" label="Outlined" variant="outlined" />
          <TextField id="outlined-basic" label="Outlined" variant="outlined" />
          <TextField id="outlined-basic" label="Outlined" variant="outlined" />
          <TextField id="outlined-basic" label="Outlined" variant="outlined" />
          <Typography>Search</Typography>
          <Stack spacing={2} direction="row">
            <FormGroup>
              <FormControlLabel control={<Checkbox />} label="Some short text" />
              <FormControlLabel control={<Checkbox />} label="Some short text" />
              <FormControlLabel control={<Checkbox />} label="Some short text" />
              <FormControlLabel control={<Checkbox />} label="Some short text" />
            </FormGroup>
          </Stack>
          <TextField id="outlined-basic" label="Outlined" variant="outlined" />
          <TextField id="outlined-basic" label="Outlined" variant="outlined" />
          <TextField id="outlined-basic" label="Outlined" variant="outlined" />
          <FormGroup>
            <FormControlLabel control={<Checkbox />} label="Lorem ipsum dolor sit amet, consectetur adipiscing elit" />
          </FormGroup>
          <TextField id="outlined-basic" label="Outlined" variant="outlined" />
        </TabPanel>
        <TabPanel value="2">
          <TextField id="outlined-basic" label="Outlined" variant="outlined" />
          <TextField id="outlined-basic" label="Outlined" variant="outlined" />
          <TextField id="outlined-basic" label="Outlined" variant="outlined" />
          <FormGroup>
            <FormControlLabel control={<Checkbox />} label="Lorem ipsum dolor sit amet, consectetur adipiscing elit" />
          </FormGroup>
          <Typography>Search</Typography>
          <TextField id="outlined-basic" label="Outlined" variant="outlined" />
          <TextField id="outlined-basic" label="Outlined" variant="outlined" />
          <TextField id="outlined-basic" label="Outlined" variant="outlined" />
          <FormGroup>
            <FormControlLabel control={<Checkbox />} label="Lorem ipsum dolor sit amet, consectetur adipiscing elit" />
          </FormGroup>
          <TextField id="outlined-basic" label="Outlined" variant="outlined" />
          <TextField id="outlined-basic" label="Outlined" variant="outlined" />
          <FormGroup>
            <FormControlLabel control={<Checkbox />} label="Lorem ipsum dolor sit amet, consectetur adipiscing elit" />
          </FormGroup>
          <TextField id="outlined-basic" label="Outlined" variant="outlined" />
          <TextField id="outlined-basic" label="Outlined" variant="outlined" />
          <FormGroup>
            <FormControlLabel control={<Checkbox />} label="Lorem ipsum dolor sit amet, consectetur adipiscing elit" />
          </FormGroup>
        </TabPanel>
      </TabContext>
      <Stack spacing={2} direction="row">
        <Button variant="contained">Button1</Button>
        <Button variant="contained">Button2</Button>
      </Stack>
    </Box>
  );
}
