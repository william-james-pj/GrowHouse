import React from "react";

import {
  createStackNavigator,
  StackNavigationOptions,
} from "@react-navigation/stack";

import { Discover } from "../../screens/Discover";

import { DiscoverParamList } from "../../@types/types";

const Stack = createStackNavigator<DiscoverParamList>();

const screenOptions: StackNavigationOptions = {
  cardStyle: {
    backgroundColor: "transparent",
  },
};

export function DiscoverStackNavigator() {
  return (
    <Stack.Navigator
      defaultScreenOptions={{
        headerShown: false,
      }}
      screenOptions={screenOptions}
    >
      <Stack.Screen
        options={{ headerShown: false }}
        name="Discover"
        component={Discover}
      />
    </Stack.Navigator>
  );
}
