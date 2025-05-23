import React from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import { useNavigation } from "@react-navigation/native";

export default function Pereira() {
        const navigation = useNavigation();
        
    return (
        <View style={styles.container}>
            <TouchableOpacity onPress={() => navigation.navigate("Carboni")}>
                <Text style={styles.text}>Rick Dalton</Text>
            </TouchableOpacity>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "lightblue",
    },
    text: {
        fontSize: 36,
        textDecorationLine: "underline",
    },
});