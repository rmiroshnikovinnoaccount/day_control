import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import "./index.css";
import { BrowserRouter } from "react-router-dom";
import { setupStore } from "./store/store";
import { Provider } from "react-redux";
import { createTheme, ThemeProvider } from "@mui/material";

declare module "@mui/material/styles" {
    interface Theme {
        appPalette: {
            container: string
            dark: string
        };
    }
    interface ThemeOptions {
        appPalette?: {
            container: string
            dark: string
        };
    }
}

const theme = createTheme({
    appPalette: {
        container: "#f3f6fd",
        dark: "#1f1c2e"
    }
});

const store = setupStore();

ReactDOM.render(
    <React.StrictMode>
        <ThemeProvider theme={ theme }>
            <Provider store={ store }>
                <BrowserRouter>
                    <App/>
                </BrowserRouter>
            </Provider>
        </ThemeProvider>
    </React.StrictMode>,
    document.getElementById("root")
);

