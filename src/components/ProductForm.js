import axios from "axios";
import { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";

const productDataInitial = {
  name: "",
  description: "",
  img: "",
  price: 0,
  stock: 0,
  ekMalzemeler: [],
};

const ekMalzemeler = [
  "biber",
  "kırmızı biber",
  "mantar",
  "zeytin",
  "sucuk",
  "salam",
  "sosis",
  "susam",
  "peynir",
  "kaşar peyniri",
  "cheddar peyniri",
  "ton balığı",
];

const ProductForm = () => {
  const [productData, setProductData] = useState(productDataInitial);
  const history = useHistory();

  const inputChangeHandler = (event) => {
    const { value, name, checked, type } = event.target; // name = "password" | "email" | "name"
    setProductData({
      ...productData,
      [name]: type === "checkbox" ? checked : value,
    }); // setter async çalışır
  };

  const productSubmitHandler = (e) => {
    e.preventDefault();
    // axios
    //   .post(
    //     "https://620d69fb20ac3a4eedc05e3a.mockapi.io/api/products",
    //     productData
    //   )
    //   .then((res) => {
    //     console.log("Ürün başarıyla eklendi: ", res.data);
    //     setProductData(productDataInitial);
    //   });

    axios.post("https://reqres.in/api/users", productData).then((res) => {
      history.push("/success");
    });
  };

  const ekMalzemeChange = (e) => {
    const { name, checked } = e.target;
    if (checked) {
      if (productData.ekMalzemeler.length > 10) {
        alert("En fazla 10 tane ek malzeme ekleyebilirsin");
      } else {
        setProductData({
          ...productData,
          ekMalzemeler: [...productData.ekMalzemeler, name],
        });
      }
    } else {
      setProductData({
        ...productData,
        ekMalzemeler: [...productData.ekMalzemeler.filter((m) => m !== name)],
      });
    }
  };

  useEffect(() => {
    console.log("productData > ", productData);
  }, [productData]);

  return (
    <form onSubmit={productSubmitHandler} className="product-form">
      <label>
        <span>İsim</span>
        <input
          type="text"
          name="name"
          onChange={inputChangeHandler}
          value={productData.name}
        />
      </label>
      <label>
        <span>Açıklama</span>
        <input
          type="text"
          name="description"
          onChange={inputChangeHandler}
          value={productData.description}
        />
      </label>
      <label>
        <span>Görsel URL</span>
        <input
          type="url"
          name="img"
          onChange={inputChangeHandler}
          value={productData.img}
        />
      </label>
      <label>
        <span>Ücret</span>
        <input
          type="number"
          name="price"
          onChange={inputChangeHandler}
          value={productData.price}
        />
      </label>
      <label>
        <span>Stok</span>
        <input
          type="number"
          name="stock"
          onChange={inputChangeHandler}
          value={productData.stock}
        />
      </label>
      {ekMalzemeler.map((malzeme) => (
        <label>
          {malzeme}
          <input
            type="checkbox"
            name={malzeme}
            onChange={ekMalzemeChange}
            checked={productData.ekMalzemeler.indexOf(malzeme) !== -1}
          />
        </label>
      ))}

      <button type="submit">Submit</button>
    </form>
  );
};

export default ProductForm;
