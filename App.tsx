import React from "react";

import { ColorModeContext } from "./src/contexts/ColorModeContext";
import { AuthContextProvider } from "./src/contexts/AuthContext";
import { MyPlantsContextProvider } from "./src/contexts/MyPlantsContext";
import { DiscoverContextProvider } from "./src/contexts/DiscoverContext";

import { useFonts } from "expo-font";
import {
  Inter_400Regular,
  Inter_500Medium,
  Inter_700Bold,
} from "@expo-google-fonts/inter";

import AppLoading from "expo-app-loading";

import { Routes } from "./src/routes";

import { LogBox } from "react-native";
import { GestureHandlerRootView } from "react-native-gesture-handler";
LogBox.ignoreLogs(["Setting a timer"]);

export default function App() {
  const [fontsLoaded] = useFonts({
    Inter_400Regular,
    Inter_500Medium,
    Inter_700Bold,
  });

  if (!fontsLoaded) {
    return <AppLoading />;
  }

  return (
    <ColorModeContext>
      <AuthContextProvider>
        <MyPlantsContextProvider>
          <DiscoverContextProvider>
            <GestureHandlerRootView style={{ flex: 1 }}>
              <Routes />
            </GestureHandlerRootView>
          </DiscoverContextProvider>
        </MyPlantsContextProvider>
      </AuthContextProvider>
    </ColorModeContext>
  );
}
