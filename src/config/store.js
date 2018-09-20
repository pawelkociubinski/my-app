import { applyMiddleware, createStore, compose } from "redux";
import createSagaMiddleware from "redux-saga";

import { routerMiddleware, connectRouter } from "connected-react-router/immutable"
import Immutable from "immutable";
import { composeWithDevTools } from "redux-devtools-extension";

import { history } from "./history";
import sagas from "./sagas";
import reducers from "./reducers";


const saga = createSagaMiddleware();
const router = routerMiddleware(history);
const initialState = Immutable.Map();

const composeEnhancers = process.env.NODE_ENV === "development" ? composeWithDevTools : compose;

const enhancers = applyMiddleware(router, saga);

export default createStore(
  connectRouter(history)(reducers),
  initialState,
  composeEnhancers(enhancers)
);

saga.run(sagas);
