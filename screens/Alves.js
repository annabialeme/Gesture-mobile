import React from "react";
import { View, Image, TouchableOpacity, StyleSheet } from "react-native";
import { useNavigation } from "@react-navigation/native";

export default function Anna() {
  const navigation = useNavigation();
  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={() => navigation.navigate("Leme")}>
        <Image
          style={styles.image}
          source={{
            uri: "https://www.cnnbrasil.com.br/wp-content/uploads/sites/12/2024/06/maxton-hall-2.jpg?w=420&h=240&crop=1&quality=85",
          }}
        />
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "lightpink",
  },
  image: {
    width: 300,
    height: 300,
    borderRadius: 150,
  },
});