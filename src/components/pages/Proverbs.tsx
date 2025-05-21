import { useState, type FC } from "react";
import { isArray, isEmpty, map } from "lodash";
import { Grid, MenuItem, Select, Skeleton, Typography } from "@mui/material";

import { Navbar } from "../common/Navbar";
import { ProverbCard } from "../common/ProverbCard";
import { CustomTextfield } from "../controllers/CustomTextfield";
import { useGetCategories, useProverbSearch } from "../../services/hooks";
import { menuItemSX, proverbsSX } from "../../helpers/styleObjects/pages";
import { nothingFoundICON } from "../others/SvgComponents";

export const Proverbs: FC = () => {
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("");

  const { data, isLoading } = useProverbSearch({ search, category });
  const { data: categories } = useGetCategories();

  const categoriesData =
    (categories as { data: string[] } | undefined)?.data ?? [];

  return (
    <Grid sx={proverbsSX}>
      <Navbar />
      <Grid className="content">
        <Grid className="filters" size={{ xs: 12 }}>
          <CustomTextfield
            placeholder="Search"
            variant="outlined"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="search-input"
          />
          <Select
            value={category}
            onChange={(e) => (
              setCategory(e.target.value), console.log(e.target.value)
            )}
            displayEmpty
            sx={{ minWidth: 200 }}
            className="filter-input"
            MenuProps={{
              sx: menuItemSX,
            }}
          >
            <MenuItem value="">All Categories</MenuItem>
            {isArray(categoriesData)
              ? categoriesData?.map((cat, index) => (
                  <MenuItem key={index} value={cat}>
                    {cat}
                  </MenuItem>
                ))
              : ""}
          </Select>
        </Grid>
        <Grid className="cards-container">
          <Grid className="cards-wrapper">
            {!isLoading ? (
              !isEmpty(data) ? (
                map(
                  data,
                  ({
                    categories,
                    englishText,
                    germanText,
                    id,
                    persionText,
                  }) => (
                    <ProverbCard
                      id={id}
                      key={id}
                      categories={categories}
                      englishText={englishText}
                      germanText={germanText}
                      persionText={persionText}
                    />
                  )
                )
              ) : (
                <Grid className="no-found">
                  {nothingFoundICON()}
                  <Typography>No Option Found</Typography>
                </Grid>
              )
            ) : (
              <Grid className="cards-wrapper">
                {map([1, 2], () => (
                  <Skeleton
                    width={"600px"}
                    height={"502px"}
                    variant="rounded"
                    sx={{ backgroundColor: "#333333" }}
                  />
                ))}
              </Grid>
            )}
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
};
