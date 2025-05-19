import { NavLink, useNavigate } from "react-router-dom";
import { type SxProps, type Theme, Grid } from "@mui/material";

import { MAX_WIDTH } from "../../helpers/constants/static";
import { CustomButton } from "../controllers/CustomButton";
import { SPACE_MD, SPACE_SM } from "../../helpers/constants/spaces";
import { FONT_BODY, FONT_WEIGHT_REGULAR } from "../../helpers/constants/fonts";

import logo from "../../assets/images/logo.webp";
import { COLOR_PRIMARY } from "../../helpers/constants/colors";

export const Navbar = () => {
  const navigate = useNavigate();
  return (
    <Grid sx={navbarSX}>
      <img src={logo} className="logo" />
      <Grid className="list">
        <NavLink className="link" to={"/"}>
          Home
        </NavLink>
        <NavLink className="link" to={"/proverbs"}>
          All Proverbs
        </NavLink>
      </Grid>
      <Grid className="buttons">
        <CustomButton
          variant="outlined"
          text="Random Proverb"
          onClick={() => navigate("/proverbs/random")}
        />
        <CustomButton variant="contained" text="Add Proverb" />
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
  borderRadius: "22px",
  alignItems: "center",
  justifyContent: "space-between",
  backdropFilter: "brightness(0.3)",

  zIndex: "222",
  "& .logo": {
    width: "150px",
  },
  "& .list": {
    display: "flex",
    gap: "26px",
    ml: "20px",
    "& .link": {
      position: "relative",
      color: "#FFFFFF",
      textDecoration: "none",
      fontSize: FONT_BODY,
      fontWeight: FONT_WEIGHT_REGULAR,
      "&::after": {
        content: '""',
        position: "absolute",
        left: 0,
        bottom: -2,
        width: 0,
        height: "2px",
        backgroundColor: COLOR_PRIMARY,
        transition: "width 0.3s ease",
      },
      "&:hover::after": {
        width: "100%",
      },
      "&.active::after": {
        width: "100%",
      },
    },
  },
  "& .buttons": {
    display: "flex",
    gap: "6px",
  },
};
