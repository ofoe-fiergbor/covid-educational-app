import React from "react";
import { Text, StyleSheet, View, Image } from "react-native";
import mobile from "../img/mobile.png";
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

const AllappsBoarding = ({ navigation }) => {
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
          marginHorizontal: 10,
          paddingVertical: 20,
          justifyContent: "space-between",
          marginBottom: 10,
          alignItems: "center",
        }}
      >
        <Image source={mobile} style={{ height: 300, width: 320 }} />
      </View>
      <View style={{ alignItems: "center", justifyContent: "center" }}>
        {/* <Image
            source={blob3}
            style={{ position: "absolute", left: 0, width: 190, height: 300 }}
          /> */}
        <Text
          style={{
            fontSize: 30,
            fontFamily: "SemiBold",
            color: "#016a85",
            letterSpacing: 1,
            paddingBottom: 5,
          }}
        >
          Main App
        </Text>
        <Text
          style={{
            fontSize: 15,
            fontFamily: "ExtraLight",
            color: "#9198a3",
            letterSpacing: 2,
            paddingBottom: 5,
          }}
        >
          Step 3
        </Text>
        <Text
          style={{
            fontSize: 15,
            fontFamily: "ExtraLight",
            color: "#9198a3",
            letterSpacing: 2,
            paddingBottom: 5,
          }}
        >
          Browse through the app to access the
        </Text>
        <Text
          style={{
            fontSize: 15,
            fontFamily: "ExtraLight",
            color: "#9198a3",
            letterSpacing: 2,
            paddingBottom: 5,
          }}
        >
          news, post, tips and tracker options
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
              marginRight: 20,
            }}
          ></View>
          <View
            style={{
              height: 10,
              width: 20,
              backgroundColor: "skyblue",
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
          onPress={() => navigation.navigate("drawerboard")}
          style={{
            backgroundColor: "#dde2eb",
            paddingVertical: 15,
            paddingHorizontal: 35,
            borderTopRightRadius: 50,
            borderBottomRightRadius: 50,
            elevation: 10,
          }}
        >
          <Text style={{ color: "grey", fontFamily: "SemiBold", fontSize: 18 }}>
            Back
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => navigation.navigate("login")}
          style={{
            backgroundColor: "skyblue",
            paddingVertical: 15,
            paddingHorizontal: 35,
            borderTopLeftRadius: 50,
            borderBottomLeftRadius: 50,
            elevation: 10,
          }}
        >
          <Text style={{ color: "white", fontFamily: "SemiBold", fontSize: 18 }}>
            Start
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};
export default AllappsBoarding;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
});
