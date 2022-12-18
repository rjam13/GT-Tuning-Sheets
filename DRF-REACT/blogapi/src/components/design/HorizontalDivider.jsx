import { Box, styled } from "@mui/system";

const HorizontalDivider = styled(Box)(() => ({
  height: "0.125em",
  width: "60%",
  marginLeft: "auto",
  marginRight: "auto",
  backgroundImage: "linear-gradient(90deg, #BEF0F4 0%, #6d969f 60%)",
}));

export default HorizontalDivider;
