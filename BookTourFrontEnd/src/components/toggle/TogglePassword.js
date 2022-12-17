import React from "react";
import { IconHidePass, IconShowPass } from "@/icon";

const TogglePassword = ({ open = false, ...props }) => {
  if (open) {
    return <IconShowPass {...props} />;
  }
  return <IconHidePass {...props} />;
};

export default TogglePassword;
