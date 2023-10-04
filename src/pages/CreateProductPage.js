import axios from "axios";
import { useEffect, useState } from "react";
import ProductFormYup from "../components/ProductFormYup";

const productDataInitial = {
  name: "",
  description: "",
  img: "",
  price: 0,
  stock: 0,
};

const CreateProductPage = () => {
  return (
    <div>
      <h1>Create Product</h1>
      <hr />
      <ProductFormYup productInitial={productDataInitial} />
    </div>
  );
};

export default CreateProductPage;
