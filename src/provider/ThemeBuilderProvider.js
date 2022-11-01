import React, { useState, useContext, createContext } from "react";

//the react context
const themeBuilderContext = createContext();

/**
 * returns a higher level ThemeProvider Component
 * @param {*} props
 * @returns themeContext.Provider
 */
export const ThemeProvider = ({ children, config }) => {
  config = useProvideThemeBuilder(config);

  return (
    <themeBuilderContext.Provider value={config}>
      {children}
    </themeBuilderContext.Provider>
  );
};

/**
 * Returns the context's theme object
 * @returns theme
 */
export const useThemeBuilder = () => {
  return useContext(themeBuilderContext);
};

/**
 * Creates a theme object for the context
 * @param {*} customTheme
 * @returns
 */
const useProvideThemeBuilder = (conf) => {
  const [config, setConfig] = useState(conf);

  const switchConfig = (conf) => {
    setConfig(conf);
  };

  return {
    config,
    switchConfig,
  };
};
