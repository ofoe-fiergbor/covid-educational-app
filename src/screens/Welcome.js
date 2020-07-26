import React from "react";
import { StyleSheet, Text, View, TouchableOpacity } from "react-native";

const welcome = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Text>Welcome Screen</Text>
      <View style={styles.btnContainer}>
        <TouchableOpacity onPress={() => navigation.navigate("register")}>
          <Text>Register</Text>
        </TouchableOpacity>

        <TouchableOpacity onPress={() => navigation.navigate("login")}>
          <Text>Login</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default welcome;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  btnContainer: {
    flexDirection: "row",
    marginVertical: 30,
    width: 150,
    justifyContent: "space-between",
  },
});
