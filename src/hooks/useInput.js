import { useState } from "react";

const useInput = (initialValue = "") => {
  const [inputData, setInputData] = useState(initialValue);

  const changeHandler = (e) => {
    const { type, value, checked } = e.target;
    setInputData(type === "checkbox" ? checked : value);
  };

  return [inputData, changeHandler];
};

export default useInput;
