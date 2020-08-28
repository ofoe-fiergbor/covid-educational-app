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
import {getAllPosts} from '../Redux/Action/action'

class PostWall extends React.Component {
  componentDidMount() {
    this.props.getAllPosts()
  }
  
  render() {
    let { posts, navigation } = this.props;
    return (
      <View style={styles.container}>
        <ModalScreen />

        <FlatList
          data={posts}
          showsHorizontalScrollIndicator={false}
          renderItem={({ item }) => {
            return <PostItem post={item.post} video={item.video} navigation={navigation} />;
          }}
        />
        <AddButton />
      </View>
    );
  }
}

const mstp = (state) => {
  // console.log(state.posts.posts)
  return {
    posts: state.posts.posts,
  };
};
export default connect(mstp, {getAllPosts})(PostWall);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
});
