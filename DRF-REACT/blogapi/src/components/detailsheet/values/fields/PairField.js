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
      md={12}
      xs={12}
    >
      <Grid
        item
        md={5.25}
        xs={5.25}
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
        md={0.75}
        xs={0.75}
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
        md={3}
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
        md={3}
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