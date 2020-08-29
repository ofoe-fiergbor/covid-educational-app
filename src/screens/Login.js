import React from "react";
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  TextInput,
  Image,
  ScrollView,
} from "react-native";
import { connect } from "react-redux";
import { signIn } from "../Redux/Action/AuthActions";
import blob from "../img/blob.png";
import { Entypo } from "@expo/vector-icons";
import { Feather } from "@expo/vector-icons";

class Login extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
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
    this.props.signIn(this.state.email, this.state.password);
  };

  render() {
    const { navigation, auth } = this.props;
    return (
      <View style={styles.container}>
        <ScrollView>
          <Image source={blob} style={styles.blob__image} />
          <View
            style={{ alignItems: "center", fontSize: 30, marginVertical: 80 }}
          >
            <Text
              style={{ fontSize: 45, fontWeight: "bold", letterSpacing: 2 }}
            >
              Hello
            </Text>
            <Text
              style={{
                fontSize: 18,
                fontWeight: "bold",
                letterSpacing: 2,
                color: "grey",
              }}
            >
              Sign in to your account
            </Text>
          </View>
          <View style={styles.formContainer}>
            {auth.error && (
              <Text style={{ color: "red", textAlign: "center" }}>
                {auth.error.loginError}
              </Text>
            )}
            <View style={{ marginBottom: 50 }}>
              <View style={styles.textField}>
                <Entypo
                  name="email"
                  size={20}
                  color="black"
                  style={{ marginRight: 30, elevation: 20 }}
                />
                <TextInput
                  style={{ color: "grey" }}
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
                  onChangeText={(text) =>
                    this.handleTextChange("password", text)
                  }
                />
              </View>
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
              Login
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
          <Text style={{ fontSize: 15, color: "#fff" }}>Login with Google</Text>
        </TouchableOpacity> */}
          <View
            style={{
              flexDirection: "row",
              justifyContent: "center",
              marginTop: 10,
            }}
          >
            <Text style={{ marginRight: 10 }}>Don't have an account?</Text>
            <TouchableOpacity onPress={() => navigation.navigate("register")}>
              <Text style={{ color: "skyblue" }}>Register</Text>
            </TouchableOpacity>
          </View>
        </ScrollView>
      </View>
    );
  }
}
const mstp = (state) => {
  // console.log(state.auth.isLoggedIn)
  return {
    auth: state.auth,
  };
};

export default connect(mstp, { signIn })(Login);

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
    paddingHorizontal: 10,
  },
  textField: {
    lineHeight: 30,
    marginVertical: 15,
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
    marginBottom: 70,
    paddingHorizontal: 35,
    paddingVertical: 15,
    alignSelf: "flex-end",
    justifyContent: "flex-end",
    flexDirection: "row",
    marginHorizontal: 15,
    backgroundColor: "skyblue",
    padding: 10,
    borderRadius: 50,
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
});
