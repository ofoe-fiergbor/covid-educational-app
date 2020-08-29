import { Provider } from "react-redux";
import React from "react";
import { View, StyleSheet } from "react-native";
import Index from "./src/navigations/Index";
import { store, persistor } from "./src/Redux/store";
import {PersistGate} from 'redux-persist/integration/react'

export default function App() {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
      <View style={styles.container}>
        <Index />
      </View>
      </PersistGate>
    </Provider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
});
