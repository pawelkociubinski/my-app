import React from "react";
import { render } from "react-dom";
import { Provider } from "react-redux";
import { ConnectedRouter } from "connected-react-router/immutable";
import { Route, Switch } from "react-router-dom";
import invariant from "invariant";

import store from "./config/store";
import { history } from "./config/history";
import registerServiceWorker from "./registerServiceWorker";

import App from "./containers/App";
import Miss from "./Miss";
// import SignIn from "./containers/SignIn";
// import SignUp from "./containers/SignUp";

const NODE = document.getElementById("root");

const PROGRAM = (
  <Provider store={store}>
    <ConnectedRouter history={history}>
      <Switch>
        <Route exact path="/" component={App} />
        <Route component={Miss} />
      </Switch>
    </ConnectedRouter>
  </Provider>
);

invariant(NODE, "HTML element dosn't exist");

render(PROGRAM, NODE);

registerServiceWorker();



// south north east west

// var myarray=new Array(3)
// for (i=0; i <3; i++)
//     myarray[i]=new Array(3)

// const cols = 10;
// const rows = 10;

// const make2Darray = (cols, rows) => {
//   const arr = new Array(cols);
//   for (let i = 0; i < arr.length; i++) {
//     arr[i] = new Array(rows);
//   }
//   return arr;
// };

// make2Darray(10, 10);
