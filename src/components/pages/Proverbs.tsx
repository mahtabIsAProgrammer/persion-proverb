import type { FC } from "react";
import { Grid } from "@mui/material";
import { isEmpty, map } from "lodash";

import { Navbar } from "../common/Navbar";
import { ProverbCard } from "../common/ProverbCard";
import { useProverbSearch } from "../../services/hooks";
import { proverbsSX } from "../../helpers/styleObjects/pages";

export const Proverbs: FC = () => {
  const { data, isLoading } = useProverbSearch();

  return (
    <Grid sx={proverbsSX}>
      <Navbar />
      <Grid className="content">
        <Grid className="cards-container">
          <Grid className="cards-wrapper">
            {!isEmpty(data)
              ? map(
                  data,
                  ({
                    categories,
                    englishText,
                    germanText,
                    id,
                    persionText,
                  }) => (
                    <ProverbCard
                      isLoading={isLoading}
                      categories={categories}
                      englishText={englishText}
                      germanText={germanText}
                      id={id}
                      persionText={persionText}
                      key={id}
                    />
                  )
                )
              : ""}
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
};
