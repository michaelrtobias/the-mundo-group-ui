import * as React from "react";
import Switch from "@mui/material/Switch";
import FormGroup from "@mui/material/FormGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormControl from "@mui/material/FormControl";

const DraftSwitch = ({ isDraft, setIsDraft }) => {
  const handleSwitch = (event) => {
    setIsDraft(event.target.checked);
  };
  return (
    <>
      <Switch
        color="primary"
        value={isDraft}
        onClick={handleSwitch}
        checked={isDraft}
        size="medium"
        color="secondary"
      />
    </>
  );
};
export default DraftSwitch;
