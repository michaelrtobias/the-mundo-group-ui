import { TextField } from "@mui/material";

const FilterInventory = ({ setSearchTerm }) => {
  return (
    <TextField
      id="outlined"
      label="Search for inventory"
      defaultValue=""
      onChange={(e) => setSearchTerm(e.target.value)}
    />
  );
};

export default FilterInventory;
