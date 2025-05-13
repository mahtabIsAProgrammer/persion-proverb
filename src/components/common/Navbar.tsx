import { Link } from "react-router-dom";
import { type SxProps, type Theme, Grid } from "@mui/material";

import { CustomSwitch } from "../controllers/CustomSwtich";
import { MAX_WIDTH } from "../../helpers/constants/static";
import { COLOR_PRIMARY } from "../../helpers/constants/colors";
import { SPACE_MD, SPACE_SM } from "../../helpers/constants/spaces";
import { FONT_BODY, FONT_WEIGHT_BLOD } from "../../helpers/constants/fonts";

import logo from "../../assets/images/logo.png";

export const Navbar = () => {
  return (
    <Grid sx={navbarSX}>
      <img src={logo} className="logo" />
      <Grid className="list">
        <Link className="link" to={"/"}>
          Home
        </Link>
        <Link className="link" to={"/proverbs"}>
          All Proverbs
        </Link>
      </Grid>
      <Grid>
        <CustomSwitch />
      </Grid>
    </Grid>
  );
};

const navbarSX: SxProps<Theme> = {
  px: SPACE_MD,
  py: SPACE_SM,
  top: "16px",
  margin: "auto",
  display: "flex",
  width: MAX_WIDTH,
  position: "sticky",
  borderRadius: "8px",
  alignItems: "center",
  justifyContent: "space-between",
  backgroundColor: COLOR_PRIMARY,
  "& .logo": {
    width: "150px",
  },
  "& .list": {
    display: "flex",
    gap: "18px",
    marginRight: SPACE_MD,
    "& .link": {
      color: "#FFFFFF",
      textDecoration: "none",
      fontSize: FONT_BODY,
      fontWeight: FONT_WEIGHT_BLOD,
    },
  },
};
