import {
  Box,
  Grid,
  TextField,
  Typography,
} from '@mui/material';

const singleField = ({setting, name, value, onChange}) => {
  
  return (
    <Grid
      item
      spacing={1.5}
      container
      md={12}
      xs={12}
    >
      <Grid
        item
        md={6}
        xs={6}
      >
        <Box mt={1.5}>
          <Typography
            color="textSecondary"
            variant="overline"
          >
            {setting}
          </Typography>
        </Box>
      </Grid>
      <Grid
        item
        md={6}
        xs={6}
      >
        <TextField
          fullWidth
          name={name}
          onChange={onChange}
          value={value}
        />
      </Grid>
    </Grid>
  )
}

export default singleField