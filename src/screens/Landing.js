import React from "react";
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Image,
  ImageBackground,
} from "react-native";
import image from "../img/background.png";
import covid from "../img/landing.png";

const Landing = ({ navigation }) => {
  return (
    <ImageBackground
      style={StyleSheet.absoluteFillObject}
      resizeMode="cover"
      source={image}
    >
      <View style={styles.container}>
        <View style={styles.headerContainer}>
          <Text style={styles.header}>Educov</Text>
          <Text style={styles.headerDescription}>
            A Covid-19 Educational App that provides insight into the pandemic.
          </Text>
        </View>
        <View>
          <Image source={covid} style={styles.image} />
        </View>
        <View>
          <TouchableOpacity onPress={() => navigation.navigate("welcome")}>
            <Text style={styles.button}>Get Started</Text>
          </TouchableOpacity>
        </View>
      </View>
    </ImageBackground>
  );
};

export default Landing;

const styles = StyleSheet.create({
  container: {
    marginHorizontal: 30,
  },
  headerContainer: {
    marginTop: 50,
  },
  header: {
    color: "#fff",
    fontFamily: "CormorantUpright_700Bold",
    fontSize: 50,
  },
  headerDescription: {
    color: "#aaa",
    fontSize: 18,
    fontFamily: "CormorantUpright_700Bold",
  },
  image: {
    alignSelf: "center",
    height: 320,
    width: 230,
    marginVertical: 50,
  },
  button: {
    alignSelf: "center",
    backgroundColor: "#fff",
    fontFamily: "Quicksand_700Bold",
    paddingHorizontal: 60,
    borderRadius: 5,
    paddingVertical: 13,
    fontSize: 18,
    color: "#0e0a8f",
  },
});
