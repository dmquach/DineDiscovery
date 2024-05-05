import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import { BrowserRouter } from "react-router-dom";
import configureStore from './store/store';
// import { createUser } from './store/user.js';
import csrfFetch, { restoreCSRF } from "./store/csrf";
// import { loginUser, logoutUser } from './store/session.js';
import App from './App';
import './index.css';

  const store = configureStore();

    // Testing Purposes Only
    // window.store = store;
    // window.receiveTeaInfo = receiveTeaInfo;
    // window.receiveTeas = receiveTeas;
    // window.updateTea = updateTea;
    // window.removeTea = removeTea;
    // window.createUser = createUser;
    // window.loginUser = loginUser;
    // window.logoutUser = logoutUser;
    //
  if (import.meta.env.MODE !== "production") {
    restoreCSRF();
    window.store = store;
    window.csrfFetch = csrfFetch;
  }

  ReactDOM.createRoot(document.getElementById('root')).render(
    <React.StrictMode>
      <Provider store={store}>
        <App />
      </Provider>
    </React.StrictMode>
  );

  if (
    sessionStorage.getItem("currentUser") === null ||
    sessionStorage.getItem("X-CSRF-Token") === null
  ) {
    store.dispatch(sessionActions.restoreSession()).then(renderApplication);
  } else {
    renderApplication();
  }
