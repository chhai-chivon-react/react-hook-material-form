import { useEffect, useState } from "react";

export const useFetch = (callback, condition) => {
  const [state, setState] = useState({ data: null, loading: true, error: null });

  useEffect(() => {
    setTimeout(() => {
      callback()
        .then((response) => {
          setState({ data: response.data, loading: false, error: null });
        })
        .catch((err) => {
          setState({ data: null, loading: false, error: err });
        });
    }, 2000);
  }, [setState, condition]);

  return state;
};
