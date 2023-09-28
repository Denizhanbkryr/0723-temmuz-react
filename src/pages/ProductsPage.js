import { useState } from "react";
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
import { removeProductAction } from "../store/reducers/productReducer";

const ProductsPage = ({}) => {
  const [showModal, setShowModal] = useState(false);
  const [filterText, setFilterText] = useState("");
  const dispatch = useDispatch();

  const products = useSelector((store) => store.products);

  const toggle = () => setShowModal(!showModal);

  const deleteProduct = (productId) => dispatch(removeProductAction(productId));

  return (
    <div>
      <h2>Products Page | filtered by: {filterText}</h2>
      <hr />
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
