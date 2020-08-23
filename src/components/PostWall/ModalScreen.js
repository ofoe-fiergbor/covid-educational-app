import React, { Component } from "react";
import { Text, StyleSheet, View, Modal, ScrollView } from "react-native";
import { connect } from "react-redux";
import { closeModal } from "../../Redux/Action/modalAction";
import { AntDesign } from "@expo/vector-icons";
import PostInputForm from "./PostInputForm";

class ModalScreen extends Component {
  render() {
    var { isModalOpen } = this.props;
    return (
      <ScrollView>
        <Modal visible={isModalOpen} animationType="slide">
          <View style={styles.modalContent}>
            <AntDesign
              name="closecircleo"
              size={30}
              color="#e4f5ff"
              style={{ alignSelf: "center", marginTop: 30 }}
              onPress={() => this.props.closeModal()}
            />
            <View style={styles.modalBackground}>
              <PostInputForm />
            </View>
          </View>
        </Modal>
      </ScrollView>
    );
  }
}

const mapStateToProps = (state) => {
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
    backgroundColor: "#fff",
    // backgroundColor: "#e4f5ff",
    paddingHorizontal: 30,
    flex: 1,
    borderTopRightRadius: 40,
    borderTopLeftRadius: 40,
  },
});
