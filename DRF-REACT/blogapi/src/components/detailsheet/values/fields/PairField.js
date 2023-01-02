import {
  Box,
  Grid,
  TextField,
  Typography,
} from '@mui/material';

const PairField = ({setting, metric, name, front, rear, onChange}) => {
  return (
    <Grid
      item
      spacing={1.5}
      container
      xs={12}
    >
      <Grid
        item
        sm={5.25}
        xs={5}
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
        sm={0.75}
        xs={1}
      >
        <Box mt={1.5}>
          <Typography
            color="textSecondary"
            variant="caption"
          >
            {metric}
          </Typography>
        </Box>
      </Grid>
      <Grid
        item
        xs={3}
      >
        <TextField
          fullWidth
          name={`${name}_front`}
          onChange={onChange}
          type="number"
          value={front}
          InputLabelProps={{
            shrink: true,
          }}
        />
      </Grid>
      <Grid
        item
        xs={3}
      >
        <TextField
          fullWidth
          name={`${name}_rear`}
          onChange={onChange}
          type="number"
          value={rear}
          InputLabelProps={{
            shrink: true,
          }}
        />
      </Grid>  
    </Grid>
  )
}

export default PairField