import { StrictMode } from "react";
import { createRoot } from "react-dom/client";

import { StoreProvider } from "./app/storeProvider";
import { App } from "./components/App";
import "./styles/reset.scss";
import "./styles/fonts.scss";
import "./styles/main.scss";
import "./styles/vars.scss";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <StoreProvider>
      <App />
    </StoreProvider>
  </StrictMode>,
);
