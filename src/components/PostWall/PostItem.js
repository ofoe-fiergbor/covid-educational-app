import React, { Component } from "react";
import { Text, StyleSheet, View, Share, TouchableOpacity, TouchableWithoutFeedback } from "react-native";
import { AntDesign, Feather } from "@expo/vector-icons";
import { Avatar } from "react-native-paper";
import { Video } from "expo-av";
import { Dimensions } from "react-native";
import Hyperlink from "react-native-hyperlink";

const windowWidth = Dimensions.get("window").width;
const windowHeight = Dimensions.get("window").height;
export default class PostItem extends Component {
  onShare = async () => {
    try {
      const result = await Share.share({
        message: this.props.post,
        url: this.props.video,
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
    const { post, navigation, video, userEmail, timestamp } = this.props;
    let userNameFromEmail = userEmail.slice(0, userEmail.indexOf("@"));
    let firstTwoCharacters = userNameFromEmail.slice(0, 2);
    // let timeOfPost = timestamp.toDate()
    


    return (
      <TouchableWithoutFeedback
        
        onPress={() => {
          navigation.navigate("postDetail", { post, video, userNameFromEmail, firstTwoCharacters });
        }}
      >
        <View style={styles.postItemContainer}>
        <View style={styles.profilePicContainer}>
          <Text style={{fontSize: 15, textTransform:'uppercase', fontWeight:'bold'}}>{firstTwoCharacters}</Text>
          {/* <Avatar.Image
                source={{
                  uri: "https://api.adorable.io/avatars/50/abott@adorable.png",
                }}
                size={30}
              /> */}
          {/* <AntDesign name="user" size={19} color="black" /> */}
        </View>
        <View style={styles.postDetailsContainer}>
          <View style={styles.postDetailsHeader}>
            <Text style={styles.userName}>{userNameFromEmail}</Text>
            {/* <Text></Text> */}
            {/* <TouchableOpacity onPress={this.onShare} style={{width:50, height: 25, alignItems:'center'}}>
              <Feather name="share" size={21} color="black" />
            </TouchableOpacity> */}
          </View>
          <View>
            <Hyperlink linkStyle={{ color: "#2980b9" }}>
              <Text numberOfLines={4}>{post}</Text>
            </Hyperlink>
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
        </View>
      </TouchableWithoutFeedback>
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
    paddingVertical: 10,
    elevation: 5,
    marginVertical: 1.5
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
