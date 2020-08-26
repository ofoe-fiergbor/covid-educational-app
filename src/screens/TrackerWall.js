import React, { Component } from "react";
import { Text, StyleSheet, View, ActivityIndicator } from "react-native";
import TrackerTemplate from "../components/TrackerWall/TrackerTemplate";

export default class TrackerWall extends Component {
  constructor(props) {
    super(props);

    this.state = {
      updates: [],
      loading: true,
    };
  }
  fetchUpdates = () => {
    fetch("https://mazitekgh.com/covid19/v1/")
      .then((res) => res.json())
      .then((response) => {
        let coronaData = {
          newCases: response.ghana.existing,
          confirmedCases: response.ghana.confirmed,
          recoveries: response.ghana.recovered,
          fatalities: response.ghana.deaths,
          date: response.ghana.date,
          time: response.ghana.time,
        };
        this.setState({
          updates: coronaData,
          loading: false,
        });
      })
      .catch((err) => {
        console.log(err);
      });
  };
  componentDidMount() {
    this.fetchUpdates();
  }
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
        <View style={styles.container}>
          <TrackerTemplate coronaData={this.state.updates} />
        </View>
      );
    }
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
