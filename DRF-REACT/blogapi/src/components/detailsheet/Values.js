import React from "react";
import { Box, Container, Grid, useMediaQuery, useTheme } from "@mui/material";
import Tyres from "./values/Tyres";
import Differential from "./values/Differential";
import Suspension from "./values/Suspension";

const Values = ({ data, onChange }) => {
  // Props
  const tyreChoices = data["tyre_choices"];
  const differentialChoices = data["differential_choices"];
  const suspensionChoices = data["suspension_choices"];
  
  // Styling
  const theme = useTheme();
  // fixing order of value sections when making screen sizes smaller
  const isSmaller = useMediaQuery(theme.breakpoints.down("lg"));

  // Value Sections
  const tyres = (
    <Tyres
      onChange={onChange}
      tyres_front={data["sheet"]["tyres_front"]}
      tyres_rear={data["sheet"]["tyres_rear"]}
      tyreChoices={tyreChoices}
    />
  );
  const differential = (
    <Differential
      onChange={onChange}
      differential={data["sheet"]["differential"]}
      initial_torque_front={data["sheet"]["initial_torque_front"]}
      initial_torque_rear={data["sheet"]["initial_torque_rear"]}
      accel_sensitivity_front={data["sheet"]["accel_sensitivity_front"]}
      accel_sensitivity_rear={data["sheet"]["accel_sensitivity_rear"]}
      braking_sensitivity_front={data["sheet"]["braking_sensitivity_front"]}
      braking_sensitivity_rear={data["sheet"]["braking_sensitivity_rear"]}
      tvc_differential={data["sheet"]["tvc_differential"]}
      front_rear_torque_distribution={
        data["sheet"]["front_rear_torque_distribution"]
      }
      differentialChoices={differentialChoices}
    />
  );
  const suspension = (
    <Suspension
      onChange={onChange}
      suspension={data["sheet"]["suspension"]}
      suspensionChoices={suspensionChoices}
      height_front={data["sheet"]["height_front"]}
      height_rear={data["sheet"]["height_rear"]}
      anti_roll_bar_front={data["sheet"]["anti_roll_bar_front"]}
      anti_roll_bar_rear={data["sheet"]["anti_roll_bar_rear"]}
      compression_front={data["sheet"]["compression_front"]}
      compression_rear={data["sheet"]["compression_rear"]}
      expansion_front={data["sheet"]["expansion_front"]}
      expansion_rear={data["sheet"]["expansion_rear"]}
      natural_frequency_front={data["sheet"]["natural_frequency_front"]}
      natural_frequency_rear={data["sheet"]["natural_frequency_rear"]}
      camber_front={data["sheet"]["camber_front"]}
      camber_rear={data["sheet"]["camber_rear"]}
      toe_front={data["sheet"]["toe_front"]}
      toe_rear={data["sheet"]["toe_rear"]}
    />
  );

  return (
    <Box
      component="main"
      sx={{
        flexGrow: 1,
        // padding for top and bottom
        my: 6,
      }}
    >
      <form
        autoComplete="off"
        noValidate
        // {...props}
      >
        <Container maxWidth={false}>
          <Grid container spacing={3}>
            <Grid item lg={6} xs={12} container spacing={3} direction="column">
              <Grid item>{tyres}</Grid>
              <Grid item>{isSmaller ? suspension : differential}</Grid>
            </Grid>
            <Grid item lg={6} xs={12}>
              {isSmaller ? differential : suspension}
            </Grid>
          </Grid>
        </Container>
      </form>
    </Box>
  );
};

export default Values;
