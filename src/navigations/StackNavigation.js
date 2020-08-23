import React from "react";
import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { createStackNavigator } from "@react-navigation/stack";
import Landing from "../screens/Landing";
import Welcome from "../screens/Welcome";
import Register from "../screens/Register";
import Login from "../screens/Login";
import TabNavigation from "./TabNavigation";
import DrawerNavigation from "./DrawerNavigation";
import PostDetail from "../components/PostWall/PostDetail";

const Stack = createStackNavigator();



const StackNavigation = ({navigate}) => {

  return (
    <View style={styles.container}>
      <Stack.Navigator
        screenOptions={{
          headerTitle: "COVID-19 APP",
          headerTitleAlign: "center",
          headerTintColor: "#fff",

          headerStyle: {
            backgroundColor: "#326da8",
          },
          headerLeft: null,
        }}
      >
        <Stack.Screen
          name="landing"
          component={Landing}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="welcome"
          component={Welcome}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="register"
          component={Register}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="login"
          component={Login}
          options={{ headerShown: false }}
        />
        <Stack.Screen name="tabs" component={TabNavigation} />
        <Stack.Screen name="drawer" component={DrawerNavigation} />
        <Stack.Screen
          name="postDetail"
          component={PostDetail}
          options={{
            headerLeft: () => (
              <TouchableOpacity onPress={()=>{navigate("tabs")}} style={styles.backIcon}>
                <Ionicons name="ios-arrow-round-back" size={40} color="white"/>
              </TouchableOpacity>
            ),
          }}
        />
      </Stack.Navigator>
    </View>
  );
};

export default StackNavigation;
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  backIcon:{
    marginLeft: 20,

  }
});
