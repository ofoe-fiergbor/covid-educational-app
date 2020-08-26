import React, { Component } from "react";
import { Text, StyleSheet, View } from "react-native";
import TrackerTemplate from "../components/TrackerWall/TrackerTemplate";

export default class TrackerWall extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             
        }
    }
    
  render() {
    return (
      <View style={styles.container}>
        <TrackerTemplate/>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    
  },
});
