import axios from "axios";
import { useEffect, useState } from "react";
import ProductForm from "../components/ProductForm";
import ProductFormYup from "../components/ProductFormYup";

const loginFormDataInitial = {
  name: "",
  email: "",
  password: "",
  rememberMe: false,
};

const CreateProductPage = () => {
  const [loginFormData, setLoginFormData] = useState(loginFormDataInitial);

  // Best Practice
  const inputChangeHandler = (event) => {
    const { value, name, checked, type } = event.target; // name = "password" | "email" | "name"
    setLoginFormData({
      ...loginFormData,
      [name]: type === "checkbox" ? checked : value,
    }); // setter async çalışır
  };

  const submitHandler = (e) => {
    e.preventDefault();
    console.log("form submit edildi");
    // axios post req
    axios
      .post("www.myserverapiaddress.com/api/login", loginFormData)
      .then((res) => {
        if (res.loggedIn) {
          // başarıyla giriş yaptı
        } else {
          // başarıyla giriş yapılmadı
        }
      })
      .catch((err) => {
        // giriş yapılamadı
      });
  };

  useEffect(() => {
    console.log("loginFormData: ", loginFormData);
  }, [loginFormData]);

  // component did mount > component loaded
  useEffect(() => {
    console.log("COMPONENT DID MOUNT");
  }, []);

  // component rerender > component did update
  useEffect(() => {
    console.log("COMPONENT DID UPDATE");
  });

  return (
    <div>
      <h1>Create Product</h1>
      <hr />
      <ProductFormYup />
    </div>
  );
};

export default CreateProductPage;
