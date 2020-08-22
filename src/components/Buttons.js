import React, { Component } from "react";
import { StyleSheet, Text, View } from "react-native";

export default class ButtonOne extends Component {
  render() {
    return (
      <View>
        <View style={styles.button}>
          <Text style={styles.button_text}>Latest News</Text>
        </View>
      </View>
    );
  }
}

// export default class ButtonTwo extends Component {
//   render() {
//     return (
//       <View>
//         {/* Trending Button */}
//         <View style={styles.button}>
//           <Text style={styles.button_text}>Trending</Text>
//         </View>
//       </View>
//     );
//   }
// }

const styles = StyleSheet.create({
  button: {
    backgroundColor: "#000",
    marginVertical: 20,
    width: 120,
    marginHorizontal: 20,
    borderRadius: 60,
    alignItems: "center",
    justifyContent: "flex-end",
  },
  button_text: {
    fontSize: 15,
    color: "#fff",
    padding: 10,
    fontWeight: "bold",
    letterSpacing: 1,
  },
});
