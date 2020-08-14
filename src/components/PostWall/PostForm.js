import React, { Component } from "react";
import {
  Text,
  View,
  TextInput,
  StyleSheet,
  TouchableOpacity,
} from "react-native";
import { Formik } from "formik";
import { connect } from "react-redux";
import {closeModal} from "../../Redux/Action/modalAction";
import {addNewPost} from "../../Redux/Action/action";

class PostForm extends Component {
  render() {
    return (
      <Formik
        initialValues={{
          date: "",
          post: "",
          id: Math.random().toString(36).substr(2, 5),
        }}
        onSubmit={(newPost, action) => {
          if(newPost.post <=0){
            alert('invalid entry')
          }else{
            this.props.addNewPost(newPost);
            this.props.closeModal();
          }
        }}
      >
        {(formikProps) => (
          <View>
            <TextInput
              style={styles.inputForm}
              multiline={true}
              numberOfLines={15}
              placeholder="Share your story..."
              onChangeText={formikProps.handleChange("post")}
              value={formikProps.values.post}
            />

            <TouchableOpacity
              style={styles.postButton}
              onPress={formikProps.handleSubmit}
            >
              <Text style={{ fontSize: 20, color: "#fff" }}>Post</Text>
            </TouchableOpacity>
          </View>
        )}
      </Formik>
    );
  }
}
export default connect(null, { closeModal, addNewPost })(PostForm);

const styles = StyleSheet.create({
  inputForm: {
    borderBottomWidth: 1.8,
    borderColor: "grey",
  },
  postButton: {
    backgroundColor: "#668cff",
    height: 60,
    width: 300,
    marginTop: 20,
    alignSelf: "center",
    borderRadius: 10,
    elevation: 5,
    justifyContent: "center",
    alignItems: "center",
  },
});
