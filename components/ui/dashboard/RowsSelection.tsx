import * as React from 'react';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select, { SelectChangeEvent } from '@mui/material/Select';

export default function RowSelection() {
  const [age, setAge] = React.useState('');

  const handleChange = (event: SelectChangeEvent) => {
    setAge(event.target.value);
  };

  return (
    <FormControl sx={{ m: 1, minWidth: 73 }} size="small">
      <Select
        id="demo-select-small"
        value={'1'}
        onChange={handleChange}
      >
        <MenuItem value={1}>1</MenuItem>
        <MenuItem value={10}>2</MenuItem>
        <MenuItem value={20}>4</MenuItem>
        <MenuItem value={30}>8</MenuItem>
      </Select>
    </FormControl>
  );
}