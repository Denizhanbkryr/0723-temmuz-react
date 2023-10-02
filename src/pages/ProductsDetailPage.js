import axios from "axios";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams, useHistory } from "react-router-dom";
import { Button } from "reactstrap";
import {
  deleteProductActionCreator,
  removeProductAction,
} from "../store/reducers/productReducer";

const ProductsDetailPage = ({}) => {
  const [product, setProduct] = useState(null);
  const { productId } = useParams();
  const history = useHistory();
  const products = useSelector((store) => store.products.list);
  const dispatch = useDispatch();

  const navBack = () => {
    // todo: go back previous URL in history
    history.goBack();
    // history.push("/products");
  };

  useEffect(() => {
    const pro = products?.find((p) => p.id === productId);
    setProduct(pro);
  }, [productId, products]);

  // useEffect(() => {
  // axios
  //   .get(
  //     `https://620d69fb20ac3a4eedc05e3a.mockapi.io/api/products/${productId}`
  //   )
  //   .then((res) => setProduct(res.data));
  // }, [productId]);

  const deleteProduct = () => {
    dispatch(deleteProductActionCreator(product?.id));
  };

  return (
    <div>
      <h2>
        <Button color="secondary" onClick={navBack}>
          {"<"}
        </Button>
        <span data-cy="detail-header">Products Detail Page:</span> {productId}
      </h2>
      <hr />
      <div className="d-flex flex-column">
        <img alt="Sample" src={product?.img} />
        <h2 data-cy="product-name">{product?.name}</h2>
        <p>{product?.description}</p>
        <p>{product?.price}</p>
        <p>{product?.stock}</p>
        <div>
          <Button color="danger" onClick={deleteProduct}>
            Sil
          </Button>
        </div>
      </div>
    </div>
  );
};

export default ProductsDetailPage;
