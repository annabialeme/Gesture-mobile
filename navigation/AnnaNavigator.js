import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Anna from "../screens/Anna";
import Beatriz from "../screens/Beatriz";

const Stack = createNativeStackNavigator();

export default function AnnaNavigator() {
    return (
        <Stack.Navigator initialRouteName="Anna" screenOptions={{ headerShown: false }}>
            <Stack.Screen name="Anna" component={Anna} />
            <Stack.Screen name="Beatriz" component={Beatriz} />
        </Stack.Navigator>
    );
}