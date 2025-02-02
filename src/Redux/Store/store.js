import { applyMiddleware, createStore } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import thunk from "redux-thunk";
import Reducer from "../Reducer/rootreducer";

let store = createStore(Reducer, composeWithDevTools(applyMiddleware(thunk)));

export default store;
