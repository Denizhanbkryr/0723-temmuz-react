import { legacy_createStore as createStore } from "redux";
import { reducers } from "./reducers";
// eski versiyonlar için -> import { createStore } from 'redux';

export const store = createStore(reducers);
