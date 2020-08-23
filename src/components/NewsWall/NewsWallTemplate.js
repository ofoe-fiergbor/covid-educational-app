import React, { Component } from "react";
import {
  Text,
  StyleSheet,
  View,
  Image,
  Dimensions,
  TouchableWithoutFeedback,
  Linking,
  Share,
} from "react-native";
import { Feather } from '@expo/vector-icons';
const { width, height } = Dimensions.get("window");


export default class NewsWallTemplate extends Component {
  render() {
    return (
      <View style={styles.container}>
        {/* News List View */}
        <TouchableWithoutFeedback
          onPress={() => Linking.openURL(this.props.url)}
        >
          <View
            style={{
              width: width - 30,
              height: 200,
              backgroundColor: "#fff",
              alignSelf: "center",
              borderRadius: 20,
              elevation: 20,
              marginVertical: 10,
              
            }}
          >
            <Image
              source={{ uri: this.props.image }}
              style={[StyleSheet.absoluteFill, { borderRadius: 20, }]}
            />
            <View style={styles.gradient}>
              <Text
                numberOfLines={2}
                style={{
                  color: "#fff",
                  fontSize: 18,
                  position: "absolute",
                  bottom: 0,
                  padding: 10,
                  letterSpacing: 1,
                  fontWeight: "bold",
                }}
              >
                {this.props.title}
              </Text>

              <Feather
                onPress={() => this.props.article(this.props.url)}
                name="share"
                size={23}
                color="#fff"
                style={{
                  position: "absolute",
                  top: 0,
                  right: 0,
                  padding: 10,
                }}
              />
              <Text
                style={{
                  position: "absolute",
                  top: 0,
                  left: 0,
                  padding: 10,
                  color: "#fff",
                  fontSize: 30,
                  fontWeight: "bold",
                  textTransform: "capitalize",
                }}
              >
                {this.props.topic}
              </Text>
            </View>
          </View>
        </TouchableWithoutFeedback>
        {/* <View
          style={{
            width: width - 30,
            height: 100,
            alignSelf: "center",
            elevation: 20,
            backgroundColor: "#ebedf2",
            marginBottom: 15,
            borderBottomRightRadius: 20,
          }}
        >
          <View>
            <Text
              onPress={() => Linking.openURL(this.props.url)}
              numberOfLines={3}
              style={{
                fontSize: 14,
                padding: 10,
                color: "#000",
                fontWeight: "bold",
              }}
            >
              {this.props.summary}
            </Text>
            <View
              style={{
                marginHorizontal: 10,
                flexDirection: "row",
                justifyContent: "space-between",
              }}
            >
              <Text style={{ fontWeight: "bold", color: "grey", flex: 6 }}>
                {this.props.date}
              </Text>
              <Text
                numberOfLines={1}
                style={{ fontWeight: "bold", color: "grey", flex: 4 }}
              >
                Author:{this.props.source}
              </Text>
            </View>
          </View>
        </View> */}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#e0e0e0",
    flex: 1,
  },
  gradient: {
    width: "100%",
    height: "100%",
    backgroundColor: "#000",
    opacity: 0.7,
    borderRadius: 20,
  },
});
