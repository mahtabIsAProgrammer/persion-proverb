import { memo, type JSX } from "react";

import {
  Box,
  Grid,
  type Theme,
  type SxProps,
  Tooltip,
  Typography,
  type TooltipProps,
} from "@mui/material";

import { FONT_BODY, FONT_WEIGHT_REGULAR } from "../../helpers/constants/fonts";
import { COLOR_SECEONDRY, COLOR_TEXT } from "../../helpers/constants/colors";
import { SPACE_XS } from "../../helpers/constants/spaces";

type TCustomTooltip = {
  dir?: string;
  sx?: SxProps<Theme>;
  background?: string;
  title: string;
  icon?: JSX.Element | string;
  component?: JSX.Element | string;
  textAlign?: "start" | "center" | "end";
  placement?: TooltipProps["placement"];
};

export const CustomTooltip = memo<TCustomTooltip>(
  ({ textAlign, icon, title, placement, sx, component, background }) => {
    return (
      <Grid className="local-tooltip">
        <Tooltip
          title={<Typography className="title-tooltip">{title}</Typography>}
          arrow
          placement={placement ?? "bottom"}
          componentsProps={{
            tooltip: {
              sx: {
                ...localTooltipSX(textAlign, background),
                ...sx,
              } as SxProps,
            },
          }}
        >
          <Box className="icon-tooltip" sx={IconTooltipSX} component="div">
            {icon}
            {component && component}
          </Box>
        </Tooltip>
      </Grid>
    );
  }
);

const localTooltipSX = (
  textAlign?: string,
  background?: string
): SxProps<Theme> => ({
  height: "auto",
  display: "flex",
  maxWidth: "400px",
  lineHeight: "35px",
  alignItems: "center",
  justifyContent: "center",
  textAlign: textAlign ?? "start",
  borderRadius: "8px",
  background: background ?? COLOR_SECEONDRY,
  "& span": {
    color: COLOR_TEXT,
  },
  "& .title-tooltip": {
    wordBreak: "break-all",
    lineHeight: "32px",
    fontSize: FONT_BODY,
    fontWeight: FONT_WEIGHT_REGULAR,
  },
});

const IconTooltipSX: SxProps<Theme> = {
  px: SPACE_XS,
  display: "flex",
  minWidth: "20px",
  minHeight: "20px",
  cursor: "pointer",
  borderRadius: "50%",
  position: "relative",
  alignContent: "center",
  justifyContent: "center",
};
