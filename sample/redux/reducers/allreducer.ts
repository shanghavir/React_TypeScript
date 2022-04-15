//combine all reducers
import { combineReducers } from "redux";
import { productReducer, selectedProductsReducer } from "./productreducer";

const reducers = combineReducers({
  allProducts: productReducer,
  product: selectedProductsReducer,
});

export default reducers;
