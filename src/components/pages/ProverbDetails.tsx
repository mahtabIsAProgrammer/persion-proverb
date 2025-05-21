import { isArray } from "lodash";
import { Grid } from "@mui/material";
import { useState, type FC } from "react";
import { useNavigate, useParams } from "react-router-dom";

import {
  useDeleteProverb,
  useGetCategories,
  useUpdateProverb,
  useGetProverbById,
} from "../../services/hooks";
import { Navbar } from "../common/Navbar";
import { ProverbCard } from "../common/ProverbCard";
import { ProverbForm } from "../common/ProverbForm";
import { proverbDetailsSX } from "../../helpers/styleObjects/pages";
import { ConfirmDeleteDialog } from "../common/ConfirmDeleteDialog";
import { validationProverb } from "../../helpers/utils/validationHandler";

export const ProverbDetails: FC = () => {
  const { id: currentId } = useParams();
  const navigate = useNavigate();
  const { data: getProverbById, isLoading } = useGetProverbById(
    currentId ? +currentId : 0
  );

  const { categories, englishText, germanText, meaning, persionText } =
    (getProverbById as { data: Proverbs } | undefined)?.data ?? {};

  const [open, setOpen] = useState<boolean | undefined>();
  const { mutate: updateProverb } = useUpdateProverb(
    currentId ? +currentId : 0
  );

  const handleSubmit = (values: Proverbs) => {
    updateProverb(values, {
      onSuccess: () => {
        setOpen(false);
      },
      onError: (error) => {
        console.error("Error creating proverb:", error);
      },
    });
  };
  const [openDialog, setOpenDialog] = useState(false);
  const { mutate: deleteProverb } = useDeleteProverb();

  const handleDelete = () => {
    deleteProverb(currentId ? +currentId : 0);
    navigate("/proverbs");
    setOpenDialog(false);
  };

  const { data: getCategories } = useGetCategories();

  const categoriesData =
    (getCategories as { data: string[] } | undefined)?.data ?? [];

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
          onDelete={() => setOpenDialog(true)}
        />
      </Grid>
      <ConfirmDeleteDialog
        open={openDialog}
        onClose={() => setOpenDialog(false)}
        onConfirm={handleDelete}
      />
      <ProverbForm
        open={open || false}
        onClose={() => setOpen(false)}
        title={"Edit Proverb"}
        initialValues={{
          persionText: persionText || "",
          englishText: englishText || "",
          germanText: germanText || "",
          meaning: meaning || "",
          categories: isArray(categories)
            ? categories
            : categories
            ? [categories]
            : [],
        }}
        onSubmit={handleSubmit}
        categoriesData={categoriesData}
        validationFunctions={validationProverb}
      />
    </Grid>
  );
};
