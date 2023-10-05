import axios from "axios";
import { toast } from "react-toastify";
import { API, BASE_URL } from "../../api/api";

export const FETCH_STATES = {
  NotFetched: "NOT_FETCHED",
  Fetching: "FETCHING",
  Fetched: "FETCHED",
  FetchFailed: "FETCH_FAILED",
};

const productsInitial = {
  list: [],
  fetchState: FETCH_STATES.NotFetched,
};

export function productReducer(state = productsInitial, action) {
  const { type, payload } = action;

  switch (type) {
    case "SET_PRODUCTS":
      return { ...state, list: payload };

    case "ADD_PRODUCT_ADMIN_RIGHT":
      const pList = [...state.list];
      let found = false;
      pList.forEach((p, i) => {
        if (p.id === payload.id) {
          pList[i] = payload;
          found = true;
        }
      });
      if (!found) {
        pList.push(payload);
      }
      return {
        ...state,
        list: [...pList],
      };

    case "REMOVE_PRODUCT_ADMIN_RIGHT":
      return {
        ...state,
        list: [...state.list.filter((p) => p.id !== payload)],
      };

    case "SET_PRODUCT_FETCH_STATE":
      return { ...state, fetchState: payload };

    default:
      return state;
  }
}

// ACTIONS ****************************

export const setProductsAction = (products) => ({
  type: "SET_PRODUCTS",
  payload: products,
});

export const addProductAction = (product) => ({
  type: "ADD_PRODUCT_ADMIN_RIGHT",
  payload: product,
});

export const removeProductAction = (productId) => ({
  type: "REMOVE_PRODUCT_ADMIN_RIGHT",
  payload: productId,
});

export const setProductFetchState = (fetchState) => ({
  type: "SET_PRODUCT_FETCH_STATE",
  payload: fetchState,
});

// ACTION CREATORS ***********************

export const fetchProductsActionCreator = () => (dispatch, getState) => {
  dispatch(setProductFetchState(FETCH_STATES.Fetching));
  API.get(`/products`)
    .then((res) => {
      dispatch(setProductsAction(res.data));
      dispatch(setProductFetchState(FETCH_STATES.Fetched));
    })
    .catch((err) => {
      toast.error(
        "Products datası çekilirken bir hata ile karşılaşıldır! " + err.message
      );
      dispatch(setProductFetchState(FETCH_STATES.FetchFailed));
    });
};

export const deleteProductActionCreator =
  (productId) => (dispatch, getState) => {
    axios
      .delete(`${BASE_URL}/products/${productId}`)
      .then((res) => {
        dispatch(removeProductAction(productId));
      })
      .catch((err) => {
        toast.error(
          "Products datası çekilirken bir hata ile karşılaşıldır! " +
            err.message
        );
      });
  };
