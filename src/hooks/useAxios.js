import axios from "axios";
import { useState } from "react";
import { API } from "../api/api";

export const useAxios = () => {
  const [data, setData] = useState();
  const [err, setErr] = useState();
  const [loading, setLoading] = useState(false);

  const doRequest = ({ reqType, endpoint, payload, config }) => {
    setLoading(true);
    return API[reqType](endpoint, payload, config)
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

  return [doRequest, data, loading, err];
};
