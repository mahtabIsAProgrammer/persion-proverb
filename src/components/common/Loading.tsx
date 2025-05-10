import { Grid, type SxProps, type Theme } from "@mui/material";

export const Loading = () => {
  return <Grid sx={laodingSX}>Loading... </Grid>;
};

const laodingSX: SxProps<Theme> = {
  width: "100%",
  height: "100vh",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
};
