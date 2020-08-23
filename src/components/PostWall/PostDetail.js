import React, { Component } from "react";
import { Text, StyleSheet, View, TouchableOpacity, Share } from "react-native";
import { Video } from "expo-av";
import { Dimensions } from "react-native";
import { AntDesign, Feather } from "@expo/vector-icons";

const windowWidth = Dimensions.get("window").width;
const windowHeight = Dimensions.get("window").height;

export default class PostDetail extends Component {

  onShare = async () => {
    try {
      const result = await Share.share({
        message: this.props.route.params.post,
        url: this.props.video
          // "React Native | A framework for building native apps using React",
      });
      if (result.action === Share.sharedAction) {
        if (result.activityType) {
          // shared with activity type of result.activityType
        } else {
          // shared
        }
      } else if (result.action === Share.dismissedAction) {
        // dismissed
      }
    } catch (error) {
      alert(error.message);
    }
  };

  render() {
    const { route, navigation } = this.props;
    const { post, video } = route.params;
    return (
      <View style={styles.container}>
        <View style={{flexDirection:'row', justifyContent:'space-between', marginHorizontal:10}}>
          <View style={{flexDirection:'row', alignItems:'center'}}>
            <View style={styles.profilePicContainer}>
              <AntDesign name="user" size={19} color="black" />
            </View>
            <Text>User Name</Text>
          </View>
          <TouchableOpacity onPress={this.onShare}>
            <Feather name="share" size={21} color="black" />
          </TouchableOpacity>
        </View>
        <Text style={{marginVertical:20, marginHorizontal: 8}}> {post} </Text>
        {video && (
          <View style={{ height: 300, width: windowWidth }}>
            <Video
              source={{ uri: video }}
              rate={1.0}
              volume={1.0}
              isMuted={false}
              resizeMode="cover"
              shouldPlay={false}
              useNativeControls
              isLooping
              style={{ width: "100%", height: "95%" }}
            />
          </View>
        )}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    // paddingHorizontal: 30,
    flex: 1,
    paddingTop: 10,
  },
  profilePicContainer: {
    backgroundColor: "#a1caff",
    height: 35,
    width: 35,
    justifyContent: "center",
    alignItems: "center",
    marginRight:10,
    borderRadius: 50,
    // flex: 0.8,
  },
});
