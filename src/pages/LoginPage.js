import axios from "axios";
import { useEffect, useState } from "react";

const loginFormDataInitial = {
  name: "",
  email: "",
  password: "",
  rememberMe: false,
};

const LoginPage = () => {
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
    <form onSubmit={submitHandler} className="login-form">
      <label htmlFor="user-pass">Name</label>
      <input
        id="user-pass"
        type="text"
        name="name"
        // Controlled Component -
        value={loginFormData.name}
        onChange={inputChangeHandler}
      />
      <br />

      <label htmlFor="user-mail">Email</label>
      <input
        id="user-mail"
        type="email"
        name="email"
        value={loginFormData.email}
        onChange={inputChangeHandler}
      />
      <br />

      <label htmlFor="user-pass">Password</label>
      <input
        id="user-pass"
        type="password"
        name="password"
        value={loginFormData.password}
        onChange={inputChangeHandler}
      />
      <br />

      <label htmlFor="user-remember">Remember Me</label>
      <input
        id="user-remember"
        type="checkbox"
        name="rememberMe"
        checked={loginFormData.rememberMe}
        onChange={inputChangeHandler}
      />
      <br />

      <label htmlFor="gender-male">Male</label>
      <input
        id="gender-male"
        type="radio"
        name="gender"
        value="male"
        onChange={inputChangeHandler}
      />
      <br />
      <label htmlFor="gender-female">Female</label>
      <input
        id="gender-female"
        type="radio"
        name="gender"
        value="female"
        onChange={inputChangeHandler}
      />
      <br />

      <button
        type="button"
        onClick={() => setLoginFormData(loginFormDataInitial)}
      >
        Reset
      </button>
      <button type="submit">Login</button>
    </form>
  );
};

export default LoginPage;
