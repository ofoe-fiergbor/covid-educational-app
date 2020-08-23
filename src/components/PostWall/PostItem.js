import React, { Component } from "react";
import { Text, StyleSheet, View, TouchableOpacity, Share } from "react-native";
import { AntDesign, Feather } from "@expo/vector-icons";
import { Video } from "expo-av";
import { Dimensions } from "react-native";

const windowWidth = Dimensions.get("window").width;
const windowHeight = Dimensions.get("window").height;
export default class PostItem extends Component {
  
  onShare = async () => {
    try {
      const result = await Share.share({
        message: this.props.post,
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
    const { post, navigation, video } = this.props;
    // console.log(video)
    return (
      <TouchableOpacity
        style={styles.postItemContainer}
        onPress={() => {
          navigation.navigate("postDetail", { post, video });
        }}
      >
        <View style={styles.profilePicContainer}>
          <AntDesign name="user" size={19} color="black" />
        </View>
        <View style={styles.postDetailsContainer}>
          <View style={styles.postDetailsHeader}>
            <Text style={styles.userName}>User Name</Text>
            <TouchableOpacity onPress={this.onShare} style={{width:50, height: 25, alignItems:'center'}}>
              <Feather name="share" size={21} color="black" />
            </TouchableOpacity>
          </View>
          <View>
            <Text>{post}</Text>
            {video && (
              <View style={{ height: 200 }}>
                <Video
                  source={{ uri: video }}
                  rate={1.0}
                  volume={1.0}
                  isMuted={true}
                  resizeMode="cover"
                  shouldPlay
                  isLooping
                  style={{ width: "100%", height: "100%", alignSelf: "center" }}
                />
              </View>
            )}
          </View>
        </View>
      </TouchableOpacity>
    );
  }
}

const styles = StyleSheet.create({
  postItemContainer: {
    alignSelf: "center",
    width: windowWidth,
    minHeight: 80,
    backgroundColor: "#e8f2ff",
    flexDirection: "row",
    paddingHorizontal: 10,
    paddingVertical: 5,
    elevation: 5,
  },
  profilePicContainer: {
    backgroundColor: "#a1caff",
    height: 30,
    width: 30,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 50,
    flex: 0.8,
  },
  postDetailsContainer: {
    flex: 8,
    marginHorizontal: 2,
  },
  postDetailsHeader: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginVertical: 5,
    // backgroundColor:'skyblue',
  },
  userName: {
    fontWeight: "bold",
    marginLeft: 5,
  },
});
