import axios from "axios";
import { useState } from "react";

export const useAxios = (reqType, endpoint, payload) => {
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState();
  const [err, setErr] = useState();

  const doRequest = () => {
    setLoading(true);
    return axios[reqType](endpoint, payload)
      .then((res) => {
        setData(res.data);
        return res.data;
      })
      .catch((err) => {
        setErr(err);
        throw err;
      })
      .finally(() => setLoading(false));
  };

  return [data, doRequest, loading, err];
};
