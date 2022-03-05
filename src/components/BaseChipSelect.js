import React from 'react';
import { useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import OutlinedInput from '@mui/material/OutlinedInput';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import Chip from '@mui/material/Chip';

const ITEM_HEIGHT = 48;
const ITEM_PADDING_TOP = 8;
const MenuProps = {
  PaperProps: {
    style: {
      maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
      width: 250
    }
  }
};

export default function BaseChipSelect({ label, data, itemSelected }) {
  const theme = useTheme();
  const [selectedList, setSelectedList] = React.useState([itemSelected]);

  const handleChange = (event) => {
    const {
      target: { value }
    } = event;
    setSelectedList(
      // On autofill we get a stringified value.
      typeof value === 'string' ? value.split(',') : value
    );
  };

  return (
    <div>
      <FormControl fullWidth>
        <InputLabel>{label}</InputLabel>
        <Select
          defaultValue={itemSelected}
          multiple
          value={selectedList}
          onChange={handleChange}
          input={<OutlinedInput label={label} />}
          renderValue={(selected) => (
            <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 0.5 }}>
              {selected.map((value) => (
                <Chip key={value} label={value} />
              ))}
            </Box>
          )}
          MenuProps={MenuProps}
        >
          {data.map((value) => (
            <MenuItem key={value.id} value={value.name}>
              {value.name}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
    </div>
  );
}
