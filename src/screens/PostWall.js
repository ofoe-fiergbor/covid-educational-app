import React from "react";
import {
  StyleSheet,
  View,
  FlatList,
  ActivityIndicator
} from "react-native";
import { connect } from "react-redux";
import AddButton from "../components/PostWall/AddButton";
import ModalScreen from "../components/PostWall/ModalScreen";
import PostItem from "../components/PostWall/PostItem";
import { getAllPosts } from "../Redux/Action/action";

class PostWall extends React.Component {
  componentDidMount() {
    this.props.getAllPosts();
  }

  render() {
    let { posts, navigation, loading } = this.props;
    return (
      <View style={styles.container}>
        <ModalScreen />
        {loading && <ActivityIndicator size='large' color='black' />}
        <FlatList
          data={posts}
          showsVerticalScrollIndicator={false}
          renderItem={({ item }) => {
            return (
              <PostItem
                post={item.post}
                video={item.video}
                userEmail={item.userEmail}
                navigation={navigation}
              />
            );
          }}
        />
        <AddButton />
      </View>
    );
  }
}

const mstp = (state) => {
  // console.log(state.auth.user.user.providerData[0].email)
  return {
    posts: state.posts.posts,
    loading: state.posts.loading,
    auth: state.auth
  };
};
export default connect(mstp, { getAllPosts })(PostWall);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
});
