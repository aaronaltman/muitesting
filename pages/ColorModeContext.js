import React from 'react';

// Create and export the context
export const ColorModeContext = React.createContext({ toggleColorMode: () => {} });

function ColorModeContextProvider({ children }) {
    // You might want to add state here to manage the color mode

    return (
        <ColorModeContext.Provider value={{ toggleColorMode: () => {} }}>
            {children}
        </ColorModeContext.Provider>
    );
}

export default ColorModeContextProvider;

