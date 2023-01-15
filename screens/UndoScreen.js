import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React, { useEffect } from "react";
import { LinearGradient } from "expo-linear-gradient";

import Svg, { Path } from "react-native-svg";

import { useNavigation } from "@react-navigation/native";

function UndoScreen() {
  const navigation = useNavigation();

  // useEffect(() => {
  //   navigation.navigate("Home");
  // }, []);
  return (
    <LinearGradient colors={["#005C97", "#1F4696"]} style={styles.container}>
      <Text style={styles.text}>
        Hewa <View style={styles.round} />
      </Text>
      <TouchableOpacity
        onPress={() => navigation.navigate("Home")}
        style={{
          paddingHorizontal: 60,
          paddingVertical: 10,
          backgroundColor: "yellow",
          justifyContent: "center",
          alignItems: "center",
          alignSelf: "center",
          borderRadius: 10,
          marginTop: 20,
        }}
      >
        <Text
          style={{
            color: "black",
          }}
        >
          Clear
        </Text>
      </TouchableOpacity>
      <View
        style={{
          backgroundColor: "#005C97",
          height: 260,
          paddingTop: 70,
          alignItems: "center",
          position: "absolute",
          bottom: 0,
          left: 0,
          right: 0,
        }}
      >
        <Svg
          height="60%"
          width="100%"
          viewBox="0 0 1440 320"
          style={{ position: "absolute", top: -16 }}
        >
          <Path
            fill="#1949A8"
            d="M0,96L48,112C96,128,192,160,288,186.7C384
            ,213,480,235,576,213.3C672,192,768,128,864,
            128C960,128,1056,192,1152,208C1248,224,1344,192,
            1392,176L1440,160L1440,0L1392,0C1344,0,1248,0,
            1152,0C1056,0,960,0,864,0C768,0,672,0,576,0C480,0,
            384,0,288,0C192,0,96,0,48,0L0,0Z"
          />
        </Svg>
      </View>
    </LinearGradient>
  );
}

export default UndoScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    // alignItems: "center",
    position: "relative",
  },

  text: {
    color: "#FFFFFF",
    fontWeight: "700",
    fontSize: 60,
    lineHeight: 70.9,
    alignSelf: "center",
  },
  round: {
    height: 20,
    width: 20,
    borderRadius: 100,
    backgroundColor: "#FFA500",
  },
});
