import { memo } from "react";
import { isArray, map } from "lodash";
import { useNavigate } from "react-router-dom";
import {
  Grid,
  Box,
  type SxProps,
  type Theme,
  Typography,
  Skeleton,
} from "@mui/material";

import { SPACE_SM } from "../../helpers/constants/spaces";
import { CustomButton } from "../controllers/CustomButton";
import { CustomTooltip } from "../controllers/CustomTooltip";
import { slicedTextHandler } from "../../helpers/utils/others";
import {
  FONT_HEADING_MEDIUM,
  FONT_HEADING_SMALL,
  FONT_WEIGHT_BLOD,
} from "../../helpers/constants/fonts";
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
    isLoading,
    isRandomPage,
    refetch,
    onEdit,
    onDelete,
  }) => {
    const navigate = useNavigate();

    return !isLoading ? (
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
              {isArray(categories) ? map(categories, (cat) => cat) : categories}
            </Typography>
          </Grid>
        </Grid>
        <Grid className="btn-view-wrapper">
          {isRandomPage ? (
            <CustomButton text="Another one?" onClick={() => refetch} />
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
    ) : (
      <Skeleton
        width={isDetailPage ? "768px" : "600px"}
        height={isDetailPage ? "642px" : "502px"}
        variant="rounded"
        sx={{ backgroundColor: "#333333" }}
      />
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
    py: "20px",
    px: "32px",
    gap: "14px",
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
      color: COLOR_TEXT,
      fontSize: "25px",
      textAlign: "center",
      width: "100%",
      "&.persion": {
        fontFamily: "YekanBakh !important",
        fontSize: FONT_HEADING_MEDIUM,
        lineHeight: "22px",
      },
    },
    "& .categories-wrapper": {
      display: "flex",
      alignItems: "center",
      gap: "4px",
      "& .categories": {
        fontSize: "16px",
        color: COLOR_TEXT,
        fontWeight: FONT_WEIGHT_BLOD,
      },
    },
  },
  "& .btn-view-wrapper": {
    mb: "10px",
    gap: "12px",
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
