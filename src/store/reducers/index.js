import { combineReducers } from "redux";
import { siteReducer } from "./siteReducer";
import { productReducer } from "./productReducer";

export const reducers = combineReducers({
  site: siteReducer,
  products: productReducer,
});
