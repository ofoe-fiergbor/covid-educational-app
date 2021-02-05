import { Provider } from "react-redux";
import React from "react";
import { View, StyleSheet } from "react-native";
import Index from "./src/navigations/Index";
import { store, persistor } from "./src/Redux/store";
import { PersistGate } from "redux-persist/integration/react";
import AppLoading from "expo-app-loading";
import {
  useFonts,
  CormorantUpright_700Bold,
  CormorantUpright_500Medium,
} from "@expo-google-fonts/cormorant-upright";
import {
  Quicksand_700Bold,
  Quicksand_500Medium
} from "@expo-google-fonts/quicksand";
export default function App() {
  let [fontsLoaded] = useFonts({
    CormorantUpright_700Bold,
    CormorantUpright_500Medium,
    Quicksand_700Bold,
    Quicksand_500Medium
  });

  if (!fontsLoaded) {
    return <AppLoading />;
  }
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
