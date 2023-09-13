import { Route, Switch } from "react-router-dom";
import CounterPage, { PI, name } from "../pages/CounterPage";
import MainPage from "../pages/MainPage";
import ProductsPage from "../pages/ProductsPage";
import ProductsDetailPage from "../pages/ProductsDetailPage";
import LoginPage from "../pages/LoginPage";
import CreateProductPage from "../pages/CreateProductPage";

const PageContent = ({ userName, products }) => {
  console.log(PI)
  return (
    // Page Componentleri
    <div className="page-content">
      <Switch>
        <Route path="/counter">
          <CounterPage userName={userName} />
        </Route>
        <Route path="/products/edit">
          <h1>Ürün Düzenleme Sayfası</h1>
          <hr />
          <form></form>
        </Route>
        <Route path="/products" exact>
          <ProductsPage products={products} />
        </Route>
        <Route path="/products/:productId" exact>
          <ProductsDetailPage products={products} />
        </Route>
        <Route path="/login" exact>
          <LoginPage />
        </Route>
        <Route path="/create-product" exact>
          <CreateProductPage />
        </Route>
        <Route path="/" exact>
          <MainPage />
        </Route>
        <Route path="*">
          <h2>Girdiğiniz URL karşılığı bir sayfa bulunamadı!</h2>
        </Route>
      </Switch>
    </div>
  );
};

export default PageContent;
