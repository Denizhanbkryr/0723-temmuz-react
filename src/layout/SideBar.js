import { useDispatch, useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import { Button, Input } from "reactstrap";
import { changeTitleAction } from "../store/reducers/siteReducer";
import { useContext, useState } from "react";
import { CounterContext } from "../context/CounterProvider";
import { SiteGlobalContext } from "../context/SiteGlobalProvider";

const SideBar = () => {
  const title = useSelector((store) => store.site.title);
  const dispatch = useDispatch();
  const productsLength = useSelector((store) => store.products.list.length);
  const { theme, setTheme } = useContext(SiteGlobalContext);

  const [newTitle, setNewTitle] = useState(title);

  const { counter } = useContext(CounterContext);

  const changeTheme = () => {
    setTheme(theme === "dark" ? "light" : "dark");
  };

  const changeTitle = () => {
    // todo: dispach changeTitleAction ı gönder, içine de newTitle değerini ver
    dispatch(changeTitleAction(newTitle));
  };

  return (
    <div className="side-bar">
      <NavLink to="/" exact>
        Ana Sayfa
      </NavLink>
      <NavLink to="/products" exact>
        Ürünler [{productsLength}]
      </NavLink>
      <NavLink to="/products-reducer" exact>
        Ürünler useReducer Hook
      </NavLink>
      <NavLink to="/create-product" exact>
        Yeni Ürün Ekle
      </NavLink>
      <NavLink to="/counter" exact>
        Sayaç [{counter}]
      </NavLink>
      <NavLink to="/login" exact>
        Login
      </NavLink>
      <NavLink to="/login-custom-hook" exact>
        Login Custom Hook
      </NavLink>
      <Button onClick={changeTheme}>
        {theme === "light" ? "Dark" : "Light"} Mode
      </Button>
      <div className="mt-5 d-flex flex-column">
        <Input
          type="text"
          value={newTitle}
          onChange={(e) => setNewTitle(e.target.value)}
        />
        <Button onClick={changeTitle}>Change Title</Button>
      </div>
    </div>
  );
};

export default SideBar;
