import React, { FC } from "react";
import { createTheme, ThemeProvider } from "@mui/material";

type ColorModeContextType = {
    toggleColorMode: () => void
    mode: "dark" | "light"
}

export const ColorModeContext = React.createContext<ColorModeContextType>({
    toggleColorMode: () => {},
    mode: "light"
});

const ColorModeContextProvider: FC = ({ children }) => {

    const [mode, setMode] = React.useState<"light" | "dark">("light");

    const colorMode = React.useMemo(
        () => ({
            toggleColorMode: () => {
                setMode(prevMode => (prevMode === "light" ? "dark" : "light"));
            },
            mode
        }),
        [mode]
    );

    const theme = React.useMemo(
        () =>
            createTheme({
                palette: {
                    mode,
                    background: {
                        paper: mode === "light" ? "#fff" : "#1f2937"
                    }
                },
                appPalette: {
                    container: mode === "light" ? "#f3f6fd" : "#111827",
                    mainColor: mode === "light" ? "#1f1c2e" : "#fff",
                    contentSection: mode === "light" ? "#fff" : "#1f2937"
                }
            }),
        [mode]
    );

    return (
        <ColorModeContext.Provider value={ colorMode }>
            <ThemeProvider theme={ theme }>{ children }</ThemeProvider>
        </ColorModeContext.Provider>
    );
};

export default ColorModeContextProvider;

export const useColorMode = () => React.useContext(ColorModeContext);