import React, { Component } from "react";
import { Text, StyleSheet, View, Dimensions, Image, ScrollView, Linking, TouchableWithoutFeedback } from "react-native";
const { width, height } = Dimensions.get("window");

class TipsWallDetail extends Component {
  render() {
    const { route } = this.props;
    const { title, image, details, link} = route.params;
    return (
      <View style={styles.container}>
        {/* News List View */}
        <View
          style={{
            width: width,
            height: 200,
            backgroundColor: "#fff",
            alignSelf: "center",
            elevation: 20,
            marginBottom: 10,
          }}
        >
          <Image
            source={image}
            style={[StyleSheet.absoluteFill, { width: width, height: 200 }]}
          />
          <View style={styles.gradient}>
            <Text
              style={{
                color: "#fff",
                fontSize: 25,
                position: "absolute",
                padding: 10,
                letterSpacing: 1,
                fontWeight: "bold",
                alignSelf: "center",
                top: 50,
              }}
            >
              {title}
            </Text>
          </View>
        </View>
        <View style={{margin: 5}}>
        <TouchableWithoutFeedback
              onPress={() => Linking.openURL(link)}
              style={{flexDirection: "row"}}
            >
              <Text
                style={{
                  color: "blue",
                  fontSize: 14,
                  padding: 10,
                  letterSpacing: 1,
                  fontWeight: "bold",
                  bottom: 0,
                  fontStyle: 'italic',
                  borderBottomColor: 'blue',
                  borderBottomWidth: 1,
                }}
              >
                Source:   Centers for Disease Control And Prevention (CDC)
              </Text>
              
            </TouchableWithoutFeedback>
        </View>
        <ScrollView>
          <View style={{ marginHorizontal: 10 }}>
          
            <Text style={{ fontSize: 16, color: "#808787" }}>{details} </Text>
          </View>
        </ScrollView>
      </View>
    );
  }
}
export default TipsWallDetail;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
});
