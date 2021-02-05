import React from "react";
import { View, StyleSheet, Text } from "react-native";
import { Avatar, Title, Caption, Drawer } from "react-native-paper";
import { signOut } from "../Redux/Action/AuthActions";
import { DrawerContentScrollView, DrawerItem } from "@react-navigation/drawer";

import Icon from "react-native-vector-icons/AntDesign";
import { connect } from "react-redux";

function DrawerEntity(props) {
  return (
    <View style={{ flex: 1, }}>
      <DrawerContentScrollView {...props}>
        <View style={styles.drawerContent}>
          <View style={styles.userInfoSection}>
            <View style={{ flexDirection: "row", marginTop: 15 }}>
              <Avatar.Image
                source={{
                  uri: "https://api.adorable.io/avatars/50/abott@adorable.png",
                }}
                size={50}
              />
              <View style={{ marginLeft: 15, flexDirection: "column" }}>
                {(props.state.auth.isLoggedIn) ? (
                  <Title style={styles.title}>
                    <Text numberOfLines={1}>{props.state.auth.user.user.providerData[0].email}</Text>
                  </Title>
                ): null}
                {/* <Caption style={styles.caption}>@j_doe</Caption> */}
              </View>
            </View>
          </View>

          <Drawer.Section style={styles.drawerSection}>
            <DrawerItem
              icon={({ color, size }) => (
                <Icon name="home" color={color} size={size} />
              )}
              label="My Wall"
              onPress={() => {
                props.navigation.navigate("My Wall");
              }}
            />
            <DrawerItem
              icon={({ color, size }) => (
                <Icon name="user" color={color} size={size} />
              )}
              label="My Profile"
              onPress={() => {
                props.navigation.navigate("My Profile");
              }}
            />
            <DrawerItem
              icon={({ color, size }) => (
                <Icon name="bulb1" color={color} size={size} />
              )}
              label="Tips"
              onPress={() => {
                props.navigation.navigate("Tips");
              }}
            />
            <DrawerItem
              icon={({ color, size }) => (
                <Icon name="question" color={color} size={size} />
              )}
              label="FAQ"
              onPress={() => {
                props.navigation.navigate("FAQ");
              }}
            />
          </Drawer.Section>
          {/* <Drawer.Section title="Preferences">
                        <TouchableRipple onPress={() => {toggleTheme()}}>
                            <View style={styles.preference}>
                                <Text>Dark Theme</Text>
                                <View pointerEvents="none">
                                    <Switch value={paperTheme.dark}/>
                                </View>
                            </View>
                        </TouchableRipple>
                    </Drawer.Section> */}
        </View>
      </DrawerContentScrollView>
      <Drawer.Section style={styles.bottomDrawerSection}>
        <DrawerItem
          icon={({ color, size }) => (
            <Icon name="logout" color={color} size={size} />
          )}
          label="Sign Out"
          onPress={() => {
            props.signOut();
          }}
        />
      </Drawer.Section>
    </View>
  );
}
const mstp = (state) => {
  // console.log(state.auth.user.user.providerData[0].email)
  return {
    state,
  };
};
export default connect(mstp, { signOut })(DrawerEntity);

const styles = StyleSheet.create({
  drawerContent: {
    flex: 1,
  },
  userInfoSection: {
    paddingLeft: 20,
  },
  title: {
    fontSize: 16,
    marginTop: 3,
    fontWeight: "bold",
  },
  caption: {
    fontSize: 14,
    lineHeight: 14,
  },
  row: {
    marginTop: 20,
    flexDirection: "row",
    alignItems: "center",
  },
  section: {
    flexDirection: "row",
    alignItems: "center",
    marginRight: 15,
  },
  paragraph: {
    fontWeight: "bold",
    marginRight: 3,
  },
  drawerSection: {
    marginTop: 15,
  },
  bottomDrawerSection: {
    marginBottom: 15,
    borderTopColor: "#f4f4f4",
    borderTopWidth: 1,
  },
  preference: {
    flexDirection: "row",
    justifyContent: "space-between",
    paddingVertical: 12,
    paddingHorizontal: 16,
  },
});
