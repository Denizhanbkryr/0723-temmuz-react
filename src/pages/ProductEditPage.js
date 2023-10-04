import axios from "axios";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams, useHistory } from "react-router-dom";
import { Button } from "reactstrap";
import {
  deleteProductActionCreator,
  removeProductAction,
} from "../store/reducers/productReducer";
import ProductFormYup from "../components/ProductFormYup";

const ProductEditPage = ({}) => {
  const history = useHistory();
  const { productId } = useParams();

  const product = useSelector((store) =>
    store.products.list.find((p) => p.id === productId)
  );
  const dispatch = useDispatch();

  const navBack = () => {
    history.goBack();
  };

  return (
    <div>
      <h2>
        <Button color="secondary" onClick={navBack}>
          {"<"}
        </Button>
        <span data-cy="detail-header">Products Edit Page:</span> {product?.name}
      </h2>
      <hr />
      <div className="d-flex flex-column">
        <ProductFormYup productInitial={product || {}} />
      </div>
    </div>
  );
};

export default ProductEditPage;
