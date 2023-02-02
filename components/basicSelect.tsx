import * as React from 'react';
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select, { SelectChangeEvent } from '@mui/material/Select';


type Props = {
  title?: string;
  value?: string;
  options: Options[];
};

type Options = {
  value: string | number;
  label: string;
};


export default function BasicSelect({ title, value, options }: Props) {
  const [selectValue, setSelectValue] = React.useState(value == undefined ? '' : value as string);

  const handleChange = (event: SelectChangeEvent) => {
    setSelectValue(event.target.value as string);
  };

  return (
    <Box sx={{ minWidth: 120 }}>
      <FormControl fullWidth>
        <InputLabel id="demo-simple-select-label">{title}</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={selectValue}
          label={title}
          onChange={handleChange}
        >
          {options.map((d, i) => (<MenuItem key={i} value={d.value}>{d.label}</MenuItem>))}
        </Select>
      </FormControl>
    </Box>
  );
}
