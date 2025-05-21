import {
  Box,
  Drawer,
  Grid,
  useTheme,
  IconButton,
  Typography,
  type Theme,
  useMediaQuery,
  type SxProps,
} from "@mui/material";
import { useState, type FC } from "react";
import { NavLink, useNavigate } from "react-router-dom";

import {
  SPACE_LG,
  SPACE_MD,
  SPACE_SM,
  SPACE_XS,
} from "../../helpers/constants/spaces";
import { ProverbForm } from "./ProverbForm";
import { MAX_WIDTH } from "../../helpers/constants/static";
import { CustomButton } from "../controllers/CustomButton";
import { closeIcon, menuIcon } from "../others/SvgComponents";
import { COLOR_PRIMARY } from "../../helpers/constants/colors";
import { errorAlert, successAlert } from "../../helpers/utils/messege";
import { validationProverb } from "../../helpers/utils/validationHandler";
import { useCreateProverb, useGetCategories } from "../../services/hooks";
import { FONT_BODY, FONT_WEIGHT_REGULAR } from "../../helpers/constants/fonts";

import logo from "../../assets/images/logo.webp";

export const Navbar: FC = () => {
  const theme = useTheme();

  const navigate = useNavigate();

  const [drawerOpen, setDrawerOpen] = useState(false);

  const [openAdd, setOpenAdd] = useState<boolean | undefined>();

  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

  const { data: getCategories } = useGetCategories();

  const categoriesData =
    (getCategories as { data: string[] } | undefined)?.data ?? [];

  const { mutate: createProverb } = useCreateProverb();
  const handleSubmit = (values: Proverbs) => {
    createProverb(values, {
      onSuccess: () => {
        successAlert({
          title: "Successfully Added!",
        });
        setOpenAdd(false);
      },
      onError: () => {
        errorAlert({ title: "Problem has occurred on the server side!" });
      },
    });
  };

  const toggleDrawer = (state: boolean) => () => {
    setDrawerOpen(state);
  };

  const navLinks = (
    <>
      <NavLink className="link" to={"/"}>
        Home
      </NavLink>
      <NavLink className="link" to={"/proverbs"}>
        All Proverbs
      </NavLink>
    </>
  );

  return (
    <Grid sx={navbarSX} size={{ xs: 11.2 }}>
      <img src={logo} className="logo" onClick={() => navigate("/")} />
      {/* Desktop Nav */}
      {!isMobile && <Grid className="list">{navLinks}</Grid>}
      {/* Mobile Hamburger */}
      {isMobile && (
        <IconButton onClick={toggleDrawer(true)}>{menuIcon()}</IconButton>
      )}
      {/* Buttons */}
      {!isMobile && (
        <Grid className="buttons">
          <CustomButton
            variant="outlined"
            text="Random Proverb"
            onClick={() => navigate("/proverbs/random")}
          />
          <CustomButton
            variant="contained"
            text="Add Proverb"
            onClick={() => setOpenAdd(true)}
          />
        </Grid>
      )}
      <Drawer
        className="drawer"
        anchor="left"
        open={drawerOpen}
        onClose={toggleDrawer(false)}
        sx={draswerSX}
      >
        <Grid className="list-menu">
          <IconButton className="icon-close" onClick={toggleDrawer(false)}>
            {closeIcon()}
          </IconButton>
          <Typography className="list-item-menu" onClick={() => navigate("/")}>
            Home
          </Typography>
          <Typography
            className="list-item-menu"
            onClick={() => navigate("/proverbs")}
          >
            All Proverbs
          </Typography>
          <Box className="list-btn-menu">
            <CustomButton
              onClick={() => {
                navigate("/proverbs/random");
                setDrawerOpen(false);
              }}
              text={"Random proverb"}
            />
          </Box>
          <Box className="list-btn-menu">
            <CustomButton
              onClick={() => {
                setOpenAdd(true);
                setDrawerOpen(false);
              }}
              text={"Add proverb"}
            />
          </Box>
        </Grid>
      </Drawer>
      <ProverbForm
        open={openAdd || false}
        onClose={() => setOpenAdd(false)}
        title={"Add Proverb"}
        initialValues={{
          persionText: "",
          englishText: "",
          germanText: "",
          meaning: "",
          categories: [],
        }}
        onSubmit={handleSubmit}
        categoriesData={categoriesData ?? []}
        validationFunctions={validationProverb}
      />
    </Grid>
  );
};

const navbarSX: SxProps<Theme> = {
  px: SPACE_MD,
  py: SPACE_SM,
  top: "16px",
  mx: { xs: SPACE_SM, lg: "auto" },
  display: "flex",
  maxWidth: MAX_WIDTH,
  position: "sticky",
  borderRadius: "22px",
  alignItems: "center",
  justifyContent: "space-between",
  backdropFilter: "brightness(0.3)",

  zIndex: "222",
  "& .logo": {
    width: "150px",
    cursor: "pointer",
  },
  "& .list": {
    display: "flex",
    gap: SPACE_LG,
    ml: "150px",
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
    gap: SPACE_XS,
  },
};

const draswerSX: SxProps<Theme> = {
  "& .list-menu": {
    width: 250,
    height: "100%",
    backgroundColor: "#000",
    p: SPACE_SM,
    display: "flex",
    gap: SPACE_SM,
    flexDirection: "column",
    alignItems: "center",
    "& .list-item-menu": {
      background: "transparent",
      mb: SPACE_SM,
    },
    "& .list-btn-menu": {
      width: "100%",
      background: "transparent",
      "& .MuiButtonBase-root": {
        width: "100%",
      },
    },
    "& .icon-close": {
      width: "100%",
      justifyContent: "flex-end",
    },
  },
};
