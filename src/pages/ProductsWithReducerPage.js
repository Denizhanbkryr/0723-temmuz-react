import { useEffect, useReducer, useState } from "react";
import {
  Button,
  Card,
  CardBody,
  CardSubtitle,
  CardText,
  CardTitle,
  Input,
  Modal,
  ModalBody,
  ModalFooter,
  ModalHeader,
} from "reactstrap";
import { Link } from "react-router-dom";

const productsInitial = [];

const productsReducer = (state, action) => {
  const { type, payload } = action;

  switch (type) {
    case "SET_PRODUCTS":
      return payload;
      break;

    case "REMOVE_PRODUCT":
      return state.filter((product) => product.id !== payload);

    case "ADD_PRODUCT":
      return [...state.filter((product) => product.id !== payload.id), payload];

    default:
      break;
  }
};

const ProductsWithReducerPage = (props) => {
  const [products, dispatchProducts] = useReducer(
    productsReducer,
    productsInitial
  );
  const [showModal, setShowModal] = useState(false);
  const [filterText, setFilterText] = useState("");

  const toggle = () => setShowModal(!showModal);

  useEffect(() => {
    dispatchProducts({
      type: "SET_PRODUCTS",
      payload: props.products,
    });
  }, [props.products]);

  return (
    <div>
      <h2>Products Page With Reducer | filtered by: {filterText}</h2>
      <hr />
      <Button
        onClick={() => {
          dispatchProducts({
            type: "ADD_PRODUCT",
            payload: {
              createdAt: "2023-09-19T09:07:57.506Z",
              name: "useReducerla eklendi!",
              img: "https://loremflickr.com/640/480/food",
              description: "Bu ürün useReducer hook u kullanılarak eklendi",
              stock: "6",
              price: "1000.00",
              id: "654321",
            },
          });
        }}
      >
        Add Product
      </Button>
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
            <Card
              className="me-2 mb-2"
              style={{
                width: "18rem",
              }}
              key={`product-card-${i}`}
            >
              <img alt="Sample" src={product.img} />
              <CardBody>
                <CardTitle tag="h5">{product.name}</CardTitle>
                <CardSubtitle className="mb-2 text-muted" tag="h6">
                  {product.price} TL
                </CardSubtitle>
                <CardText>{product.description}</CardText>
                <Button color="primary" onClick={toggle}>
                  Sepete Ekle
                </Button>
                <Button
                  color="danger"
                  onClick={() => {
                    dispatchProducts({
                      type: "REMOVE_PRODUCT",
                      payload: product.id,
                    });
                  }}
                >
                  Sil
                </Button>
                <Link
                  to={"/products/" + product.id}
                  className="ml-2"
                  data-cy="incele-link"
                >
                  İncele
                </Link>
              </CardBody>
            </Card>
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

export default ProductsWithReducerPage;
