import React, { Component } from "react";
import { Text, StyleSheet, View, TouchableOpacity } from "react-native";
import { AntDesign } from "@expo/vector-icons";

export default class PostItem extends Component {
  render() {
    const {post, navigation} = this.props
    return (
      <TouchableOpacity style={styles.postItemContainer} onPress={()=>{navigation.navigate('postDetail',{post})}}>
        <View style={styles.profilePicContainer}>
          <AntDesign name="user" size={21} color="black" />
        </View>
        <View style={styles.postDetailsContainer}>
          <View style={styles.postDetailsHeader}>
            <Text style={styles.userName}>User Name</Text>
            <TouchableOpacity>
              <AntDesign name="sharealt" size={21} color="black" />
            </TouchableOpacity>
          </View>
          <View>
            <Text>
              {post}
            </Text>
          </View>
        </View>
      </TouchableOpacity>
    );
  }
}

const styles = StyleSheet.create({
  postItemContainer: {
    alignSelf: "center",
    width: 300,
    minHeight: 80,
    backgroundColor: "#e8f2ff",
    marginVertical: 10,
    flexDirection:'row',
    paddingHorizontal: 5,
    paddingVertical:10,
    elevation: 5,
    borderRadius: 10
  },
  profilePicContainer: {
    backgroundColor: "#a1caff",
    height: 35,
    width: 35,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 50,
    flex: 1
  },
  postDetailsContainer:{
    flex: 8,
    marginHorizontal: 2
  },
  postDetailsHeader:{
    flexDirection: 'row',
    justifyContent:'space-between',
    alignItems:'center',
    marginVertical: 5
    // backgroundColor:'skyblue',
  },
  userName:{
    fontWeight:'bold',
    marginLeft: 5
  }
});
