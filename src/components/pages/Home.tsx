import type { FC } from "react";
import { Grid } from "@mui/material";

import { Navbar } from "../common/Navbar";
import { homeSX } from "../../helpers/styleObjects/home";

export const Home: FC = () => {
  return (
    <Grid sx={homeSX}>
      <Navbar />
      <Grid className="content"></Grid>
    </Grid>
  );
};
