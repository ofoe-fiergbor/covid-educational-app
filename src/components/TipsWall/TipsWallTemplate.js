import React, { Component } from "react";
import {
  StyleSheet,
  Text,
  View,
  TouchableWithoutFeedback,
  Dimensions,
  Image,
  Linking,
} from "react-native";

const { width, height } = Dimensions.get("window");

class TipsWallTemplate extends Component {
  render() {
    const { navigation } = this.props;
    return (
      <View style={styles.container}>
        {/* News List View */}
        <TouchableWithoutFeedback
          onPress={() => {
            navigation.navigate("TipsWallDetail", {
              title: this.props.title,
              image: this.props.image,
              details: this.props.details,
              link: this.props.link,
            });
          }}
        >
          <View
            style={{
              width: width - 10,
              height: 180,
              alignSelf: "center",
              borderRadius: 20,
              marginVertical: 10,
            }}
          >
            <Image
              source={this.props.image}
              style={[
                StyleSheet.absoluteFill,
                { borderRadius: 20, width: width - 10, height: 180 },
              ]}
            />
            
            <View style={styles.gradient}>
              <Text
                style={{
                  color: "#fff",
                  fontSize: 25,
                  position: "absolute",
                  padding: 10,
                  letterSpacing: 1,
                  fontWeight: "bold",
                  alignSelf: "center",
                  top: 50,
                }}
              >
                {this.props.title}
              </Text>
            </View>
          </View>
        </TouchableWithoutFeedback>
      </View>
    );
  }
}

export default TipsWallTemplate;
const styles = StyleSheet.create({
  container: {
    backgroundColor: "#e0e0e0",
    flex: 1,
  },
  gradient: {
    width: "100%",
    height: "100%",
    backgroundColor: "#000",
    opacity: 0.6,
    borderRadius: 20,
  },
});
