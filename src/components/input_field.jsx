import { TextField } from "@material-ui/core";

import React from "react";

import { removeQoute } from "../utils/string_utils";

const InputField = (props) => {
  const { error, ...rest } = props;
  return (
    <TextField
      {...rest}
      variant="outlined"
      fullWidth
      error={error !== undefined}
      helperText={error !== undefined && `${removeQoute(error)}`}
    />
  );
};

export default InputField;
