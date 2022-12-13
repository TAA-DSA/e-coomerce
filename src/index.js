import React from "react";
import { createRoot } from "react-dom/client";
import "./index.scss";
import App from "./App";

import { BrowserRouter } from "react-router-dom";
import { ProductsProvider } from "./contexts/products.context";
import { UserProvider } from "./contexts/user.context";

const container = document.getElementById("root");
const root = createRoot(container);
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <UserProvider>
        <ProductsProvider>
          <App />
        </ProductsProvider>
      </UserProvider>
    </BrowserRouter>
  </React.StrictMode>
);
