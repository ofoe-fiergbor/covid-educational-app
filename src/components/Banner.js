import React from "react";
import { StyleSheet, Text, View, ImageBackground } from "react-native";
import pic from '../img/six.jpg'


const Banner = () => {
  return (
    <View>
      {/* Banner Image */}
      <View>
        <ImageBackground source={pic} style={styles.image}>
          <View style={styles.overlay} />
        </ImageBackground>
        <Text style={styles.image_text}>Discover</Text>
      </View>
    </View>
  );
};

export default Banner;

const styles = StyleSheet.create({
    image: {
        width: 400,
        height: 200,
        alignSelf: "center",
        elevation: 20,
      },
});
