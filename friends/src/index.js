import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router } from 'react-router-dom';
import "./index.css";
import App from "./App";
import { createStore, applyMiddleware } from "redux";
import { Provider } from "react-redux";
import thunk from "redux-thunk";
import friendsReducer from "./reducers/friendsReducer";

const store = createStore(
    friendsReducer, 
    applyMiddleware(thunk));

ReactDOM.render(
    <Router>
  <Provider store={store}>
    <App />
  </Provider>
  </Router>,
  document.getElementById("root")
);

