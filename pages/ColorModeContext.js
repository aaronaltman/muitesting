import React, { useState, useMemo } from 'react';

export const ColorModeContext = React.createContext({ toggleColorMode: () => {} });

function ColorModeContextProvider({ children }) {
    const [mode, setMode] = useState('light');

    const colorMode = useMemo(
        () => ({
            toggleColorMode: () => {
                setMode((prevMode) => (prevMode === 'light' ? 'dark' : 'light'));
            },
        }),
        [],
    );

    return (
        <ColorModeContext.Provider value={colorMode}>
            {children}
        </ColorModeContext.Provider>
    );
}

export default ColorModeContextProvider;
