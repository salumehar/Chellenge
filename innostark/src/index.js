// import React from "react";
// import ReactDOM from "react-dom";
// import App from "./App";
// import "./sass/main.scss";
// import { Provider } from "react-redux";
// import { BrowserRouter as Router } from "react-router-dom";
// import "react-toastify/dist/ReactToastify.css";
// import {store} from './redux/ListItem'

// ReactDOM.render(
//   <Router>
//     <Provider store={store}>
//       <App />
//     </Provider>
//   </Router>,
//   document.getElementById("root")
// );

import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import "./sass/main.scss";
import { Provider } from "react-redux";
import { BrowserRouter as Router } from "react-router-dom";
import "react-toastify/dist/ReactToastify.css";
import { PersistGate } from "redux-persist/integration/react";
import { store, persistor } from "./redux/LocalStorage";

ReactDOM.render(
  <Router>
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <App />
      </PersistGate>
    </Provider>
  </Router>,
  document.getElementById("root")
);
