import React from "react";
import { StyleSheet, Text, View, TouchableOpacity, Image } from "react-native";
import landing from "../img/landing.png";
import { AppLoading } from "expo";
import {
  useFonts,
  OpenSans_300Light,
  OpenSans_300Light_Italic,
  OpenSans_400Regular,
  OpenSans_400Regular_Italic,
  OpenSans_600SemiBold,
  OpenSans_600SemiBold_Italic,
  OpenSans_700Bold,
  OpenSans_700Bold_Italic,
  OpenSans_800ExtraBold,
  OpenSans_800ExtraBold_Italic,
} from "@expo-google-fonts/open-sans";

const Landing = ({ navigation }) => {
  let [fontsLoaded, error] = useFonts({
    ExtraBold:OpenSans_700Bold,
    ExtraLight:OpenSans_300Light,
    SemiBold: OpenSans_600SemiBold
  });
  if (!fontsLoaded) {
    return <AppLoading />;
  }

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
            color: "#016a85",
            marginVertical: 3,
            fontFamily: "SemiBold",
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
            fontFamily: 'ExtraLight'
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
            fontFamily: 'ExtraLight'
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
            fontFamily: 'ExtraLight'
          }}
        >
          Coronavirus pandemic
        </Text>
      </View>
      <TouchableOpacity
        style={styles.btn}
        onPress={() => navigation.navigate("signboard")}
      >
        <Text style={{ fontSize: 25,  color: "#fff",fontFamily: "ExtraLight" }}>
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
