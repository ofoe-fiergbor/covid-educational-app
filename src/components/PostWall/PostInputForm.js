import React, { Component } from "react";
import {Text, View, TextInput, StyleSheet, TouchableOpacity, ScrollView} from "react-native";
import { connect } from "react-redux";
import { closeModal } from "../../Redux/Action/modalAction";
import { addNewPost } from "../../Redux/Action/action";
import { FontAwesome5, AntDesign } from "@expo/vector-icons";
import { Video } from "expo-av";
import Constants from "expo-constants";
import * as Permissions from "expo-permissions";
import * as ImagePicker from "expo-image-picker";

class PostInputForm extends Component {
  constructor(props) {
    super(props);

    this.state = {
      post: "",
      video: null,
      id: Math.random().toString(36).substr(2, 5),
    };
  }
  componentDidMount() {
    this.getPermissionAsync();
  }


  getPermissionAsync = async () => {
    if (Constants.platform.ios) {
      const { status } = await Permissions.askAsync(Permissions.CAMERA_ROLL);
      if (status !== "granted") {
        alert("Sorry, we need camera roll permissions to make this work!");
      }
    }
  };

  _pickImage = async () => {
    try {
      let result = await ImagePicker.launchImageLibraryAsync({
        mediaTypes: ImagePicker.MediaTypeOptions.Videos,
        allowsEditing: true,
        aspect: [4, 3],
        quality: 1,
      });
      if (!result.cancelled) {
        this.setState({ video: result.uri });
      }

      // console.log(result);
    } catch (E) {
      console.log(E);
    }
  };
  remove = () => {
    this.setState({
      video: null,
    });
  };

  handleChange = (name, value) => {
    this.setState({
      [name]: value,
    });
  };
  handleSubmit = () => {
    if (this.state.post <= 0) {
      return null
    }

    const uid = this.props.user.user.uid
    const userEmail = this.props.user.user.email
    this.props.addNewPost(this.state, uid, userEmail);
    this.props.closeModal();
  };

  render() {
    return (
      <ScrollView>
        <TouchableOpacity
          style={styles.postButton}
          onPress={this.handleSubmit}
        >
          <Text style={{ fontSize: 15, color: "#fff", fontWeight:'bold' }}>Post</Text>
        </TouchableOpacity>
        <TextInput
          style={styles.inputForm}
          multiline={true}
          numberOfLines={5}
          autoFocus={true}
          placeholder="Share your story..."
          onChangeText={(text) => this.handleChange("post", text)}
          value={this.state.post}
        />
        <TouchableOpacity onPress={this._pickImage}>
          <FontAwesome5 name="file-video" size={24} color="grey" />
        </TouchableOpacity>
        {this.state.video && (
          <View style={{ marginHorizontal: 20, height: 150 }}>
            <TouchableOpacity onPress={this.remove} style={styles.videoPreview}>
              <AntDesign name="delete" size={15} color="black" />
            </TouchableOpacity>
            <Video
              source={{ uri: this.state.video }}
              rate={1.0}
              volume={1.0}
              isMuted={false}
              resizeMode="cover"
              shouldPlay
              isLooping
              style={{ width: "100%", height: "100%" }}
            />
          </View>
        )}
      </ScrollView>
    );
  }
}
const mstp = state =>{
  // console.log(state.auth.user.user.email)
  return{
    user: state.auth.user
  }
}
export default connect(mstp, { closeModal, addNewPost })(PostInputForm);

const styles = StyleSheet.create({
  inputForm: {
    borderWidth: .5,
    borderColor: "#e8f1ff",
    borderRadius: 15,
    paddingHorizontal: 5,
    marginBottom: 10
  },
  postButton: {
    backgroundColor: "#668cff",
    height: 40,
    width: 100,
    marginTop: 20,
    marginBottom: 10,
    alignSelf: "flex-end",
    borderRadius: 10,
    elevation: 5,
    justifyContent: "center",
    alignItems: "center",
  },
  orText: {
    alignSelf: "center",
    marginVertical: 10,
  },
  videoPreview: {
    height: "10%",
    width: 20,
    alignSelf: "flex-end",
    marginBottom: 10,
    marginRight: 10,
    justifyContent: "center",
    alignItems: "center",
  },
});
