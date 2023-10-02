import { applyMiddleware, legacy_createStore as createStore } from "redux";
import { reducers } from "./reducers";
import { myLogger } from "./middleware/myLogger";
import { yetkiDenetimi } from "./middleware/yetkiDenetimi";
import thunk from "redux-thunk";
// eski versiyonlar için -> import { createStore } from 'redux';

export const store = createStore(
  reducers,
  applyMiddleware(thunk, yetkiDenetimi, myLogger)
);
