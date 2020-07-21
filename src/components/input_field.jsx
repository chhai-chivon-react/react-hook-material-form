import { TextField } from "@material-ui/core";

import React from "react";

import { removeQoute } from "../utils/string_utils";

const InputField = (props) => {
  const { error, ...rest } = props;
  const hasError = error !== undefined;
  return (
    <TextField
      {...rest}
      variant="outlined"
      fullWidth
      error={hasError}
      helperText={hasError && `${removeQoute(error)}`}
    />
  );
};

export default InputField;
