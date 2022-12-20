import { Box, styled } from "@mui/system";

const HoverBox = styled(Box)(() => ({
  transition: "all 400ms ease",
  "&:hover": { opacity: "0.6" },
}));

export default HoverBox;
