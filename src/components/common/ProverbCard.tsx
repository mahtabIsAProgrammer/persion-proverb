import { memo } from "react";
import { isArray } from "lodash";
import { useNavigate } from "react-router-dom";
import { Grid, Box, type SxProps, type Theme, Typography } from "@mui/material";

import {
  arrayToCustomString,
  slicedTextHandler,
} from "../../helpers/utils/others";
import {
  FONT_TITLE,
  FONT_BUTTON,
  FONT_WEIGHT_BLOD,
  FONT_HEADING_SMALL,
  FONT_HEADING_MEDIUM,
} from "../../helpers/constants/fonts";
import {
  SPACE_LG,
  SPACE_MD,
  SPACE_SM,
  SPACE_XL,
  SPACE_XS,
} from "../../helpers/constants/spaces";
import { CustomButton } from "../controllers/CustomButton";
import { CustomTooltip } from "../controllers/CustomTooltip";
import { COLOR_PRIMARY, COLOR_TEXT } from "../../helpers/constants/colors";

import vector from "../../assets/images/Vector.webp";
import background from "../../assets/images/bg-cards.webp";

export const ProverbCard = memo<IProverbCard>(
  ({
    categories,
    englishText,
    germanText,
    id,
    persionText,
    isDetailPage,
    meaning,
    isRandomPage,
    refetch,
    onEdit,
    onDelete,
  }) => {
    const navigate = useNavigate();

    return (
      <Grid sx={proverbCardSX(isDetailPage)}>
        <Grid className="text-container">
          <Grid className="texts-wrapper">
            <Typography className="title">
              Persion<Box className="vector" component="img" src={vector}></Box>
            </Typography>
            {!isDetailPage ? (
              persionText.length > 40 ? (
                <CustomTooltip
                  title={persionText}
                  component={
                    <Typography className="text persion">
                      {slicedTextHandler(persionText)}...
                    </Typography>
                  }
                />
              ) : (
                <Typography className="text persion">{persionText}</Typography>
              )
            ) : (
              <Typography className="text persion">{persionText}</Typography>
            )}
          </Grid>
          <Grid className="texts-wrapper">
            <Typography className="title">
              English<Box className="vector" component="img" src={vector}></Box>
            </Typography>
            {!isDetailPage ? (
              englishText.length > 40 ? (
                <CustomTooltip
                  title={englishText}
                  component={
                    <Typography className="text">
                      {slicedTextHandler(englishText)}...
                    </Typography>
                  }
                />
              ) : (
                <Typography className="text">{englishText}</Typography>
              )
            ) : (
              <Typography className="text">{englishText}</Typography>
            )}
          </Grid>
          <Grid className="texts-wrapper">
            <Typography className="title">
              German<Box className="vector" component="img" src={vector}></Box>
            </Typography>
            {!isDetailPage ? (
              germanText.length > 40 ? (
                <CustomTooltip
                  title={germanText}
                  component={
                    <Typography className="text">
                      {slicedTextHandler(germanText)}...
                    </Typography>
                  }
                />
              ) : (
                <Typography className="text">{germanText}</Typography>
              )
            ) : (
              <Typography className="text">{germanText}</Typography>
            )}
          </Grid>
          {!isDetailPage ? (
            ""
          ) : (
            <Grid className="texts-wrapper">
              <Typography className="title">
                Meaning
                <Box className="vector" component="img" src={vector}></Box>
              </Typography>
              <Typography className="text">{meaning}</Typography>
            </Grid>
          )}
          <Grid className="categories-wrapper">
            <Typography className="title">Categories →</Typography>
            <Typography className="categories">
              {isArray(categories)
                ? arrayToCustomString(categories, " - ")
                : categories}
            </Typography>
          </Grid>
        </Grid>
        <Grid className="btn-view-wrapper">
          {isRandomPage ? (
            <CustomButton text="Another one?" onClick={refetch} />
          ) : !isDetailPage ? (
            <CustomButton
              text="Proveb Detials"
              onClick={() => navigate(`/proverbs/${id}`)}
            />
          ) : (
            <>
              <CustomButton text="Edit" onClick={onEdit} />
              <CustomButton text="Delete" onClick={onDelete} />
            </>
          )}
        </Grid>
      </Grid>
    );
  }
);

const proverbCardSX = (
  isDetailPage?: IProverbCard["isDetailPage"],
  isRandomPage?: IProverbCard["isRandomPage"]
): SxProps<Theme> => ({
  width: isDetailPage ? "770px" : "600px",
  height: isDetailPage ? "645px" : "502px",
  position: "relative",
  borderRadius: "8px",
  backgroundImage: `url(${background})`,
  backgroundSize: "cover",
  backgroundColor: "transparent",
  display: "flex",
  justifyContent: "center",
  flexDirection: "column",
  zIndex: 1,
  "& .text-container": {
    display: "flex",
    flexDirection: "column",
    py: SPACE_LG,
    px: SPACE_XL,
    gap: SPACE_MD,
    mb: SPACE_SM,
    "& .title": {
      color: COLOR_PRIMARY,
      fontSize: FONT_HEADING_SMALL,
      display: "flex",
      gap: "2px",
      fontWeight: FONT_WEIGHT_BLOD,
    },
    "& .vector": {
      width: "29px",
      mt: "18px",
    },
    "& .text": {
      width: "100%",
      color: COLOR_TEXT,
      fontSize: FONT_TITLE,
      textAlign: "center",
      "&.persion": {
        lineHeight: "22px",
        fontSize: FONT_HEADING_MEDIUM,
        fontFamily: "YekanBakh !important",
      },
    },
    "& .categories-wrapper": {
      gap: SPACE_XS,
      display: "flex",
      alignItems: "center",
      "& .categories": {
        color: COLOR_TEXT,
        fontSize: FONT_BUTTON,
        fontWeight: FONT_WEIGHT_BLOD,
      },
    },
  },
  "& .btn-view-wrapper": {
    mb: "10px",
    gap: SPACE_MD,
    display: "flex",
    justifyContent: "center",
    ...(isDetailPage || isRandomPage
      ? {
          "& button": {
            width: "170px !important",
          },
        }
      : {}),
  },
});
