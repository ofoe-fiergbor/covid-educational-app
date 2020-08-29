import React from "react";
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  TextInput,
  ScrollView,
  Image,
} from "react-native";
import blob1 from "../img/blob1.png";
import blob2 from "../img/blob2.png";
import { Entypo, FontAwesome5, Feather } from "@expo/vector-icons";

import { connect } from "react-redux";
import { registerUser } from "../Redux/Action/AuthActions";
class Register extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      firstName: "",
      lastName: "",
      email: "",
      password: "",
    };
  }

  handleTextChange = (name, value) => {
    this.setState({
      [name]: value,
    });
  };
  handleSubmit = () => {
    const { firstName, lastName, email, password } = this.state;

    this.props.registerUser(firstName, lastName, email, password);
  };

  render() {
    const { navigation } = this.props;
    return (
      <ScrollView>
        <View style={styles.container}>
          <Image source={blob1} style={styles.blob__image} />
          <Image source={blob2} style={styles.blob__image1} />
          <Text
            style={{ alignSelf: "center", fontSize: 30, marginVertical: 50, fontWeight: 'bold', }}
          >
            Create Account
          </Text>
          <View style={styles.formContainer}>
            <View style={styles.textField}>
              <FontAwesome5
                name="user-alt"
                size={20}
                color="black"
                style={{ marginRight: 30, elevation: 20 }}
              />
              <TextInput
                placeholder="First Name"
                returnKeyType="next"
                value={this.state.firstName}
                onChangeText={(text) =>
                  this.handleTextChange("firstName", text)
                }
              />
            </View>
            <View style={styles.textField}>
              <FontAwesome5
                name="user-alt"
                size={20}
                color="black"
                style={{ marginRight: 30, elevation: 20 }}
              />
              <TextInput
                placeholder="Last Name"
                value={this.state.lastName}
                onChangeText={(text) => this.handleTextChange("lastName", text)}
              />
            </View>
            <View style={styles.textField}>
              <Entypo
                name="email"
                size={20}
                color="black"
                style={{ marginRight: 30, elevation: 20 }}
              />
              <TextInput
                placeholder="Email"
                keyboardType="email-address"
                value={this.state.email}
                onChangeText={(text) => this.handleTextChange("email", text)}
              />
            </View>
            <View style={styles.textField}>
              <Entypo
                name="lock"
                size={20}
                color="black"
                style={{ marginRight: 30, elevation: 20 }}
              />
              <TextInput
                placeholder="Password"
                secureTextEntry={true}
                value={this.state.password}
                onChangeText={(text) => this.handleTextChange("password", text)}
              />
            </View>
          </View>
          <TouchableOpacity
            style={styles.registerBtn}
            onPress={this.handleSubmit}
          >
            <Text
              style={{
                fontSize: 20,
                fontWeight: "bold",
                color: "#fff",
                marginRight: 10,
              }}
            >
              Register
            </Text>
            <Feather
              name="arrow-right"
              size={25}
              color="#fff"
              style={{ fontWeight: "bold" }}
            />
          </TouchableOpacity>
          {/* <Text style={{ fontSize: 15, alignSelf: "center" }}>or</Text>
          <TouchableOpacity
            style={{ ...styles.registerBtn, backgroundColor: "red" }}
          >
            <Text style={{ fontSize: 15, color: "#fff" }}>
              Sign up with Google
            </Text>
          </TouchableOpacity> */}
          <View
            style={{
              flexDirection: "row",
              justifyContent: "center",
              marginTop: 10,
            }}
          >
            <Text style={{ marginRight: 10 }}>Already have an account?</Text>
            <TouchableOpacity onPress={() => navigation.navigate("login")}>
              <Text style={{ color: "skyblue" }}>Login</Text>
            </TouchableOpacity>
          </View>
        </View>
      </ScrollView>
    );
  }
}

export default connect(null, { registerUser })(Register);

const styles = StyleSheet.create({
  container: {
    flex: 1,
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
    paddingHorizontal: 15,
  },
  textField: {
    lineHeight: 30,
    marginVertical: 12,
    fontSize: 18,
    backgroundColor: "#fff",
    paddingHorizontal: 30,
    paddingVertical: 10,
    elevation: 10,
    borderRadius: 50,
    flexDirection: "row",
    alignItems: "center",
  },
  registerBtn: {
    marginTop: 70,
    marginBottom: 30,
    paddingHorizontal: 35,
    paddingVertical: 10,
    marginHorizontal: 15,
    alignSelf: "flex-end",
    justifyContent: "flex-end",
    flexDirection: "row",
    backgroundColor: "skyblue",
    padding: 10,
    borderTopLeftRadius: 50,
    borderBottomLeftRadius: 50,
    alignItems: "center",
    elevation: 20,
  },
  blob__image: {
    position: "absolute",
    right: 0,
    top: 0,
    width: 200,
    height: 350,
  },
  blob__image1: {
    position: "absolute",
    left: 0,
    bottom: 0,
    width: 200,
    height: 350,
  },
});
