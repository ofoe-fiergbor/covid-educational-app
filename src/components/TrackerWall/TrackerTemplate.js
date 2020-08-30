import React from "react";
import { Text, StyleSheet, View } from "react-native";
import { AntDesign } from "@expo/vector-icons";

export default function TrackerTemplate(props) {

  function numberWithCommas(x) {
    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}
  const {
    recoveries,
    fatalities,
    date,
    time,
    newCases,
    confirmedCases,
  } = props.coronaData;
  return (
    <View style={styles.container}>
      <View style={styles.top__header}>
        <View style={{ margin: 30 }}>
          <Text
            style={{
              color: "#fff",
              fontSize: 25,
              fontWeight: "bold",
              marginBottom: 10,
            }}
          >
            Good Day
          </Text>
          <Text
            style={{
              color: "#fff",
              fontWeight: "bold",
              fontSize: 18,
              marginBottom: 10,
            }}
          >
            All Covid -19 Cases Update
          </Text>
          <Text style={{ color: "#eee", fontWeight: "bold" }}>Ghana</Text>
        </View>
        <View style={{ flexDirection: "column" }}>
          <View
            style={{
              flexDirection: "row",
              justifyContent: "space-between",
              marginHorizontal: 20,
            }}
          >
            <View style={styles.cards}>
              <AntDesign
                name="adduser"
                size={25}
                color="#fff"
                style={{
                  backgroundColor: "#ffab2e",
                  justifyContent: "flex-start",
                  width: 35,
                  padding: 5,
                  elevation: 5,
                  borderRadius: 5,
                  marginBottom: 7,
                }}
              />
              <Text
                style={{ color: "#a9b6ba", elevation: 10, marginBottom: 5 }}
              >
                New Cases
              </Text>
              <Text style={{ color: "#000", fontWeight: "bold", fontSize: 17 }}>
               {numberWithCommas(newCases)}
              </Text>
            </View>
            <View style={styles.cards}>
              <AntDesign
                name="addusergroup"
                size={25}
                color="#fff"
                style={{
                  backgroundColor: "#1fd0e0",
                  justifyContent: "flex-start",
                  width: 35,
                  padding: 5,
                  elevation: 5,
                  borderRadius: 5,
                  marginBottom: 7,
                }}
              />
              <Text
                style={{ color: "#a9b6ba", elevation: 10, marginBottom: 5 }}
              >
                Recovered
              </Text>
              <Text style={{ color: "#000", fontWeight: "bold", fontSize: 17 }}>
                {numberWithCommas(recoveries)}
              </Text>
            </View>
          </View>
          <View
            style={{
              flexDirection: "row",
              justifyContent: "space-between",
              marginHorizontal: 20,
            }}
          >
            <View style={styles.cards}>
              <AntDesign
                name="deleteuser"
                size={25}
                color="#fff"
                style={{
                  backgroundColor: "#ff0f0f",
                  justifyContent: "flex-start",
                  width: 35,
                  padding: 5,
                  elevation: 5,
                  borderRadius: 5,
                  marginBottom: 7,
                }}
              />
              <Text
                style={{ color: "#a9b6ba", elevation: 10, marginBottom: 5 }}
              >
                Infected{" "}
              </Text>
              <Text style={{ color: "#000", fontWeight: "bold", fontSize: 17 }}>
                {numberWithCommas(confirmedCases)}
              </Text>
            </View>
            <View style={styles.cards}>
              <AntDesign
                name="deleteusergroup"
                size={25}
                color="#fff"
                style={{
                  backgroundColor: "#000",
                  justifyContent: "flex-start",
                  width: 35,
                  padding: 5,
                  elevation: 5,
                  borderRadius: 5,
                  marginBottom: 7,
                }}
              />
              <Text
                style={{ color: "#a9b6ba", elevation: 10, marginBottom: 5 }}
              >
                Deaths{" "}
              </Text>
              <Text style={{ color: "#000", fontWeight: "bold", fontSize: 17 }}>
                {numberWithCommas(fatalities)}
              </Text>
            </View>
          </View>
          <View
            style={{
              flexDirection: "row",
              justifyContent: "space-between",
              elevation: 5,
              backgroundColor: "#d8e1eb",
              height: 50,
              alignItems: "center",
              marginHorizontal: 20,
              borderRadius: 10,
              padding: 10,
            }}
          >
            <Text>As at: {date}</Text>
            <Text>Time: {time}</Text>
          </View>
        </View>
      </View>
      <View style={styles.bottom__details}></View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#d8e1eb",
  },
  top__header: {
    backgroundColor: "#326da8",
    flex: 4,
    borderBottomLeftRadius: 100,
    borderBottomRightRadius: 100,
  },
  bottom__details: {
    flex: 6,
    flexDirection: "row",
    justifyContent: "space-between",
    marginHorizontal: 20,
  },
  cards: {
    backgroundColor: "#fff",
    height: 140,
    width: 140,
    elevation: 6,
    borderRadius: 10,
    marginVertical: 5,
    paddingVertical: 40,
    paddingHorizontal: 30,
  },
});
