import React from "react";
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  ImageBackground,
} from "react-native";
import Swiper from "../components/Swiper/Swiper";
import bg from "../img/bg2.png";
import Carousel from 'pinar'

const welcome = ({ navigation }) => {
  return (
    <ImageBackground
      style={StyleSheet.absoluteFillObject}
      resizeMode="cover"
      source={bg}
    >
        <Swiper />
      <View>
        <TouchableOpacity onPress={() => navigation.navigate("login")}>
          <Text style={styles.button}>Get Started</Text>
        </TouchableOpacity>
      </View>
    </ImageBackground>
  );
};

export default welcome;

const styles = StyleSheet.create({
  button: {
    marginBottom: 70,
    alignSelf: "center",
    backgroundColor: "#fff",
    fontFamily: "Quicksand_700Bold",
    paddingHorizontal: 80,
    borderRadius: 5,
    paddingVertical: 13,
    fontSize: 18,
    color: "#0e0a8f",
  },
});
