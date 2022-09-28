import {
  Card,
  CardContent,
  CardHeader,
  Divider,
  Grid,
} from '@mui/material';
import SelectField from './fields/SelectField';
import PairField from './fields/PairField';

const Suspension = ({
  onChange, 
  suspension, 
  suspensionChoices,
  height_front,
  height_rear,
  anti_roll_bar_front,
  anti_roll_bar_rear,
  compression_front,
  compression_rear,
  expansion_front,
  expansion_rear,
  natural_frequency_front,
  natural_frequency_rear,
  camber_front,
  camber_rear,
  toe_front,
  toe_rear }) => {

  return (
    <Card>
      <CardHeader
        title="Suspension"
      />
      <Divider />
      <CardContent>
        <Grid
          container
          spacing={3}
        >
          <SelectField
            label={"Suspension"}
            name={"suspension"}
            value={suspension}
            choices={suspensionChoices}
            onChange={onChange}
          />
          <PairField 
            setting={"Body Height Adjustment"}
            metric={"mm"}
            name={"height"}
            front={height_front}
            rear={height_rear}
            onChange={onChange}
          />
          <PairField 
            setting={"Anti-Roll Bar"}
            metric={"Lv."}
            name={"anti_roll_bar"}
            front={anti_roll_bar_front}
            rear={anti_roll_bar_rear}
            onChange={onChange}
          />
          <PairField 
            setting={"Damping Ratio (Compression)"}
            metric={"%"}
            name={"compression"}
            front={compression_front}
            rear={compression_rear}
            onChange={onChange}
          />
          <PairField 
            setting={"Damping Ratio (Expansion)"}
            metric={"%"}
            name={"expansion"}
            front={expansion_front}
            rear={expansion_rear}
            onChange={onChange}
          />
          <PairField 
            setting={"Natural Frequency"}
            metric={"Hz"}
            name={"natural_frequency"}
            front={natural_frequency_front}
            rear={natural_frequency_rear}
            onChange={onChange}
          />
          <PairField 
            setting={"Negative Camber Angle"}
            metric={"Deg."}
            name={"camber"}
            front={camber_front}
            rear={camber_rear}
            onChange={onChange}
          />
          <PairField 
            setting={"Toe Angle"}
            metric={"Deg."}
            name={"toe"}
            front={toe_front}
            rear={toe_rear}
            onChange={onChange}
          />
        </Grid>
      </CardContent>
      <Divider />
    </Card>
  )
}

export default Suspension