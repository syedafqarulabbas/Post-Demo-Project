import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import reportWebVitals from './reportWebVitals';
import { Provider } from 'react-redux';
import store from './Redux/store';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Post from './Component/Post';
import Login from './Component/Login&Signup/Login';
import Signup from './Component/Login&Signup/Signup';

const router = createBrowserRouter([
  {
    path: "/post",
    Component: Post, 
  },
  {
    path: "/",
    Component: Login, 
  },
  {
    path: "/signup",
    Component: Signup, 
  },
]);


ReactDOM.render(
  <Provider store={store}>
    <React.StrictMode>
      <RouterProvider router={router} />
    </React.StrictMode>
  </Provider>,
  document.getElementById('root')
);
reportWebVitals();
