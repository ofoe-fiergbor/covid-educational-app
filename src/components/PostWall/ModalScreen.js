import React, { Component } from "react";
import { Text, StyleSheet, View, Modal } from "react-native";
import { connect } from "react-redux";
import { closeModal } from "../../Redux/Action/modalAction";
import { AntDesign } from "@expo/vector-icons";

class ModalScreen extends Component {
  render() {
    var { isModalOpen } = this.props;
    return (
      <Modal visible={isModalOpen} animationType="slide">
        <View style={styles.modalContent}>
          <AntDesign
            name="closecircleo"
            size={30}
            color="#e4f5ff"
            style={{ alignSelf: "center", marginTop: 30 }}
            onPress={() => this.props.closeModal()}
          />
          <View style={styles.modalBackground}></View>
        </View>
      </Modal>
    );
  }
}

const mapStateToProps = (state) => {
  console.log(state.isModalOpen);
  return {
    isModalOpen: state.isModalOpen,
  };
};
export default connect(mapStateToProps, { closeModal })(ModalScreen);

const styles = StyleSheet.create({
  modalContent: {
    flex: 1,
    backgroundColor: "#326da8",
  },
  modalBackground: {
    marginTop: 20,
    backgroundColor: "#e4f5ff",
    paddingHorizontal: 30,
    flex: 1,
    borderTopRightRadius: 40,
    borderTopLeftRadius: 40,
  },
});
