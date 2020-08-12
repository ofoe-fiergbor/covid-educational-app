import { Provider } from "react-redux";
import React from "react";
import { View, StyleSheet } from "react-native";
import Index from "./src/navigations/Index";
import store from './src/Redux/store'

export default function App() {
  return (
    <Provider store={store}>
      <View style={styles.container}>
        <Index />
      </View>
      </Provider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
});
