import React from "react";

import {
  createStackNavigator,
  StackNavigationOptions,
} from "@react-navigation/stack";

import { MyPlants } from "../../screens/MyPlants";

import { MyPlantStackParamList } from "../../@types/types";
import { QRCodeRead } from "../../screens/QRCodeRead";

const Stack = createStackNavigator<MyPlantStackParamList>();

const screenOptions: StackNavigationOptions = {
  cardStyle: {
    backgroundColor: "transparent",
  },
};

export function MyPlantsStackNavigator() {
  return (
    <Stack.Navigator
      defaultScreenOptions={{
        headerShown: false,
      }}
      screenOptions={screenOptions}
    >
      <Stack.Screen
        options={{ headerShown: false }}
        name="MyPlants"
        component={MyPlants}
      />
      <Stack.Screen
        options={{ headerShown: false }}
        name="QRCodeRead"
        component={QRCodeRead}
      />
    </Stack.Navigator>
  );
}
