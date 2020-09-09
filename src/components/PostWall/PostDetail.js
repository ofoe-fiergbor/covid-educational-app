import React, { Component } from "react";
import {
  Text,
  StyleSheet,
  View,
  TouchableOpacity,
  Share,
  Linking,
} from "react-native";
import { Video } from "expo-av";
import { Dimensions } from "react-native";
import { AntDesign, Feather } from "@expo/vector-icons";
import Hyperlink from "react-native-hyperlink";
import { Avatar } from "react-native-paper";
import { ScrollView } from "react-native-gesture-handler";

const windowWidth = Dimensions.get("window").width;
const windowHeight = Dimensions.get("window").height;

export default class PostDetail extends Component {
  onShare = async () => {
    try {
      const result = await Share.share({
        message: this.props.route.params.post,
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
    const { route, navigation } = this.props;
    const { post, video, userNameFromEmail, firstTwoCharacters } = route.params;
    return (
      <View style={styles.container}>
        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
            marginHorizontal: 10,
          }}
        >
          <View style={{ flexDirection: "row", alignItems: "center" }}>
            <View style={styles.profilePicContainer}>
              <Text
                style={{
                  fontSize: 15,
                  textTransform: "uppercase",
                  fontWeight: "bold",
                  color: "#606060",
                }}
              >
                {firstTwoCharacters}
              </Text>
              {/* <Avatar.Image
                source={{
                  uri: "https://api.adorable.io/avatars/50/abott@adorable.png",
                }}
                size={30}
              /> */}
              {/* <AntDesign name="user" size={19} color="black" /> */}
            </View>
            <Text
              style={{
                fontWeight: "bold",
                textTransform: "capitalize",
                color: "#606060",
              }}
            >
              {userNameFromEmail}
            </Text>
          </View>
          <TouchableOpacity onPress={this.onShare}>
            <Feather name="share" size={21} color="black" />
          </TouchableOpacity>
        </View>
        <ScrollView>
          <Hyperlink linkStyle={{ color: "#2980b9" }} linkDefault={true}>
            <Text
              style={{
                marginVertical: 20,
                marginHorizontal: 20,
                color: "#919191",
                letterSpacing: 1,
              }}
            >
              {" "}
              {post}{" "}
            </Text>
          </Hyperlink>
        </ScrollView>
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
    backgroundColor: "#c8d2fa",
    height: 35,
    width: 35,
    justifyContent: "center",
    alignItems: "center",
    marginRight: 10,
    borderRadius: 50,
    borderWidth: 1,
    borderColor: "#fff",
  },
});
