import React from "react";
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  TextInput,
} from "react-native";

const Login = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Text style={{ alignSelf: "center", fontSize: 30 }}>Login</Text>
      <View style={styles.formContainer}>
        <TextInput placeholder="Email" style={styles.textField} keyboardType="email-address" returnKeyType="next" />
        <TextInput
          placeholder="Password"
          style={styles.textField}
          secureTextEntry={true}
        />
      </View>
      <TouchableOpacity style={styles.registerBtn}>
        <Text style={{ fontSize: 15 }}>Login</Text>
      </TouchableOpacity>
      <Text style={{ fontSize: 15, alignSelf: "center" }}>or</Text>
      <TouchableOpacity
        style={{ ...styles.registerBtn, backgroundColor: "red" }}
      >
        <Text style={{ fontSize: 15, color: "#fff" }}>Login with Google</Text>
      </TouchableOpacity>
      <View
        style={{
          flexDirection: "row",
          justifyContent: "center",
          marginTop: 10,
        }}
      >
        <Text style={{ marginRight: 10 }}>You don't have an account?</Text>
        <TouchableOpacity onPress={() => navigation.navigate("register")}>
          <Text>Register.</Text>
        </TouchableOpacity>
      </View>

      <TouchableOpacity
        style={styles.btn}
        onPress={() => navigation.navigate("drawer")}
      >
        <Text>Login</Text>
      </TouchableOpacity>
    </View>
  );
};

export default Login;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingVertical: 100,
  },
  btn: {
    marginVertical: 50,
    backgroundColor: "skyblue",
    width: 100,
    justifyContent: "center",
    alignItems: "center",
    height: 40,
  },
  formContainer: {
    paddingHorizontal: 50,
    marginTop: 20,
  },
  textField: {
    borderBottomWidth: 0.5,
    lineHeight: 30,
    marginVertical: 15,
    fontSize: 20,
  },
  registerBtn: {
    marginVertical: 5,
    backgroundColor: "skyblue",
    width: 200,
    height: 40,
    alignSelf: "center",
    alignItems: "center",
    justifyContent: "center",
  },
});
