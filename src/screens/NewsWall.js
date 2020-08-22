import React, { Component } from "react";
import {
  StyleSheet,
  Text,
  View,
  FlatList,
  ActivityIndicator,
} from "react-native";
import NewsWallTemplate from "../components/NewsWallTemplate";
console.disableYellowBox = true;

class NewsWall extends Component {
  constructor(props) {
    super(props);

    this.state = {
      news: [],
      loading: true,
    };
  }
  //Fetch News
  fetchNews = () => {
    fetch("https://cryptic-ravine-96718.herokuapp.com")
      .then((res) => res.json())
      .then((response) => {
        this.setState({
          news: response.news,
          loading: false,
        });
      });
  };
  componentDidMount() {
    this.fetchNews();
  }
  render() {
    if (this.state.loading) {
      return (
        <View
          style={{
            flex: 1,
            alignItems: "center",
            justifyContent: "center",
            backgroundColor: "#0b1387",
            opacity: 0.2,
          }}
        >
          <ActivityIndicator size="large" color="#000" />
        </View>
      );
    } else {
      return (
        <FlatList
          data={this.state.news}
          renderItem={({ item }) => {
            return (
                <NewsWallTemplate
                  image={item.img}
                  url={item.link}
                  title={item.title}
                />
            );
          }}
          keyExtractor={(item) => item.id}
        />
      );
    }
  }
}

export default NewsWall;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});
