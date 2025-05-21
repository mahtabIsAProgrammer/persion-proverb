import { useState, type FC } from "react";
import { Grid } from "@mui/material";
import { useParams } from "react-router-dom";

import { Navbar } from "../common/Navbar";

import { ProverbCard } from "../common/ProverbCard";
import { useCreateProverb, useGetProverbById } from "../../services/hooks";
import { proverbDetailsSX } from "../../helpers/styleObjects/pages";
import { ProverbForm } from "../common/ProverbForm";
import { validationProverb } from "../../helpers/utils/validationHandler";

export const ProverbDetails: FC = () => {
  const { id: currentId } = useParams();
  const { data: getProverbById, isLoading } = useGetProverbById(
    currentId ? +currentId : 0
  );

  const { categories, englishText, germanText, meaning, persionText } =
    (getProverbById as { data: Proverbs } | undefined)?.data ?? {};

  const [open, setOpen] = useState<boolean | undefined>();
  const { mutate: createProverb } = useCreateProverb();

  const handleSubmit = (values: Proverbs) => {
    createProverb(values, {
      onSuccess: () => {
        setOpen(false);
      },
      onError: (error) => {
        console.error("Error creating proverb:", error);
      },
    });
  };

  return (
    <Grid sx={proverbDetailsSX}>
      <Navbar />
      <Grid className="content">
        <ProverbCard
          isLoading={isLoading}
          isDetailPage
          id={currentId ?? ""}
          categories={categories ?? ""}
          persionText={persionText ?? ""}
          englishText={englishText ?? ""}
          germanText={germanText ?? ""}
          meaning={meaning}
          onEdit={() => setOpen(true)}
          onDelete={() => console.log("Deete")}
        />
      </Grid>
      <ProverbForm
        open={open || false}
        onClose={() => setOpen(false)}
        title={"Edit Proverb"}
        initialValues={{
          persionText: persionText || "",
          englishText: englishText || "",
          germanText: germanText || "",
          meaning: meaning || "",
          categories: categories || [],
        }}
        onSubmit={handleSubmit}
        categoriesData={[]}
        validationFunctions={validationProverb}
      />
    </Grid>
  );
};
