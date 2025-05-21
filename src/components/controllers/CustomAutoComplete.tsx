import {
  Chip,
  Grid,
  Autocomplete,
  type Theme,
  type SxProps,
  type AutocompleteProps,
  type FilterOptionsState,
} from "@mui/material";
import { memo } from "react";
import { filter, isArray } from "lodash";

import { CustomTextfield } from "./CustomTextfield";
import {
  FONT_CAPTION,
  FONT_SMALL_TEXT,
  FONT_WEIGHT_BLOD,
} from "../../helpers/constants/fonts";
import { COLOR_PRIMARY, COLOR_TEXT } from "../../helpers/constants/colors";
import { SPACE_MD, SPACE_XS } from "../../helpers/constants/spaces";

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
  label: string;
}
const filterOptions = (
  options: IOption[],
  params: FilterOptionsState<IOption>
) => {
  //const filtered = filter(options, params);
  const { inputValue } = params;
  const filtered = filter(options, ({ label }) => {
    return label?.toLowerCase()?.includes(inputValue);
  });

  return filtered;
};

const renderValue = (
  value: (string | IOption)[] | string | IOption,
  getItemProps: TAny
) => {
  const safeArray = isArray(value) ? value : [value];

  return safeArray.map((option: IOption | string, index: number) => {
    const { key, ...itemProps } = getItemProps({ index });

    return (
      <Chip
        variant="outlined"
        sx={{
          color: COLOR_TEXT,
          "& .MuiChip-deleteIcon": {
            color: COLOR_PRIMARY,
            "&:hover": {
              transition: "0.4s",
              color: COLOR_PRIMARY + "80",
            },
          },
        }}
        label={
          typeof option === "object" && "label" in option
            ? option.label
            : option
        }
        key={key}
        {...itemProps}
      />
    );
  });
};

export const CustomAutoComplete = memo<ICustomAutoComplete>(
  ({ errorMessege, options, label, ...props }) => {
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
          id="tags-filled"
          options={options}
          // getOptionLabel={(option) =>
          //   typeof option === "string" ? option : option.label
          // }
          // isOptionEqualToValue={(option, value) => option.value === value.value}
          slotProps={{ listbox: { sx: autocompleteOptionsSX } }}
          filterOptions={(options: IOption[], params) =>
            filterOptions(options, params)
          }
          renderValue={(value, getTagProps) => renderValue(value, getTagProps)}
          renderInput={(params) => (
            <CustomTextfield
              sx={{ textAlign: "right" }}
              {...params}
              label={label}
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
  "& .MuiPaper-root": {
    backgroundColor: "#000",
    border: "1px solid" + COLOR_PRIMARY,
  },
};
const autocompleteOptionsSX: SxProps<Theme> = {
  p: 0,
  overflowY: "auto",
  maxHeight: "150px",
  fontSize: FONT_SMALL_TEXT,
  gap: 0,
  display: "flex",
  flexDirection: "column",
  backgroundColor: "#000",
  borderRadius: "8px",
  border: "1px solid" + COLOR_PRIMARY,
  "& .MuiAutocomplete-option": {
    mb: SPACE_XS,
    display: "flex",
    textAlign: "left",
    alignItems: "center",
    height: "fit-content",
    minHeight: "fit-content",
    width: "97% !important",
    border: "none",
    justifyContent: "flex-start",
    borderRadius: "",
    p: SPACE_MD,
    "& p": {
      height: "max-content",
      color: COLOR_TEXT,
      fontSize: FONT_CAPTION,
      fontWeight: FONT_WEIGHT_BLOD,
    },
    "& .local-checkbox": {
      width: "24px",
      height: "24px",
    },
    "&:hover": {
      backgroundColor: COLOR_PRIMARY + "30",
    },
  },

  "&::-webkit-scrollbar": {
    width: "2px",
  },
};
