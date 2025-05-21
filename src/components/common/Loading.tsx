import { Grid, Box, type SxProps, type Theme } from "@mui/material";

import loading from "../../assets/images/loading.gif";

export const Loading = () => {
  return (
    <Grid sx={laodingSX}>
      <Box component="img" className="img-loading" src={loading}></Box>{" "}
    </Grid>
  );
};

const laodingSX: SxProps<Theme> = {
  width: "100%",
  height: "100vh",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  backgroundColor: "#000",
  "& .img-loading": {
    width: "160px",
  },
};
