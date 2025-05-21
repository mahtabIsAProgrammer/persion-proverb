import { NavLink, useNavigate } from "react-router-dom";
import {
  type SxProps,
  type Theme,
  Drawer,
  Grid,
  IconButton,
  List,
  ListItem,
  ListItemText,
  useTheme,
  useMediaQuery,
} from "@mui/material";
import { useState } from "react";

import { ProverbForm } from "./ProverbForm";
import { MAX_WIDTH } from "../../helpers/constants/static";
import { CustomButton } from "../controllers/CustomButton";
import { closeIcon, menuIcon } from "../others/SvgComponents";
import { SPACE_MD, SPACE_SM } from "../../helpers/constants/spaces";
import { validationProverb } from "../../helpers/utils/validationHandler";
import { useCreateProverb, useGetCategories } from "../../services/hooks";
import { FONT_BODY, FONT_WEIGHT_REGULAR } from "../../helpers/constants/fonts";
import { COLOR_PRIMARY, COLOR_SECEONDRY } from "../../helpers/constants/colors";

import logo from "../../assets/images/logo.webp";

export const Navbar = () => {
  const navigate = useNavigate();
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));
  const [open, setOpen] = useState<boolean | undefined>();
  const [drawerOpen, setDrawerOpen] = useState(false);

  const { data: getCategories } = useGetCategories();

  const categoriesData =
    (getCategories as { data: string[] } | undefined)?.data ?? [];

  const { mutate: createProverb } = useCreateProverb();
  const handleSubmit = (values: Proverbs) => {
    createProverb(values, {
      onSuccess: () => setOpen(false),
      onError: (error) => console.error("Error creating proverb:", error),
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
      <img src={logo} className="logo" />
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
            onClick={() => setOpen(true)}
          />
        </Grid>
      )}
      {/* Mobile Drawer */}
      <Drawer
        className="drawer"
        anchor="left"
        open={drawerOpen}
        onClose={toggleDrawer(false)}
      >
        <List
          sx={{ width: 250, height: "100%", backgroundColor: COLOR_SECEONDRY }}
        >
          <ListItem>
            <IconButton onClick={toggleDrawer(false)}>{closeIcon()}</IconButton>
          </ListItem>
          <ListItem component="button" onClick={() => navigate("/")}>
            <ListItemText primary="Home" />
          </ListItem>
          <ListItem component="button" onClick={() => navigate("/proverbs")}>
            <ListItemText primary="All Proverbs" />
          </ListItem>
          <ListItem
            component="button"
            onClick={() => {
              navigate("/proverbs/random");
              setDrawerOpen(false);
            }}
          >
            <ListItemText primary="Random Proverb" />
          </ListItem>
          <ListItem
            component="button"
            onClick={() => {
              setOpen(true);
              setDrawerOpen(false);
            }}
          >
            <ListItemText primary="Add Proverb" />
          </ListItem>
        </List>
      </Drawer>
      {/* Form Dialog */}
      <ProverbForm
        open={open || false}
        onClose={() => setOpen(false)}
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
  mx: { xs: "8px", md: "auto" },
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
