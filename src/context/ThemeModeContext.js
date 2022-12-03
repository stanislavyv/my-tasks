import React, { useContext, useState, useMemo } from 'react';
import { createTheme, ThemeProvider } from '@mui/material';

const ThemeModeContext = React.createContext('');

const ThemeModeProvider = ({ children }) => {
    const [mode, setMode] = useState('light');

    const toggleThemeMode = () => {
        setMode((prev) => (prev === 'light' ? 'dark' : 'light'));
    };

    const value = useMemo(() => ({ mode, toggleThemeMode }));

    const theme = useMemo(
        () =>
            createTheme({
                palette: {
                    mode,
                    primary: {
                        main: mode === 'dark' ? '#45215e' : '#632F87',
                        hover: mode === 'dark' ? '#6e3597' : '#8a42bd',
                    },
                    secondary: {
                        main: '#fff',
                    },
                },
            }),
        [mode]
    );

    return (
        <ThemeModeContext.Provider value={value}>
            <ThemeProvider theme={theme}>{children}</ThemeProvider>
        </ThemeModeContext.Provider>
    );
};

export const useThemeMode = () => useContext(ThemeModeContext);

export default ThemeModeProvider;
