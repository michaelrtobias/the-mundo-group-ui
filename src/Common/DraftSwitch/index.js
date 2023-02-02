import * as React from "react";
import Switch from "@mui/material/Switch";

const DraftSwitch = ({ isDraft, setIsDraft, size }) => {
  const handleSwitch = (event) => {
    setIsDraft(event.target.checked);
  };
  return (
    <>
      <Switch
        color="secondary"
        value={isDraft}
        onClick={handleSwitch}
        checked={isDraft}
        size={size}
      />
    </>
  );
};
export default DraftSwitch;
