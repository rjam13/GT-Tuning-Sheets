import {
  Card,
  CardContent,
  CardHeader,
  Divider,
  Grid,
} from '@mui/material';
import SelectField from './fields/SelectField';
import PairField from './fields/PairField';
import SingleField from './fields/SingleField';

const Differential = ({
  onChange, 
  differential, 
  initial_torque_front,
  initial_torque_rear,
  accel_sensitivity_front,
  accel_sensitivity_rear,
  braking_sensitivity_front,
  braking_sensitivity_rear,
  tvc_differential,
  front_rear_torque_distribution,
  differentialChoices }) => {

  return (
    <Card>
      <CardHeader
        title="Differential Gear"
      />
      <Divider />
      <CardContent>
        <Grid
          container
          spacing={3}
        >
          <SelectField
            label={"Differential"}
            name={"differential"}
            value={differential}
            choices={differentialChoices}
            onChange={onChange}
          />
          <PairField 
            setting={"Initial Torque"}
            metric={"Lv."}
            name={"initial_torque"}
            front={initial_torque_front}
            rear={initial_torque_rear}
            onChange={onChange}
          />
          <PairField 
            setting={"Acceleration Sensitivity"}
            metric={"Lv."}
            name={"accel_sensitivity"}
            front={accel_sensitivity_front}
            rear={accel_sensitivity_rear}
            onChange={onChange}
          />
          <PairField 
            setting={"Braking Sensitivity"}
            metric={"Lv."}
            name={"braking_sensitivity"}
            front={braking_sensitivity_front}
            rear={braking_sensitivity_rear}
            onChange={onChange}
          />
          <SingleField 
            setting={"Torque-Vectoring Center Differential"}
            name={"tvc_differential"}
            value={tvc_differential}
            onChange={onChange}
          />
          <SingleField 
            setting={"Front/Rear Torque Distribution"}
            name={"front_rear_torque_distribution"}
            value={front_rear_torque_distribution}
            onChange={onChange}
          />
        </Grid>
      </CardContent>
      <Divider />
    </Card>
  )
}

export default Differential