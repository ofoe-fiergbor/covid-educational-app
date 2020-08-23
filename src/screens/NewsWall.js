import React, { Component } from "react";
import {
  StyleSheet,
  Text,
  View,
  FlatList,
  ActivityIndicator,
  Share,
} from "react-native";
import NewsWallTemplate from "../components/NewsWall/NewsWallTemplate";
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
    fetch(
      "https://covid-19-news.p.rapidapi.com/v1/covid?lang=en&media=True&q=covid-19",
      {
        method: "GET",
        headers: {
          "x-rapidapi-host": "covid-19-news.p.rapidapi.com",
          "x-rapidapi-key":
            "4797fbff69msh206c52ea361382fp183ae2jsnff7bdaf2dd33",
        },
      }
    )
      .then((res) => res.json())
      .then((response) => {
        this.setState({
          news: response.articles,
          loading: false,
        });
      })
      .catch((err) => {
        console.log(err);
      });
    // fetch("https://cryptic-ravine-96718.herokuapp.com")
    //   .then((res) => res.json())
    //   .then((response) => {
    //     this.setState({
    //       news: response.news,
    //       loading: false,
    //     });
    //   });
  };
  componentDidMount() {
    this.fetchNews();
  }


sharearticle = async (article) => {
    try {
      await Share.share({
        message: "Kindly check this article out " + article,
      });
    } catch (error) {
      console.log(error);
    }
  };
  render() {
    if (this.state.loading) {
      return (
        <View
          style={{
            flex: 1,
            alignItems: "center",
            justifyContent: "center",
            backgroundColor: "skyblue",
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
                image={item.media}
                url={item.link}
                title={item.title}
                // date={item.published_date}
                // summary={item.summary}
                // source={item.author}
                topic={item.topic}
                article={this.sharearticle}
              />
            );
          }}
          keyExtractor={(item) => item._id}
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
