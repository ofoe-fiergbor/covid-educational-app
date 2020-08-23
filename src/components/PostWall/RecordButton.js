import React, { Component } from "react";
import { Text, StyleSheet, View, TouchableOpacity } from "react-native";
import { Entypo } from "@expo/vector-icons";

export default class RecordButton extends Component {
  render() {
    return (
      <TouchableOpacity
        style={styles.recordBtn}
        onPress={() => this.props.navigation.navigate("camera")}
      >
        <Entypo
          name="video-camera"
          size={23}
          color="white"
          style={styles.icon}
        />
      </TouchableOpacity>
    );
  }
}

const styles = StyleSheet.create({
  recordBtn: {
    width: 50,
    height: 50,
    backgroundColor: "red",
    borderRadius: 50,
    position: "absolute",
    bottom: 80,
    right: 15,
    justifyContent: "center",
    alignItems: "center",
    elevation: 29,
  },
});
