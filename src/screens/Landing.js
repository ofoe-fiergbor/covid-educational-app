import React from "react";
import { StyleSheet, Text, View, TouchableOpacity, Image } from "react-native";
import landing from "../img/landing.png";

const Landing = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Image
        source={landing}
        style={{
          height: 270,
          width: 330,
          alignSelf: "center",
          marginVertical: 20,
        }}
      />
      <View style={{ alignItems: "center" }}>
        <Text
          style={{
            fontSize: 30,
            fontWeight: "bold",
            color: "white",
            backgroundColor: "skyblue",
            paddingHorizontal: 15,
            paddingVertical: 5,
            borderRadius: 100,
          }}
        >
          C
        </Text>
        <Text
          style={{
            fontSize: 30,
            fontWeight: "bold",
            color: "#016a85",
            marginVertical: 3,
          }}
        >
          Covid 19 Edu App
        </Text>
        <Text
          style={{
            fontSize: 15,
            color: "#9198a3",
            letterSpacing: 1,
            paddingBottom: 5,
          }}
        >
          An Educational app that provides{" "}
        </Text>
        <Text
          style={{
            fontSize: 15,
            color: "#9198a3",
            letterSpacing: 1,
            paddingBottom: 5,
          }}
        >
          insight into the{" "}
        </Text>
        <Text
          style={{
            fontSize: 15,
            color: "#9198a3",
            letterSpacing: 1,
            paddingBottom: 5,
          }}
        >
          Coronavirus pandemic
        </Text>
      </View>
      <TouchableOpacity
        style={styles.btn}
        onPress={() => navigation.navigate("signboard")}
      >
        <Text style={{ fontSize: 25, fontWeight: "bold", color: "#fff" }}>
          Get Started
        </Text>
      </TouchableOpacity>
    </View>
  );
};

export default Landing;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  btn: {
    backgroundColor: "skyblue",
    width: "100%",
    justifyContent: "center",
    alignItems: "center",
    height: 80,
    position: "absolute",
    bottom: 0,
    borderTopLeftRadius: 50,
    borderTopRightRadius: 50,
  },
});
