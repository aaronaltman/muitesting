import React, { useState, useMemo } from 'react';

export const ColorModeContext = React.createContext({ toggleColorMode: () => {}, mode: 'light' });

function ColorModeContextProvider({ children }) {
    const [mode, setMode] = useState('light');

    const colorMode = useMemo(
        () => ({
            mode,
            toggleColorMode: () => {
                setMode((prevMode) => (prevMode === 'light' ? 'dark' : 'light'));
            },
        }),
        [mode],
    );

    return (
        <ColorModeContext.Provider value={colorMode}>
            {children}
        </ColorModeContext.Provider>
    );
}

export default ColorModeContextProvider;
