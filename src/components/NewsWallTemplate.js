import React, { Component } from "react";
import {
  Text,
  StyleSheet,
  View,
  Image,
  Dimensions,
  TouchableWithoutFeedback,
} from "react-native";
import ButtonOne from "./Buttons";
import { Ionicons } from "@expo/vector-icons";
import { TouchableOpacity } from "react-native-gesture-handler";

const { width, height } = Dimensions.get("window");
export default class NewsWallTemplate extends Component {
  render() {
    return (
      <View style={styles.container}>
        {/* News List View */}
        <TouchableWithoutFeedback onPress={() => alert("======>>>Linked")}>
          <View
            style={{
              width: width - 30,
              height: 200,
              backgroundColor: "#fff",
              marginBottom: 15,
              alignSelf: "center",
              borderRadius: 15,
              elevation: 20,
            }}
          >
            <Image
              source={{ uri: this.props.image }}
              style={[StyleSheet.absoluteFill, { borderRadius: 15 }]}
            />
            <View style={styles.gradient}>
              <Text
                numberOfLines={2}
                style={{
                  color: "#fff",
                  fontSize: 18,
                  position: "absolute",
                  bottom: 0,
                  padding: 10,
                  letterSpacing: 1,
                  fontWeight: "bold",
                }}
              >
                {this.props.title}
              </Text>

              <Ionicons
              onPress={() => alert("<<<<<<<<<<<Sharing>>>>>>>>>>>>")}
                name="md-share-alt"
                size={25}
                color="#fff"
                style={{
                  position: "absolute",
                  top: 0,
                  right: 0,
                  padding: 10,
                }}
              />
            </View>
          </View>
        </TouchableWithoutFeedback>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#e0e0e0",
    flex: 1,
  },
  gradient: {
    width: "100%",
    height: "100%",
    backgroundColor: "#000",
    opacity: 0.7,
    borderRadius: 15,
  },
});
