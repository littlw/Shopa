import React from 'react';
import {createRoot} from 'react-dom/client';
import './index.css';
import {
    createBrowserRouter,
    createRoutesFromElements,
    Route,
    RouterProvider,
  } from "react-router-dom";
import App from './containers/App/App';
import reportWebVitals from './reportWebVitals';
import { Provider } from 'react-redux';
import { legacy_createStore as createStore } from 'redux';
import { applyMiddleware, combineReducers } from 'redux';
import { createLogger } from 'redux-logger';
import thunkMiddleware from 'redux-thunk';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'semantic-ui-css/semantic.min.css';
import 'tachyons';
import Admin from './containers/Admin/Admin';
import Singlegood from './components/Singlegood/Singlegood';
import Shop from './components/Shop/Shop';
import Login from './components/Login/Login';
import Register from './components/Register/Register';

import { searchGoods, requestGoods, adminSignIn, loadUser } from './Reducers/reducers';

const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<App />}>
        <Route path="/admin" element={<Admin />} />
        <Route path="/goods/:id" element={<Singlegood />} />
        <Route path="/about" element={<Singlegood />} />
        <Route path="/shop" element={<Shop />} />
        <Route path="/signin" element={<Login />} />
        <Route path="/register" element={<Register />} />
        {/* ... etc. */}
      </Route>
    )
  );

  const logger = createLogger()

const rootReducer = combineReducers({ searchGoods, requestGoods, adminSignIn, loadUser})
const store = createStore(rootReducer, applyMiddleware(thunkMiddleware, logger));


  
  createRoot(document.getElementById("root")).render(
      <Provider store={store} >
      <RouterProvider router={router} />
      </Provider>
  );

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
