import React from "react";
import { Text, StyleSheet, View, Image } from "react-native";
import loginimage from "../img/log.png";
import blob3 from "../img/blob3.png";
import { TouchableOpacity } from "react-native-gesture-handler";
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

const SignBoarding = ({ navigation }) => {
  let [fontsLoaded, error] = useFonts({
    ExtraBold: OpenSans_700Bold,
    ExtraLight: OpenSans_300Light,
    SemiBold: OpenSans_600SemiBold,
  });
  if (!fontsLoaded) {
    return <AppLoading />;
  }
  return (
    <View style={styles.container}>
      <View
        style={{
          flexDirection: "row",
          paddingHorizontal: 30,
          paddingVertical: 20,
          justifyContent: "space-between",
          // backgroundColor: "#f0fafc",
          // elevation: 10,
          marginBottom: 10,
        }}
      >
        <Image source={loginimage} style={{ height: 300, width: 300 }} />
      </View>
      <View style={{ alignItems: "center", justifyContent: "center" }}>
        {/* <Image
            source={blob3}
            style={{ position: "absolute", left: 0, width: 190, height: 300 }}
          /> */}
        <Text
          style={{
            fontSize: 30,
            color: "#016a85",
            letterSpacing: 1,
            paddingBottom: 5,
            fontFamily: "SemiBold",
          }}
        >
          Register or Sign in
        </Text>
        <Text
          style={{
            fontSize: 15,
            color: "#9198a3",
            letterSpacing: 2,
            paddingBottom: 5,
            fontFamily: "ExtraLight",
          }}
        >
          Step 1
        </Text>
        <Text
          style={{
            fontSize: 15,
            color: "#9198a3",
            letterSpacing: 2,
            paddingBottom: 5,
            fontFamily: "ExtraLight",
          }}
        >
          Complete your profile in less
        </Text>
        <Text
          style={{
            fontSize: 15,
            color: "#9198a3",
            letterSpacing: 2,
            paddingBottom: 5,
            fontFamily: "ExtraLight",
          }}
        >
          than 2 minutes
        </Text>
        <View
          style={{
            justifyContent: "space-between",
            flexDirection: "row",
            marginTop: 50,
          }}
        >
          <View
            style={{
              height: 10,
              width: 20,
              backgroundColor: "skyblue",
              borderRadius: 50,
              marginRight: 20,
            }}
          ></View>
          <View
            style={{
              height: 10,
              width: 10,
              backgroundColor: "white",
              borderColor: "skyblue",
              borderWidth: 1,
              borderRadius: 50,
              marginRight: 20,
            }}
          ></View>
          <View
            style={{
              height: 10,
              width: 10,
              backgroundColor: "white",
              borderColor: "skyblue",
              borderWidth: 1,
              borderRadius: 50,
            }}
          ></View>
        </View>
      </View>
      <View
        style={{
          flexDirection: "row",
          justifyContent: "space-between",
          marginTop: 30,
        }}
      >
        <TouchableOpacity
          onPress={() => navigation.navigate("login")}
          style={{
            backgroundColor: "#dde2eb",
            paddingVertical: 15,
            paddingHorizontal: 35,
            borderTopRightRadius: 50,
            borderBottomRightRadius: 50,
            elevation: 10,
          }}
        >
          <Text
            style={{
              color: "grey",
              fontSize: 18,
              fontFamily: "SemiBold",
            }}
          >
            Skip
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => navigation.navigate("drawerboard")}
          style={{
            backgroundColor: "skyblue",
            paddingVertical: 15,
            paddingHorizontal: 35,
            borderTopLeftRadius: 50,
            borderBottomLeftRadius: 50,
            elevation: 10,
          }}
        >
          <Text
            style={{ color: "white", fontSize: 18, fontFamily: "SemiBold" }}
          >
            Next
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};
export default SignBoarding;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
});
