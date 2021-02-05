import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { createMaterialBottomTabNavigator } from "@react-navigation/material-bottom-tabs";
import { Entypo, AntDesign, MaterialCommunityIcons } from "@expo/vector-icons";
import PostWall from "../screens/PostWall";
import NewsWall from "../screens/NewsWall";
import TrackerWall from "../screens/TrackerWall";
import TipsWall from "../screens/TipsWall";
import StoreWall from "../screens/StoreWall";

const Tab = createMaterialBottomTabNavigator();

const TabNavigation = () => {
  return (
    <Tab.Navigator initialRouteName="post">
      <Tab.Screen
        name="post"
        component={PostWall}
        options={{
          tabBarLabel: "Views",
          tabBarIcon: ({ color }) => (
            <Entypo name="list" size={26} color={color} />
          ),
          tabBarColor: "#035efc",
        }}
      />
      <Tab.Screen
        name="news"
        component={NewsWall}
        options={{
          tabBarLabel: "News",
          tabBarIcon: ({ color }) => (
            <Entypo name="news" size={26} color={color} />
          ),
          tabBarColor: "#525efc",
        }}
      />
      <Tab.Screen
        name="tracker"
        component={TrackerWall}
        options={{
          tabBarLabel: "Tracker",
          tabBarIcon: ({ color }) => (
            <AntDesign name="linechart" size={26} color={color} />
          ),
          tabBarColor: "#0b357d",
        }}
      />
      <Tab.Screen
        name="store"
        component={StoreWall}
        options={{
          tabBarLabel: "Store",
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons
              name="cart"
              size={26}
              color={color}
            />
          ),
          tabBarColor: "#4c44ad",
        }}
      />
    </Tab.Navigator>
  );
};

export default TabNavigation;
