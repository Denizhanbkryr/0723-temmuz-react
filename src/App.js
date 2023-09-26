import "./App.css";
import { useEffect, useState } from "react";
import Main from "./layout/Main";
import { ToastContainer } from "react-toastify";

import { useAxios } from "./hooks/useAxios";
import { Spinner } from "reactstrap";

import "react-toastify/dist/ReactToastify.css";
import useLocalStorage from "./hooks/useLocalStorage";
import { useDispatch } from "react-redux";
import { setProductsAction } from "./store/reducers/productReducer";

// App Componenti - Root Component
function App() {
  // Componentin JS Bölümü
  const [userName, setUserName] = useState("Anonim");
  // const [products, setProducts] = useState([]);
  const [products, getProducts, productsLoading, productsErr] = useAxios(
    "get",
    "https://620d69fb20ac3a4eedc05e3a.mockapi.io/api/products"
  );
  const dispatch = useDispatch();

  const [theme, setTheme] = useLocalStorage("theme", "light");

  // Props Drilling

  useEffect(() => {
    getProducts().then((newProducts) => {
      // todo: dispatch set products action
      dispatch(setProductsAction(newProducts));
    });
  }, []);

  return (
    // Componentin Template Bölümü
    // HTML değil JSX dili!
    // Layout Componentleri
    <>
      <div className="products-loading" style={{ bottom: "120px" }}>
        Theme: {theme}
      </div>
      <Main userName={userName} />
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
