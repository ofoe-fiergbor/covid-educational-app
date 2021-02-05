import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { createDrawerNavigator, DrawerContent } from "@react-navigation/drawer";
import Faq from "../screens/Faq";
import TabNavigation from "./TabNavigation";
import DrawerEntity from './DrawerEntity'
import TipsWall from "../screens/TipsWall";
import ProfileScreen from "../screens/Profile";

const Drawer = createDrawerNavigator();

export default function DrawerNavigation() {
  return (
    <Drawer.Navigator drawerContent={props => <DrawerEntity {...props}/>}>
      <Drawer.Screen name="My Wall" component={TabNavigation} />
      <Drawer.Screen name="My Profile" component={ProfileScreen} />
      <Drawer.Screen name="Tips" component={TipsWall} />
      <Drawer.Screen name="FAQ" component={Faq} />
    </Drawer.Navigator>
  );
}

const styles = StyleSheet.create({});
