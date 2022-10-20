import {
  TextField,
  OutlinedInput,
  InputAdornment,
  IconButton,
} from "@mui/material";
import ClearIcon from "@mui/icons-material/Clear";
const FilterInventory = ({ setSearchTerm, searchTerm }) => {
  return (
    <TextField
      id="outlined"
      label="Search for inventory"
      defaultValue=""
      value={searchTerm}
      fullWidth
      onChange={(e) => setSearchTerm(e.target.value)}
      InputProps={{
        endAdornment:
          searchTerm.length > 0 ? (
            <InputAdornment position="end">
              <IconButton
                aria-label="toggle password visibility"
                onClick={() => {
                  setSearchTerm("");
                }}
                // onMouseDown={handleMouseDownPassword}
                edge="end"
              >
                <ClearIcon />
              </IconButton>
            </InputAdornment>
          ) : null,
      }}
    ></TextField>
  );
};

export default FilterInventory;
