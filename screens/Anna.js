import React from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import { useNavigation } from "@react-navigation/native";

export default function Marcello() {
    const navigation = useNavigation();

    return (
        <View style={styles.container}>
            <TouchableOpacity onPress={() => navigation.navigate("Leme")}>
                <Text style={styles.text}>Maxton Hall - O Mundo Entre Nós</Text>
            </TouchableOpacity>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "lightyellow",
    },
    text: {
        fontSize: 36,
        textDecorationLine: "underline",
    },
});