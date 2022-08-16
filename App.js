import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, Text, View, Image } from "react-native";
import { AntDesign } from "@expo/vector-icons";

export default function App() {
  return (
    <View style={styles.container}>
      <View style={styles.coinContainer}>
        <Image
          source={{
            uri: "https://assets.coingecko.com/coins/images/1/large/bitcoin.png?1547033579",
          }}
          style={{
            height: 40,
            width: 40,
            marginRight: 10,
            alignSelf: "center",
          }}
        />
        <View>
          <Text style={styles.title}>Bitcoin</Text>
          <View style={{ flexDirection: "row" }}>
            <View style={styles.rankContainer}>
              <Text style={styles.rank}>1</Text>
            </View>
            <Text style={styles.text}>BTC</Text>
            <AntDesign
              name="caretdown"
              size={12}
              color="red"
              style={{ alignSelf: "center", marginRight: 5 }}
            />
            <Text style={styles.text}>0,63%</Text>
          </View>
        </View>
        <View style={{ marginLeft: "auto" }}>
          <Text style={styles.title}>56265.09</Text>
          <Text style={styles.text}>MCap 1.076 T</Text>
        </View>
      </View>
      <StatusBar style="light" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#121212",
    paddingTop: 50,
  },
  title: {
    color: "white",
    fontSize: 16,
    fontWeight: "bold",
    marginBottom: 5,
  },
  text: {
    color: "white",
    marginRight: 5,
  },
  coinContainer: {
    flexDirection: "row",
    borderBottomWidth: StyleSheet.hairlineWidth,
    // borderBottomColor: '#282828',
    borderBottomColor: "grey",
    padding: 15,
    justifyContent: "space-between",
  },
  rank: {
    fontWeight: "bold",
    color: "white",
  },
  rankContainer: {
    backgroundColor: '#585858',
    paddingHorizontal: 5,
    borderRadius: 5,
    marginRight: 5,
  }
});
