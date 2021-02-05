import React from "react";
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  TextInput,
  Image,
  ScrollView,
  Dimensions,
} from "react-native";
import { connect } from "react-redux";
import { signIn } from "../Redux/Action/AuthActions";
import { Entypo, Feather, FontAwesome } from "@expo/vector-icons";
import WavyHeader from "../components/WavyHeader/WavyHeader";

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
          <WavyHeader
            customStyles={styles.svgCurve}
            customHeight={230}
            customTop={200}
            customBgColor="#061C56"
            customWavePattern="M0,96L48,112C96,128,192,160,288,186.7C384,213,480,235,576,213.3C672,192,768,128,864,128C960,128,1056,192,1152,208C1248,224,1344,192,1392,176L1440,160L1440,0L1392,0C1344,0,1248,0,1152,0C1056,0,960,0,864,0C768,0,672,0,576,0C480,0,384,0,288,0C192,0,96,0,48,0L0,0Z"
          />
          <View style={styles.header}>
            <TouchableOpacity onPress={() => navigation.navigate("welcome")}>
              <FontAwesome
                name="long-arrow-left"
                size={24}
                color="#fff"
                style={styles.backBtn}
              />
            </TouchableOpacity>
            <View style={styles.headerContainer}>
              <Text style={styles.headerText}>Welcome</Text>
              <Text style={styles.headerText}>Back</Text>
            </View>
          </View>
          <View style={styles.formContainer}>
            {auth.error && (
              <Text style={{ color: "red", textAlign: "center" }}>
                {auth.error.loginError}
              </Text>
            )}

            <View style={{ marginBottom: 20 }}>
              <View style={styles.textField}>
                <Entypo
                  name="email"
                  keyboardType="email-address"
                  size={20}
                  color="#545454"
                  style={{ marginRight: 30 }}
                />
                <TextInput
                  style={{ color: "grey" }}
                  placeholder="Email"
                  keyboardType="email-address"
                  autoCapitalize="none"
                  value={this.state.email}
                  placeholderTextColor="#545454"
                  onChangeText={(text) => this.handleTextChange("email", text)}
                />
              </View>
              <View style={styles.textField}>
                <Entypo
                  name="lock"
                  size={20}
                  color="#545454"
                  style={{ marginRight: 30 }}
                />
                <TextInput
                  placeholder="Password"
                  secureTextEntry={true}
                  autoCapitalize="none"
                  value={this.state.password}
                  placeholderTextColor="#545454"
                  onChangeText={(text) =>
                    this.handleTextChange("password", text)
                  }
                />
              </View>
            </View>
          </View>
          <TouchableOpacity onPress={this.handleSubmit}>
            <Text style={styles.registerBtn}>Login</Text>
          </TouchableOpacity>
          <View style={styles.option}>
            <View style={styles.line}/>
            <Text style={styles.lineText}>or</Text>
            <View style={styles.line}/>
          </View>
          <TouchableOpacity onPress={()=>navigation.navigate("register")}>
            <Text style={styles.registerBtn2}>Sign Up</Text>
          </TouchableOpacity>
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
    backgroundColor: "#fff",
    flexDirection: "column",
  },
  btn: {
    marginVertical: 50,
    backgroundColor: "skyblue",
    width: 100,
    justifyContent: "center",
    alignItems: "center",
    height: 40,
  },
  header: {
    flex: 4,
  },
  formContainer: {
    paddingHorizontal: 10,
    paddingTop: 40,
    flex: 6,
  },
  textField: {
    lineHeight: 30,
    marginVertical: 10,
    fontSize: 20,
    borderBottomColor: "#545454",
    paddingHorizontal: 20,
    paddingVertical: 10,
    borderRadius: 50,
    flexDirection: "row",
    fontFamily: "Quicksand_700Bold",
    alignItems: "center",
    borderBottomWidth: 1,
  },
  registerBtn: {
    lineHeight: 30,
    fontSize: 20,
    paddingHorizontal: 20,
    paddingVertical: 10,
    borderRadius: 5,
    flexDirection: "row",
    fontFamily: "Quicksand_700Bold",
    textAlign: "center",
    backgroundColor: "#0e0a8f",
    color: "#fff",
    marginHorizontal: 30,
  },
  registerBtn2: {
    lineHeight: 30,
    fontSize: 20,
    paddingHorizontal: 20,
    paddingVertical: 10,
    borderRadius: 5,
    flexDirection: "row",
    fontFamily: "Quicksand_700Bold",
    textAlign: "center",
    borderColor: "#0e0a8f",
    color: "#0e0a8f",
    marginHorizontal: 30,
    borderWidth: 1
  },
  svgCurve: {
    position: "absolute",
    width: Dimensions.get("window").width,
  },
  headerText: {
    marginHorizontal: 30,
    fontFamily: "Quicksand_700Bold",
    color: "#fff",
    fontSize: 30,
    marginBottom: 10,
  },
  headerContainer: {
    marginVertical: 30,
  },
  backBtn: {
    margin: 30,
  },
  option:{
    flexDirection: "row",
    marginHorizontal: 30,
    alignItems: "center",
    justifyContent: "space-between",
    marginVertical: 30
  },

  line:{
    borderBottomColor: "#545454",
    borderBottomWidth: 1,
    width: 120
  },
  lineText:{
    fontFamily: "Quicksand_700Bold",
    fontSize: 16
  }
});
