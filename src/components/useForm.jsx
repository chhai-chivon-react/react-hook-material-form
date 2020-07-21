import { useState } from "react";

export const useForm = (initialValues) => {
  const [values, setValues] = useState(initialValues);
  const [error, setError] = useState({});

  return [
    values,
    (e) => {
      setValues({
        ...values,
        [e.target.name]: e.target.value,
      });
    },
    error,
    (err) => {
      setError(err);
    },
  ];
};
