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
import { errorAlert, successAlert } from "../../helpers/utils/messege";

export const ProverbDetails: FC = () => {
  const navigate = useNavigate();

  const { id: currentId } = useParams();

  const [openEdit, setOpenEdit] = useState<boolean | undefined>();

  const [openDelete, setOpenDelete] = useState(false);

  const { data: getProverbById, isLoading } = useGetProverbById(
    currentId ? +currentId : 0
  );

  const { categories, englishText, germanText, meaning, persionText } =
    (getProverbById as { data: Proverbs } | undefined)?.data ?? {};

  const { mutate: updateProverb } = useUpdateProverb(
    currentId ? +currentId : 0
  );

  const { mutate: deleteProverb } = useDeleteProverb();

  const handleSubmit = (values: Proverbs) => {
    updateProverb(values, {
      onSuccess: () => {
        setOpenEdit(false);
        successAlert({
          title: "Successfully Updated!",
        });
      },
      onError: (error) => {
        errorAlert({ title: "Problem has occurred on the server side!" });
        console.error("Error creating proverb:", error);
      },
    });
  };

  const handleDelete = () => {
    deleteProverb(currentId ? +currentId : 0, {
      onSuccess: () => {
        successAlert({
          title: "Successfully Deleted!",
        });
        setOpenDelete(false);
        navigate("/proverbs");
      },
      onError: (error) => {
        errorAlert({ title: "Problem has occurred on the server side!" });
        console.error("Error creating proverb:", error);
      },
    });
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
          onEdit={() => setOpenEdit(true)}
          onDelete={() => setOpenDelete(true)}
        />
      </Grid>
      <ConfirmDeleteDialog
        open={openDelete}
        onClose={() => setOpenDelete(false)}
        onConfirm={handleDelete}
      />
      <ProverbForm
        open={openEdit || false}
        onClose={() => setOpenEdit(false)}
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
