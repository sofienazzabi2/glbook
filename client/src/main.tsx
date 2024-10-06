import ErrorBoundary from "./components/ErrroBoundary";
import React from "react";
import ReactDOM from "react-dom";
import { SkeletonTheme } from "react-loading-skeleton";
import { QueryClient, QueryClientProvider } from "react-query";
import { ReactQueryDevtools } from "react-query/devtools";
import { Provider } from "react-redux";
import { store } from "./store/store";
import App from "./App";

import "./common/styles/tippyThemes.scss";
import "react-loading-skeleton/dist/skeleton.css";
import { BrowserRouter } from "react-router-dom";
import { SocketContextProvider } from "./socket/socketContext";
import "tippy.js/dist/tippy.css";
import "tippy.js/themes/translucent.css";
import "./index.scss";

const queryClient = new QueryClient();

ReactDOM.render(
  <React.StrictMode>
    <ErrorBoundary>
      <Provider store={store}>
        <QueryClientProvider client={queryClient}>
          <SocketContextProvider>
            <ReactQueryDevtools initialIsOpen={false} />
            <SkeletonTheme
              baseColor="#f2f0f5"
              highlightColor="#e7e6e8"
              borderRadius={10}
              duration={1}
            >
              <BrowserRouter>
                <App />
              </BrowserRouter>
            </SkeletonTheme>
          </SocketContextProvider>
        </QueryClientProvider>
      </Provider>
    </ErrorBoundary>
  </React.StrictMode>,
  document.getElementById("root")
);
