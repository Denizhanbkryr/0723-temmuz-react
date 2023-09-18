import Counter, { PI } from "./components/Counter";
import "./App.css";
import { useEffect, useState } from "react";
import Main from "./layout/Main";
import axios from "axios";
import { ToastContainer } from "react-toastify";

import "react-toastify/dist/ReactToastify.css";

// App Componenti - Root Component
function App() {
  // Componentin JS Bölümü
  const [userName, setUserName] = useState("Anonim");
  const [products, setProducts] = useState([]);

  // Props Drilling

  useEffect(() => {
    axios
      .get("https://620d69fb20ac3a4eedc05e3a.mockapi.io/api/products")
      .then((res) => {
        setProducts(res.data);
      });
  }, []);

  return (
    // Componentin Template Bölümü
    // HTML değil JSX dili!
    // Layout Componentleri
    <>
      <Main userName={userName} products={products} />
      <ToastContainer position="bottom-center" />
    </>
  );
}

export default App;
