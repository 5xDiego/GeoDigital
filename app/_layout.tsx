import React from "react";
import { Stack } from "expo-router";
import { Tabs } from "expo-router";
import { Text } from "react-native";

export default function HomeLayout() {
  return (
    <Stack 
      screenOptions={{
        headerStyle: {
          backgroundColor: "slateblue",
        },
        headerTintColor: "midnightblue",  
        headerTitleStyle: {
          fontWeight: "bold",
        },
      }}
    >
      <Stack.Screen
        name="index"
        options={{
          title: "GeoDigital",
        }}
      />
      <Stack.Screen
        name="qr_scanner"
        options={{
            title: "Camera", 
        }}
      />
      <Stack.Screen
        name="trophy_room"
        options={{
            title: "Trophy Room", 
        }}
      />
    </Stack>
  );
}