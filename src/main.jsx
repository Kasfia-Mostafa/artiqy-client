import * as React from "react";
import * as ReactDOM from "react-dom/client";
import {
  RouterProvider,
} from "react-router-dom";
import "./index.css";
import { router } from "./Router/route";
import AuthProviders from "./Utility/Providers/AuthProviders";
import { Provider } from "react-redux";
import { store } from "./Redux/features/store";


ReactDOM.createRoot(document.getElementById("root")).render(
  <AuthProviders>
     <Provider store={store}>
    <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
    </Provider>
  </AuthProviders>
);