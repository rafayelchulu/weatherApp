import React from "react";
import ConfiProvider from "./config/ConfiProvider";
import LoadingScreen from "./screens/LoadingScreen";
import SplashScreen from "./screens/SplashScreen";
import TabNavigator from "./TabNavigator/TabNavigator";

import { createNativeStackNavigator } from "@react-navigation/native-stack";

const Stack = createNativeStackNavigator();

function App() {
  return (
    <ConfiProvider>
      <Stack.Navigator
        screenOptions={{
          headerShown: false,
        }}
      >
        <Stack.Screen name="Splash" component={SplashScreen} />
        {/* <Stack.Screen name="Loading" component={LoadingScreen} /> */}
        <Stack.Screen name="Tab" component={TabNavigator} />
      </Stack.Navigator>
    </ConfiProvider>
  );
}

export default App;
