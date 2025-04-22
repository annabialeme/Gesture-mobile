import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Ionicons } from "@expo/vector-icons";
import AnnaNavigator from "./AnnaNavigator";
import LemeNavigator from "./LemeNavigator";

const Tab = createBottomTabNavigator();

export default function TabNavigator() {
  return (
    <Tab.Navigator
      initialRouteName="Home"
      screenOptions={{
        headerShown: true,
        headerTitle: "Maxton Hall",
        headerStyle: {
          backgroundColor: "lightblue",
          height: 100,
        },
        headerTintColor: "black",
        headerTitleStyle: {
          fontSize: 40,
        },
        tabBarShowLabel: true,
        tabBarStyle: {
          backgroundColor: "rgba(255, 255, 255, 0.5)",
          borderRadius: 50,
          height: 100,
          position: "absolute",
          margin: 15,
        },
        tabBarLabelStyle: {
          fontSize: 20,
        },
        tabBarIconStyle: {
          marginTop: 15,
          marginBottom: 5,
        },
        tabBarActiveTintColor: "black",
        tabBarInactiveTintColor: "black",
      }}
    >
      <Tab.Screen
        name="Home"
        component={AnnaNavigator}
        options={{
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="rocket" color={color} size={size} />
          ),
        }}
      />

      <Tab.Screen
        name="Nós"
        component={LemeNavigator}
        options={{
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="dice" color={color} size={size} />
          ),
        }}
      />
    </Tab.Navigator>
  );
}