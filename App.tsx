import React from "react";

import { GestureHandlerRootView } from "react-native-gesture-handler";

import { ColorModeContext } from "./src/contexts/ColorModeContext";
import { AuthContextProvider } from "./src/contexts/AuthContext";
import { MyPlantsContextProvider } from "./src/contexts/MyPlantsContext";
import { DiscoverContextProvider } from "./src/contexts/DiscoverContext";
import { DiscoverSelectedContextProvider } from "./src/contexts/DiscoverSelectedContext";
import { OpenModalAddProvider } from "./src/contexts/OpenModalAddContext";

import { useFonts } from "expo-font";
import {
  Inter_400Regular,
  Inter_500Medium,
  Inter_700Bold,
} from "@expo-google-fonts/inter";

import AppLoading from "expo-app-loading";

import { Routes } from "./src/routes";

import { LogBox } from "react-native";
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
            <DiscoverSelectedContextProvider>
              <OpenModalAddProvider>
                <GestureHandlerRootView style={{ flex: 1 }}>
                  <Routes />
                </GestureHandlerRootView>
              </OpenModalAddProvider>
            </DiscoverSelectedContextProvider>
          </DiscoverContextProvider>
        </MyPlantsContextProvider>
      </AuthContextProvider>
    </ColorModeContext>
  );
}
