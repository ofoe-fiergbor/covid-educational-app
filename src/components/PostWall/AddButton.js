import React, { Component } from "react";
import { TouchableOpacity, StyleSheet } from "react-native";
import { Entypo } from "@expo/vector-icons";
import { connect } from "react-redux";
import { openModal } from "../../Redux/Action/modalAction";

class AddButton extends Component {
  render() {
    return (
      <TouchableOpacity
        style={styles.addButton}
        onPress={() => this.props.openModal()}
      >
        <Entypo
          name="add-to-list"
          size={27}
          color="black"
          style={styles.icon}
        />
      </TouchableOpacity>
    );
  }
}
const styles = StyleSheet.create({
  addButton: {
    width: 50,
    height: 50,
    backgroundColor: "skyblue",
    borderRadius: 50,
    position: "absolute",
    bottom: 20,
    right: 30,
    justifyContent: "center",
    alignItems: "center",
    elevation: 29
  },
});

export default connect(null, { openModal })(AddButton);
