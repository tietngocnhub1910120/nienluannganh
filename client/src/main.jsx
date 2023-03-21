import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import { persistor, store } from "./stores";
import { PersistGate } from "redux-persist/integration/react";
import { ChakraProvider } from "@chakra-ui/react";
import { createStandaloneToast } from "@chakra-ui/toast";
const { ToastContainer } = createStandaloneToast();
import "./index.css";
import App from "./App";

ReactDOM.createRoot(document.getElementById("root")).render(
  <Provider store={store}>
    <PersistGate loading={false} persistor={persistor}>
      <BrowserRouter>
        <ChakraProvider>
          <App />
          <ToastContainer />
        </ChakraProvider>
      </BrowserRouter>
    </PersistGate>
  </Provider>
);
