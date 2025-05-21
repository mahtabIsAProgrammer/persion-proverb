import { memo } from "react";
import { isArray } from "lodash";
import { useFormik } from "formik";
import { Box, Grid, type SxProps, type Theme } from "@mui/material";

import { CustomDialog } from "../controllers/CustomDialog";
import { CustomButton } from "../controllers/CustomButton";
import { CustomTextfield } from "../controllers/CustomTextfield";
import { CustomAutoComplete } from "../controllers/CustomAutoComplete";

export const ProverbForm = memo<IProverbForm>(
  ({
    open,
    onClose,
    title,
    initialValues,
    onSubmit,
    categoriesData,
    validationFunctions,
  }) => {
    const formIK = useFormik({
      initialValues,
      enableReinitialize: true,
      validateOnChange: false,
      validateOnBlur: false,
      validationSchema: validationFunctions ? validationFunctions() : undefined,
      onSubmit: (values: Proverbs) => {
        return onSubmit(values);
      },
    });
    const categoryOptions = categoriesData?.map((category) => ({
      label: category,
      value: category,
    }));

    return (
      <CustomDialog
        open={open}
        title={title}
        onClose={onClose}
        dialogContent={
          <Box
            component="form"
            method="post"
            onSubmit={formIK.handleSubmit}
            sx={proverbFormSX}
          >
            <Grid size={{ md: 12 }} container className="input-wrapper">
              <CustomTextfield
                name="persionText"
                label="Persian Text"
                value={formIK.values.persionText}
                onChange={formIK.handleChange}
                errorMessege={{ text: formIK.errors.persionText ?? "" }}
              />
              <CustomTextfield
                name="englishText"
                label="English Text"
                value={formIK.values.englishText}
                onChange={formIK.handleChange}
                errorMessege={{ text: formIK.errors.englishText ?? "" }}
              />
              <CustomTextfield
                name="germanText"
                label="German Text"
                value={formIK.values.germanText}
                onChange={formIK.handleChange}
                errorMessege={{ text: formIK.errors.germanText ?? "" }}
              />
              <CustomTextfield
                name="meaning"
                label="Meaning"
                multiline
                rows={4}
                className="text-area"
                value={formIK.values.meaning}
                onChange={formIK.handleChange}
                errorMessege={{ text: formIK.errors.meaning ?? "" }}
              />
              <CustomAutoComplete
                label="categories"
                options={categoryOptions}
                value={formIK.values.categories}
                onChange={(_, newValue) => {
                  const values = isArray(newValue)
                    ? newValue?.map((item: TAny) =>
                        typeof item === "string" ? item : item.value
                      )
                    : newValue;
                  formIK.setFieldValue("categories", values);
                }}
              />
            </Grid>
            <Grid className="btn-wrapper">
              <CustomButton onClick={onClose} text="Cancel" />
              <CustomButton type="submit" text="Submit" />
            </Grid>
          </Box>
        }
      />
    );
  }
);

const proverbFormSX: SxProps<Theme> = {
  width: "100%",
  "& .input-wrapper": {
    width: "100%",
    display: "flex",
    justifyContent: "space-between",
    flexDirection: "column",
    gap: "14px",
    mt: "20px",
    mb: "30px",
    "& .text-area": {
      "& .MuiInputBase-root": {
        height: "auto !important",
      },
    },
  },
  "& .btn-wrapper": {
    display: "flex",
    width: "100%",
    justifyContent: "center",
    gap: "18px",
    mt: "16px",
    "& button": {
      width: "200px",
    },
  },
};
