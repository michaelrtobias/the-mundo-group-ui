import * as React from "react";
import Switch from "@mui/material/Switch";

const DraftSwitch = ({ isDraft, setIsDraft, size }) => {
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
        size={size}
        color="secondary"
      />
    </>
  );
};
export default DraftSwitch;
