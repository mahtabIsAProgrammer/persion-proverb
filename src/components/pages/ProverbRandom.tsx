import type { FC } from "react";
import { Grid, Skeleton } from "@mui/material";
import { useParams } from "react-router-dom";

import { Navbar } from "../common/Navbar";
import { ProverbCard } from "../common/ProverbCard";
import { useGetProverbRandom } from "../../services/hooks";
import { proverbDetailsSX } from "../../helpers/styleObjects/pages";

export const ProverbRandom: FC = () => {
  const { id: currentId } = useParams();
  const { data: getProverbById, isLoading, refetch } = useGetProverbRandom();

  const { categories, englishText, germanText, meaning, persionText } =
    (getProverbById as { data: Proverbs } | undefined)?.data ?? {};

  return (
    <Grid sx={proverbDetailsSX}>
      <Navbar />
      <Grid className="content">
        {!isLoading ? (
          <ProverbCard
            isRandomPage
            isDetailPage
            id={currentId ?? ""}
            categories={categories ?? ""}
            persionText={persionText ?? ""}
            englishText={englishText ?? ""}
            germanText={germanText ?? ""}
            meaning={meaning}
            refetch={() => refetch()}
          />
        ) : (
          <Skeleton
            width={"768px"}
            height={"642px"}
            variant="rounded"
            sx={{ backgroundColor: "#333333" }}
          />
        )}
      </Grid>
    </Grid>
  );
};
