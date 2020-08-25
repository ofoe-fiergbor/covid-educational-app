import React from "react";
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  TextInput,
  ScrollView,
} from "react-native";

const Register = ({ navigation }) => {
  return (
    <ScrollView>
      <View style={styles.container}>
        <Text style={{ alignSelf: "center", fontSize: 30 }}>Sign Up</Text>
        <View style={styles.formContainer}>
          <TextInput placeholder="First Name" style={styles.textField} returnKeyType="next"/>
          <TextInput placeholder="Last Name" style={styles.textField} />
          <TextInput placeholder="Email" style={styles.textField} keyboardType="email-address" />
          <TextInput
            placeholder="Password"
            style={styles.textField}
            secureTextEntry={true}
          />
        </View>
        <TouchableOpacity style={styles.registerBtn}>
          <Text style={{ fontSize: 15 }}>Register</Text>
        </TouchableOpacity>
        <Text style={{ fontSize: 15, alignSelf: "center" }}>or</Text>
        <TouchableOpacity
          style={{ ...styles.registerBtn, backgroundColor: "red" }}
        >
          <Text style={{ fontSize: 15, color: "#fff" }}>
            Sign up with Google
          </Text>
        </TouchableOpacity>
        <View
          style={{
            flexDirection: "row",
            justifyContent: "center",
            marginTop: 10,
          }}
        >
          <Text style={{ marginRight: 10 }}>Already have an account?</Text>
          <TouchableOpacity onPress={() => navigation.navigate("login")}>
            <Text>Login.</Text>
          </TouchableOpacity>
        </View>
      </View>
    </ScrollView>
  );
};

export default Register;

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
