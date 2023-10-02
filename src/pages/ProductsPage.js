import { useEffect, useState } from "react";
import {
  Button,
  Input,
  Modal,
  ModalBody,
  ModalFooter,
  ModalHeader,
} from "reactstrap";

import { useDispatch, useSelector } from "react-redux";
import ProductCard from "../components/ProductCard";
import {
  FETCH_STATES,
  deleteProductActionCreator,
  fetchProductsActionCreator,
  removeProductAction,
} from "../store/reducers/productReducer";
import SpinnerButton from "../components/atoms/SpinnerButton";

const ProductsPage = ({}) => {
  const [showModal, setShowModal] = useState(false);
  const [filterText, setFilterText] = useState("");
  const dispatch = useDispatch();

  const products = useSelector((store) => store.products.list);
  const productsFetchState = useSelector((store) => store.products.fetchState);

  const toggle = () => setShowModal(!showModal);

  const deleteProduct = (productId) =>
    dispatch(deleteProductActionCreator(productId));

  const fetchProducts = () => dispatch(fetchProductsActionCreator());

  useEffect(() => {
    if (productsFetchState === FETCH_STATES.NotFetched) {
      fetchProducts();
    }
  }, []);

  return (
    <div>
      <h2>Products Page | filtered by: {filterText}</h2>
      <hr />
      <SpinnerButton
        onClick={fetchProducts}
        color="success"
        size="lg"
        loading={productsFetchState === FETCH_STATES.Fetching}
      >
        <i className="fa-solid fa-download me-2" />
        Ürünleri Yeniden Yükle
      </SpinnerButton>
      <a href="#merhaba">merhaba bölümü</a>
      <Input
        placeholder="Write to filter..."
        className="mb-2"
        value={filterText}
        onChange={(e) => setFilterText(e.target.value)}
      />
      <div className="d-flex flex-wrap">
        {products
          ?.filter((p) =>
            p.name.toLocaleLowerCase().includes(filterText.toLocaleLowerCase())
          )
          ?.map((product, i) => (
            <ProductCard
              product={product}
              key={i}
              toggle={toggle}
              deleteProduct={deleteProduct}
            />
          ))}
      </div>
      <div id="merhaba">merhaba</div>
      <Modal isOpen={showModal} toggle={toggle} centered>
        <ModalHeader toggle={toggle}>Ürün Sepete Eklendi!</ModalHeader>
        <ModalBody>Ne de güzel eklendi...</ModalBody>
        <ModalFooter>
          <Button color="secondary" onClick={toggle}>
            Cancel
          </Button>
          <Button color="primary" onClick={toggle}>
            Süper!
          </Button>
        </ModalFooter>
      </Modal>
    </div>
  );
};

export default ProductsPage;
