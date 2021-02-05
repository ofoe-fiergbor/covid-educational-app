import React from "react";
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  TextInput,
  ScrollView,
  Image,
  Dimensions,
} from "react-native";
import blob1 from "../img/blob1.png";
import blob2 from "../img/blob2.png";
import { Entypo, FontAwesome5, FontAwesome } from "@expo/vector-icons";
import WavyHeader from "../components/WavyHeader/WavyHeader";
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
          <WavyHeader
            customStyles={styles.svgCurve}
            customHeight={200}
            customTop={170}
            customBgColor="#061C56"
            customWavePattern="M0,160L48,133.3C96,107,192,53,288,58.7C384,64,480,128,576,154.7C672,181,768,171,864,165.3C960,160,1056,160,1152,176C1248,192,1344,224,1392,240L1440,256L1440,0L1392,0C1344,0,1248,0,1152,0C1056,0,960,0,864,0C768,0,672,0,576,0C480,0,384,0,288,0C192,0,96,0,48,0L0,0Z"
          />
          <View style={styles.header}>
            <TouchableOpacity onPress={() => navigation.navigate("login")}>
              <FontAwesome
                name="long-arrow-left"
                size={24}
                color="#fff"
                style={styles.backBtn}
              />
            </TouchableOpacity>
            <View style={styles.headerContainer}>
              <Text style={styles.headerText}>Create</Text>
              <Text style={styles.headerText}>Account</Text>
            </View>
          </View>
          <View style={styles.formContainer}>
            <View style={styles.textField}>
              <FontAwesome5
                name="user-alt"
                size={17}
                color="#545454"
                style={{ marginRight: 30, elevation: 20 }}
              />
              <TextInput
                style={{ paddingRight: 100 }}
                placeholder="First Name"
                returnKeyType="next"
                placeholderTextColor="#545454"
                value={this.state.firstName}
                onChangeText={(text) =>
                  this.handleTextChange("firstName", text)
                }
              />
            </View>
            <View style={styles.textField}>
              <FontAwesome5
                name="user-alt"
                size={17}
                color="#545454"
                style={{ marginRight: 30, elevation: 20 }}
              />
              <TextInput
                style={{ paddingRight: 100 }}
                placeholder="Last Name"
                placeholderTextColor="#545454"
                value={this.state.lastName}
                onChangeText={(text) => this.handleTextChange("lastName", text)}
              />
            </View>
            <View style={styles.textField}>
              <Entypo
                name="email"
                size={17}
                color="#545454"
                style={{ marginRight: 30, elevation: 20 }}
              />
              <TextInput
                style={{ paddingRight: 150 }}
                placeholder="Email"
                keyboardType="email-address"
                autoCapitalize="none"
                placeholderTextColor="#545454"
                value={this.state.email}
                onChangeText={(text) => this.handleTextChange("email", text)}
              />
            </View>
            <View style={styles.textField}>
              <Entypo
                name="lock"
                size={17}
                color="#545454"
                style={{ marginRight: 30, elevation: 20 }}
              />
              <TextInput
                style={{ width: 120 }}
                placeholder="Password"
                secureTextEntry={true}
                placeholderTextColor="#545454"
                autoCapitalize="none"
                value={this.state.password}
                onChangeText={(text) => this.handleTextChange("password", text)}
              />
            </View>
          </View>
          <TouchableOpacity onPress={this.handleSubmit}>
            <Text style={styles.registerBtn}>Register</Text>
          </TouchableOpacity>
          <View style={styles.option}>
            <View style={styles.line} />
            <Text style={styles.lineText}>or</Text>
            <View style={styles.line} />
          </View>
          <TouchableOpacity onPress={() => navigation.navigate("login")}>
            <Text style={styles.registerBtn2}>Log In</Text>
          </TouchableOpacity>
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
    marginVertical: 5,
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
    marginVertical: 10,
  },

  headerText: {
    marginHorizontal: 30,
    fontFamily: "Quicksand_700Bold",
    color: "#fff",
    fontSize: 30,
    marginBottom: 10,
  },
  headerContainer: {
    marginVertical: 10,
  },
  backBtn: {
    margin: 30,
  },
  svgCurve: {
    position: "absolute",
    width: Dimensions.get("window").width,
  },
  option: {
    flexDirection: "row",
    marginHorizontal: 30,
    alignItems: "center",
    justifyContent: "space-between",
    marginVertical: 20,
  },

  line: {
    borderBottomColor: "#545454",
    borderBottomWidth: 1,
    width: 120,
  },
  lineText: {
    fontFamily: "Quicksand_700Bold",
    fontSize: 16,
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
    borderWidth: 1,
  },
});
