import type { FC } from "react";
import { Grid } from "@mui/material";
import { useParams } from "react-router-dom";

import { Navbar } from "../common/Navbar";
import type { Proverbs } from "../../services/api";
import { ProverbCard } from "../common/ProverbCard";
import { useGetProverbRandom } from "../../services/hooks";
import { proverbDetailsSX } from "../../helpers/styleObjects/pages";

export const ProverbRandom: FC = () => {
  const { id: currentId } = useParams();
  const { data: getProverbById, isLoading } = useGetProverbRandom();
  console.log("🚀 ~ getProverbById:", getProverbById);

  const { categories, englishText, germanText, meaning, persionText } =
    (getProverbById as { data: Proverbs } | undefined)?.data ?? {};

  return (
    <Grid sx={proverbDetailsSX}>
      <Navbar />
      <Grid className="content">
        <ProverbCard
          isRandomPage
          isLoading={isLoading}
          isDetailPage
          id={currentId ?? ""}
          categories={categories ?? ""}
          persionText={persionText ?? ""}
          englishText={englishText ?? ""}
          germanText={germanText ?? ""}
          meaning={meaning}
        />
      </Grid>
    </Grid>
  );
};
