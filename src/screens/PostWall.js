import React from "react";
import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import AddButton from "../components/PostWall/AddButton";
import ModalScreen from "../components/PostWall/ModalScreen";

class PostWall extends React.Component {
    
    
  render() {
    return (
      <View style={styles.container}>
        <ModalScreen />


        
        <Text>Post Wall</Text>
        <Text>The screen for reading all posts</Text>

        <AddButton />
      </View>
    );
  }
}

export default PostWall;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // justifyContent:'center',
    // alignItems:'center'
  },
});
