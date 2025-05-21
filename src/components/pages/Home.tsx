import type { FC } from "react";
import { Grid } from "@mui/material";
import { Link } from "react-router-dom";
import { isEmpty, map, slice } from "lodash";

import { Navbar } from "../common/Navbar";
import { ProverbCard } from "../common/ProverbCard.tsx";
import { useProverbSearch } from "../../services/hooks.ts";
import { homeSX } from "../../helpers/styleObjects/pages.ts";
import { arrowFilledIcon } from "../others/SvgComponents.tsx";

export const Home: FC = () => {
  const { data, isLoading } = useProverbSearch();
  const slicedData = slice(data, 0, 4);
  return (
    <Grid sx={homeSX}>
      <Navbar />
      <Grid className="content">
        <Grid className="cards-container">
          <Grid className="cards-wrapper" container size={{ xs: 12 }}>
            {!isEmpty(data)
              ? map(
                  slicedData,
                  ({
                    categories,
                    englishText,
                    germanText,
                    id,
                    persionText,
                  }) => (
                    // <Grid
                    //   // sx={{ width: { xs: "100%", md: undefined } }}
                    //   size={{ xs: 12 }}
                    //   key={id}
                    // >
                    <ProverbCard
                      isLoading={isLoading}
                      categories={categories}
                      englishText={englishText}
                      germanText={germanText}
                      id={id}
                      persionText={persionText}
                    />
                    // </Grid>
                  )
                )
              : ""}
          </Grid>
          <Grid className="view-all">
            <Link to="/proverbs">See All {arrowFilledIcon()}</Link>
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
};
