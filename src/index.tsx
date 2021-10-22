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

const theme = createTheme({
    appPalette: {
        container: "#f3f6fd",
        mainColor: "#1f1c2e",
        contentSection: "#fff"
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

