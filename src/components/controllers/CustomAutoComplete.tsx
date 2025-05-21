import {
  Autocomplete,
  Chip,
  Grid,
  type AutocompleteProps,
  type SxProps,
  type Theme,
} from "@mui/material";
import { memo } from "react";
import { CustomTextfield } from "./CustomTextfield";

interface IOption {
  label: string;
  value: number | string;
}

interface ICustomAutoComplete
  extends Omit<
    AutocompleteProps<
      IOption,
      boolean | undefined,
      boolean | undefined,
      boolean | undefined
    >,
    "renderInput"
  > {
  loading?: boolean;
  errorMessege?: { text: string };
}
export const CustomAutoComplete = memo<ICustomAutoComplete>(
  ({ errorMessege, options, ...props }) => {
    return (
      <Grid
        sx={customAutoCompleteSX}
        component="div"
        className="autocomplete-chip-wrapper"
      >
        <Autocomplete
          multiple
          freeSolo
          {...props}
          options={options}
          getOptionLabel={(option) =>
            typeof option === "string" ? option : option.label
          }
          renderValue={(selected) =>
            selected?.map((option, index) => (
              <Chip
                key={index}
                label={typeof option === "string" ? option : option.label}
                sx={{ margin: "2px", backgroundColor: "red", color: "white" }}
              />
            ))
          }
          // popupIcon={<LocalIcon src={arrowDownICON(COLOR_TEXT)} />}
          renderInput={({
            id,
            size,
            disabled,
            fullWidth,
            inputProps,
            InputProps,
          }) => (
            <CustomTextfield
              sx={{ textAlign: "right" }}
              {...{
                id,
                size,
                disabled,
                fullWidth,
                inputProps,
                InputProps,
                InputLabelProps: { required: false },
              }}
              errorMessege={errorMessege}
            />
          )}
        />
      </Grid>
    );
  }
);

const customAutoCompleteSX: SxProps<Theme> = {
  width: "100%",
  "& .MuiAutocomplete-tag": {
    backgroundColor: "red",
    color: "#fff",
  },
  "& .MuiAutocomplete-popper .MuiPaper-root": {
    backgroundColor: "#000",
    color: "#fff",
  },
};
