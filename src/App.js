import "./App.css";
import { createContext, useContext, useEffect, useState } from "react";
import Main from "./layout/Main";
import { ToastContainer } from "react-toastify";

import { useAxios } from "./hooks/useAxios";
import { Spinner } from "reactstrap";

import "react-toastify/dist/ReactToastify.css";
import useLocalStorage from "./hooks/useLocalStorage";
import { useDispatch, useSelector } from "react-redux";
import {
  FETCH_STATES,
  fetchProductsActionCreator,
  setProductsAction,
} from "./store/reducers/productReducer";
import { SiteGlobalContext } from "./context/SiteGlobalProvider";
import { API, renewAPI } from "./api/api";

// App Componenti - Root Component
function App() {
  // Componentin JS Bölümü
  const { theme } = useContext(SiteGlobalContext);

  // const [products, setProducts] = useState([]);
  // const [products, getProducts, productsLoading, productsErr] = useAxios(
  //   "get",
  //   "https://620d69fb20ac3a4eedc05e3a.mockapi.io/api/products"
  // );
  const dispatch = useDispatch();

  const productsLoading = useSelector(
    (store) => store.products.fetchState === FETCH_STATES.Fetching
  );

  // Props Drilling

  useEffect(() => {
    // getProducts().then((newProducts) => {
    //   // todo: dispatch set products action
    //   dispatch(setProductsAction(newProducts));
    // });
    // dispatch(fetchProductsActionCreator());

    API.get("verify/me")
      .then((res) => {
        localStorage.setItem("token", res.token);
        renewAPI();
      })
      .catch((err) => {
        localStorage.removeItem("token");
        renewAPI();
      });
  }, []);

  return (
    // Componentin Template Bölümü
    // HTML değil JSX dili!
    // Layout Componentleri
    <div>
      <div className="products-loading" style={{ bottom: "120px" }}>
        Theme: {theme}
      </div>
      <Main />
      <ToastContainer position="bottom-center" />
      {productsLoading && (
        <div className="products-loading">
          <Spinner size={"sm"} className="me-2" /> Ürünler yükleniyor
        </div>
      )}
    </div>
  );
}

export default App;
