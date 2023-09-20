import "./App.css";
import { useEffect, useState } from "react";
import Main from "./layout/Main";
import { ToastContainer } from "react-toastify";

import { useAxios } from "./hooks/useAxios";
import { Spinner } from "reactstrap";

import "react-toastify/dist/ReactToastify.css";
import useLocalStorage from "./hooks/useLocalStorage";

// App Componenti - Root Component
function App() {
  // Componentin JS Bölümü
  const [userName, setUserName] = useState("Anonim");
  // const [products, setProducts] = useState([]);
  const [products, getProducts, productsLoading, productsErr] = useAxios(
    "get",
    "https://620d69fb20ac3a4eedc05e3a.mockapi.io/api/products"
  );

  const [theme, setTheme] = useLocalStorage("theme", "light");

  // Props Drilling

  useEffect(() => {
    getProducts();
  }, []);

  return (
    // Componentin Template Bölümü
    // HTML değil JSX dili!
    // Layout Componentleri
    <>
      <div className="products-loading" style={{ bottom: "120px" }}>
        Theme: {theme}
      </div>
      <Main userName={userName} products={products} />
      <ToastContainer position="bottom-center" />
      {productsLoading && (
        <div className="products-loading">
          <Spinner size={"sm"} className="me-2" /> Ürünler yükleniyor
        </div>
      )}
    </>
  );
}

export default App;
