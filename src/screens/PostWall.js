import React from "react";
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  FlatList,
} from "react-native";
import { connect } from "react-redux";
import AddButton from "../components/PostWall/AddButton";
import ModalScreen from "../components/PostWall/ModalScreen";
import PostItem from "../components/PostWall/PostItem";

class PostWall extends React.Component {
  render() {
    let { posts, navigation } = this.props;
    return (
      <View style={styles.container}>
        <ModalScreen />

        <FlatList
          data={posts}
          showsHorizontalScrollIndicator={false}
          renderItem={({ item }) => {
            return <PostItem post={item.post} navigation={navigation} />;
          }}
        />

        <AddButton />
      </View>
    );
  }
}

const mstp = (state) => {
  return {
    posts: state.posts,
  };
};
export default connect(mstp)(PostWall);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
});
