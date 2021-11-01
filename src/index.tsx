import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import "./index.css";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import { store } from "./store/store";
import ColorModeContextProvider from "./ColorModeContextProvider";

declare module "@mui/material/styles" {
    interface Theme {
        appPalette: {
            container: string
            mainColor: string
            contentSection: string
        };
    }

    interface ThemeOptions {
        appPalette?: {
            container: string
            mainColor: string
            contentSection: string
        };
    }
}

ReactDOM.render(
    <React.StrictMode>
        <Provider store={ store }>
            <BrowserRouter>
                <ColorModeContextProvider>
                    <App/>
                </ColorModeContextProvider>
            </BrowserRouter>
        </Provider>
    </React.StrictMode>,
    document.getElementById("root")
);

