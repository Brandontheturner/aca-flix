import { createStore, applyMiddleware } from "redux";
import state from "./state";
import reducers from "./reducers";
import thunk from "redux-thunk";

const store = createStore(reducers, state, applyMiddleware);

export default store;
