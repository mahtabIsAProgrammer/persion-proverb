import { memo } from "react";
import {
  Autocomplete,
  Box,
  Grid,
  TextField,
  type SxProps,
  type Theme,
} from "@mui/material";

import { CustomButton } from "../controllers/CustomButton";
import { SPACE_LG } from "../../helpers/constants/spaces";

export const ProverbForm = memo(() => {
  return (
    <Grid sx={proverbFormSX}>
      <Box component="form" className="form">
        <TextField
          className="input"
          label="Persian Text"
          variant="outlined"
          fullWidth
        />
        <TextField
          className="input"
          label="English Translation"
          variant="outlined"
          fullWidth
        />
        <TextField
          className="input"
          label="German Translation"
          variant="outlined"
          fullWidth
        />
        <Autocomplete
          multiple
          options={[]}
          className="select"
          // value={category}
          // onChange={handleCategoryChange}
          // renderTags={(value, getTagProps) =>
          //   value.map((option, index) => (
          //     <Chip label={option} {...getTagProps({ index })} key={index} />
          //   ))
          // }
          renderInput={(params) => (
            <TextField
              {...params}
              className="input"
              variant="outlined"
              label="Category"
              placeholder="Select categories"
              fullWidth
            />
          )}
        />
        <TextField
          className="input"
          label="Meaning"
          variant="outlined"
          multiline
          rows={4}
          fullWidth
        />

        <CustomButton text="Submit" />
      </Box>
    </Grid>
  );
});

const proverbFormSX: SxProps<Theme> = {
  width: "100%",
  "& .form": {
    mt: SPACE_LG,
    width: "100%",
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "space-between",
    gap: "12px",
    "& .input": {
      maxWidth: "680px",
    },
  },
};
