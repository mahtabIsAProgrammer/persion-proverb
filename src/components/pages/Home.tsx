import type { FC } from "react";
import { Grid, Skeleton } from "@mui/material";
import { Link } from "react-router-dom";
import { isEmpty, map, slice } from "lodash";

import { Navbar } from "../common/Navbar";
import { ProverbCard } from "../common/ProverbCard.tsx";
import { useProverbSearch } from "../../services/hooks.ts";
import { homeSX } from "../../helpers/styleObjects/pages.ts";
import { arrowFilledIcon } from "../others/SvgComponents.tsx";
import { WIDTH_CARD } from "../../helpers/constants/static.ts";

export const Home: FC = () => {
  const { data, isLoading } = useProverbSearch();
  const slicedData = slice(data, 0, 4);
  return (
    <Grid sx={homeSX}>
      <Navbar />
      <Grid className="content">
        <Grid className="cards-container">
          <Grid className="cards-wrapper" container size={{ xs: 12 }}>
            {!isLoading ? (
              !isEmpty(data) ? (
                map(
                  slicedData,
                  ({
                    categories,
                    englishText,
                    germanText,
                    id,
                    persionText,
                  }) => (
                    <ProverbCard
                      categories={categories}
                      englishText={englishText}
                      germanText={germanText}
                      id={id}
                      persionText={persionText}
                    />
                  )
                )
              ) : (
                ""
              )
            ) : (
              <Grid className="cards-wrapper">
                {map([1, 2], () => (
                  <Skeleton
                    sx={{
                      width: WIDTH_CARD.width,
                      height: WIDTH_CARD.height,
                      backgroundColor: "#333333",
                    }}
                    variant="rounded"
                  />
                ))}
              </Grid>
            )}
          </Grid>
          <Grid className="view-all">
            <Link to="/proverbs">See All {arrowFilledIcon()}</Link>
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
};
