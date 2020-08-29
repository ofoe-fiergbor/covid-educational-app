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
import { connect } from "react-redux";
import SignBoarding from "../screens/SignBoarding";
import DrawerBoarding from '../screens/DrawerBoarding'


const Stack = createStackNavigator();

const StackNavigation = ({ navigate, auth }) => {
  return (
    <View style={styles.container}>
      {auth.isLoggedIn ? (
        <Stack.Navigator
          screenOptions={{
            headerTitle: "COVID-19 APP",
            headerTitleAlign: "center",
            headerTintColor: "#fff",
            headerStyle: {
              backgroundColor: "#326da8",
            },
          }}
        >
          <Stack.Screen name="drawer" component={DrawerNavigation} />
          <Stack.Screen name="tabs" component={TabNavigation} />
          <Stack.Screen
            name="postDetail"
            component={PostDetail}
            options={{
              headerLeft: () => (
                <TouchableOpacity
                  onPress={() => {
                    navigate("tabs");
                  }}
                  style={styles.backIcon}
                >
                  <Ionicons
                    name="ios-arrow-round-back"
                    size={40}
                    color="white"
                  />
                </TouchableOpacity>
              ),
            }}
          />
        </Stack.Navigator>
      ) : (
        <Stack.Navigator>
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
            name="signboard"
            component={SignBoarding}
            options={{ headerShown: false }}
          />
           <Stack.Screen
            name="drawerboard"
            component={DrawerBoarding}
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
        </Stack.Navigator>
      )}
    </View>
  );
};
const mstp = (state) => {
  return {
    auth: state.auth,
  };
};

export default connect(mstp)(StackNavigation);
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  backIcon: {
    marginLeft: 20,
  },
});
