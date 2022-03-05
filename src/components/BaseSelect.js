import React from 'react';
import { FormControl, InputLabel, Menu, MenuItem, Select } from '@mui/material';

function BaseSelect({ label, data, itemSelected }) {
  return (
    <FormControl fullWidth>
      <InputLabel>{label}</InputLabel>
      <Select label={label} defaultValue={itemSelected}>
        {data.map((value) => (
          <MenuItem key={value.id} value={value.id}>
            {value.name}
          </MenuItem>
        ))}
      </Select>
    </FormControl>
  );
}

export default BaseSelect;
