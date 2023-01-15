import React, { createContext } from "react";
import { NavigationContainer } from "@react-navigation/native";
export const Provider = createContext([]);

function ConfiProvider({ children }) {
  return (
    <Provider.Provider>
      <NavigationContainer>{children}</NavigationContainer>
    </Provider.Provider>
  );
}

export default ConfiProvider;
