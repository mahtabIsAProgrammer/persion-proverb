import { memo } from "react";
import { Box, Grid, type SxProps, type Theme } from "@mui/material";

import { CustomDialog } from "../controllers/CustomDialog";
import { CustomTextfield } from "../controllers/CustomTextfield";
import { CustomButton } from "../controllers/CustomButton";
import { CustomAutoComplete } from "../controllers/CustomAutoComplete";

import { useFormik } from "formik";

export const ProverbForm = memo<IProverbForm>(
  ({
    open,
    onClose,
    title,
    initialValues,
    validationFunctions,
    onSubmit,
    categoriesData,
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
              />
              <CustomTextfield
                name="englishText"
                label="English Text"
                value={formIK.values.englishText}
                onChange={formIK.handleChange}
              />
              <CustomTextfield
                name="germanText"
                label="German Text"
                value={formIK.values.germanText}
                onChange={formIK.handleChange}
              />
              <CustomTextfield
                name="meaning"
                label="Meaning"
                multiline
                rows={4}
                className="text-area"
                value={formIK.values.meaning}
                onChange={formIK.handleChange}
              />
              <CustomAutoComplete
                options={categoryOptions ?? []}
                value={formIK.values.categories}
                // onChange={(_, newValue) => {
                //   formIK.setFieldValue(
                //     field.name,
                //     newValue.map((v: any) => v.value)
                //   );
                // }}
                // errorMessege={form.errors.category}
                // getOptionLabel={(option: any) => option.label}
                // isOptionEqualToValue={(option: any, value: any) =>
                //   option.value === value
                // }
                // onChange={handleCategoryChange}
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
    gap: "26px",
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
