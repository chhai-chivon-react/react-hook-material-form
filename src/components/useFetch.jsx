import { useEffect, useState } from "react";
import httpService from "../service/http_service";

export const useFetch = (url, condition) => {
  const [state, setState] = useState({ data: null, loading: true, error: null });

  useEffect(() => {
    setState({ data: null, loading: true, error: null });
    httpService
      .get(url)
      .then((response) => {
        setState({ data: response.data, loading: false, error: null });
      })
      .catch((err) => {
        setState({ data: null, loading: false, error: err });
      });
  }, [condition, url]);

  return state;
};
