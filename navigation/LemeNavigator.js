import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Leme from "../screens/Leme";
import Alves from "../screens/Alves";

const Stack = createNativeStackNavigator();

export default function LemeNavigator() {
    return (
        <Stack.Navigator initialRouteName="Leme" screenOptions={{ headerShown: false }}>
            <Stack.Screen name="Leme" component={Alves} />
            <Stack.Screen name="Alves" component={Leme} />
        </Stack.Navigator>
    );
}
