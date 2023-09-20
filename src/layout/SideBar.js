import { NavLink } from "react-router-dom";

const SideBar = () => {
  return (
    <div className="side-bar">
      <NavLink to="/" exact>
        Ana Sayfa
      </NavLink>
      <NavLink to="/products" exact>
        Ürünler
      </NavLink>
      <NavLink to="/create-product" exact>
        Yeni Ürün Ekle
      </NavLink>
      <NavLink to="/counter" exact>
        Sayaç
      </NavLink>
      <NavLink to="/login" exact>
        Login
      </NavLink>
      <NavLink to="/login-custom-hook" exact>
        Login Custom Hook
      </NavLink>
    </div>
  );
};

export default SideBar;
