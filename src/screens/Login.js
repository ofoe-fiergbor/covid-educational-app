import React from "react";
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  TextInput,
} from "react-native";
import { connect } from "react-redux";
import { signIn } from "../Redux/Action/AuthActions";

class Login extends React.Component {
  constructor(props) {
    super(props)
  
    this.state = {
       email:'',
       password:'',
    }
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
        <Text style={{ alignSelf: "center", fontSize: 30 }}>Login</Text>
        <View style={styles.formContainer}>
        {auth.error && <Text style={{color:'red', textAlign:'center'}}>{auth.error.loginError}</Text>}
          <TextInput
            placeholder="Email"
            style={styles.textField}
            keyboardType="email-address"
            value={this.state.email}
            onChangeText={(text) => this.handleTextChange("email", text)}
          />
          <TextInput
            placeholder="Password"
            style={styles.textField}
            secureTextEntry={true}
            value={this.state.password}
            onChangeText={(text) => this.handleTextChange("password", text)}
          />
        </View>
        <TouchableOpacity style={styles.registerBtn} onPress={this.handleSubmit}>
          <Text style={{ fontSize: 15 }}>Login</Text>
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
          <Text style={{ marginRight: 10 }}>You don't have an account?</Text>
          <TouchableOpacity onPress={() => navigation.navigate("register")}>
            <Text style={{color:'navy'}}>Register</Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}
const mstp = state =>{
  // console.log(state.auth.isLoggedIn)
  return{
    auth: state.auth
  }
}

export default connect(mstp, { signIn })(Login);

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
