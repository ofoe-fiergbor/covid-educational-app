import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Entypo, AntDesign, MaterialCommunityIcons } from "@expo/vector-icons";
import PostWall from "../screens/PostWall";
import NewsWall from "../screens/NewsWall";
import TrackerWall from "../screens/TrackerWall";
import TipsWall from "../screens/TipsWall";

const BottomTabs = createBottomTabNavigator();

const TabNavigation = () => {
  return (
    <BottomTabs.Navigator
      initialRouteName="post"
      tabBarOptions={{
        activeTintColor: "skyblue",
        style: {
          height: 60,
          paddingBottom: 5,
          backgroundColor: "#f5f5f5",
          shadowColor: "transparent",
          elevation: 0,
        },
      }}
    >
      <BottomTabs.Screen
        name="post"
        component={PostWall}
        options={{
          tabBarLabel: "Views",
          tabBarIcon: ({ color }) => (
            <Entypo name="list" size={26} color={color} />
          ),
        }}
      />
      <BottomTabs.Screen
        name="news"
        component={NewsWall}
        options={{
          tabBarLabel: "News",
          tabBarIcon: ({ color }) => (
            <Entypo name="news" size={26} color={color} />
          ),
        }}
      />
      <BottomTabs.Screen
        name="tracker"
        component={TrackerWall}
        options={{
          tabBarLabel: "Tracker",
          tabBarIcon: ({ color }) => (
            <AntDesign name="linechart" size={26} color={color} />
          ),
        }}
      />
      <BottomTabs.Screen
        name="tips"
        component={TipsWall}
        options={{
          tabBarLabel: "Tips",
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons
              name="lightbulb-on-outline"
              size={26}
              color={color}
            />
          ),
        }}
      />
    </BottomTabs.Navigator>
  );
};

export default TabNavigation;
