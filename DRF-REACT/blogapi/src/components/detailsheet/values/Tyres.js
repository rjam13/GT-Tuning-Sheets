import {
  Card,
  CardContent,
  CardHeader,
  Divider,
  Grid,
  TextField,
  MenuItem
} from '@mui/material';
// import Paper from '@mui/material/Paper';

const Tyres = ({ onChange, tyres_front, tyres_rear, tyreChoices }) => {

  return (
    <Card>
      <CardHeader
        title="Tyres"
      />
      <Divider />
      <CardContent>
        <Grid
          container
          spacing={3}
        >
          <Grid
            item
            md={6}
            xs={12}
          >
            <TextField
              fullWidth
              label="Front Tyres"
              name="tyres_front"
              // make sure this equals to the corresponding value in the json file
              onChange={onChange}
              required
              select
              value={tyres_front}
              variant="outlined"
            >
              {tyreChoices.map((option, index) => (
                <MenuItem
                  key={index}
                  value={option}
                >
                  {option}
                </MenuItem>
              ))}
            </TextField>
          </Grid>
          <Grid
            item
            md={6}
            xs={12}
          >
            <TextField
              fullWidth
              label="Rear Tyres"
              name="tyres_rear"
              onChange={onChange}
              required
              select
              value={tyres_rear}
              variant="outlined"
            >
              {tyreChoices.map((option, index) => (
                <MenuItem
                  key={index}
                  value={option}
                >
                  {option}
                </MenuItem>
              ))}
            </TextField>
          </Grid>
        </Grid>
      </CardContent>
      <Divider />
    </Card>
  )
}

export default Tyres