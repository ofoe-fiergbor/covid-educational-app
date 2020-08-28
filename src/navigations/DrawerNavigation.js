import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { createDrawerNavigator, DrawerContent } from "@react-navigation/drawer";
import Faq from "../screens/Faq";
import TabNavigation from "./TabNavigation";
import SettingScreen from "../screens/Settings";
import DrawerEntity from './DrawerEntity'

const Drawer = createDrawerNavigator();

export default function DrawerNavigation() {
  return (
    <Drawer.Navigator drawerContent={props => <DrawerEntity {...props}/>}>
      <Drawer.Screen name="My Wall" component={TabNavigation} />
      <Drawer.Screen name="Settings" component={SettingScreen} />
      <Drawer.Screen name="FAQ" component={Faq} />
    </Drawer.Navigator>
  );
}

const styles = StyleSheet.create({});
