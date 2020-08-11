import React from "react";
import { StyleSheet, Text, View, TouchableOpacity } from "react-native";

const Login = ({navigation}) => {
    return (
        <View style={styles.container}>
            <Text>Login Page</Text>
            <TouchableOpacity style={styles.btn}  onPress={()=> navigation.navigate('drawer')}>
            <Text>Login</Text>
            </TouchableOpacity>
        </View>
    )
}

 


export default Login;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  btn: {
    marginVertical: 50,
    backgroundColor: "skyblue",
    width: 100,
    justifyContent: "center",
    alignItems: "center",
    height: 40,
  },
});
