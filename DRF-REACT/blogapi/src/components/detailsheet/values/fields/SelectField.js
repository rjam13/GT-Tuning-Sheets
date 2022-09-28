import {
  Grid,
  TextField,
  MenuItem,
} from '@mui/material';

const SelectField = ({label, name, value, choices, onChange}) => {
  return (
    <Grid
      item
      md={12}
      xs={12}
    >
      <TextField
        fullWidth
        label={label}
        name={name}
        // make sure this equals to the corresponding value in the json file
        onChange={onChange}
        required
        select
        value={value}
        variant="outlined"
      >
        {choices.map((option, index) => (
          <MenuItem
            key={index}
            value={option}
          >
            {option}
          </MenuItem>
        ))}
      </TextField>
    </Grid>
  )
}

export default SelectField