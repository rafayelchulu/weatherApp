import {
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  TextInput,
  KeyboardAvoidingView,
  Platform,
  ScrollView,
} from "react-native";
import React from "react";
import { LinearGradient } from "expo-linear-gradient";

import Svg, { Path } from "react-native-svg";

import { useNavigation } from "@react-navigation/native";

function SearchScreen() {
  const [typed, setTyped] = React.useState(false);
  const [str1, setCity] = React.useState(" ");

  const navigation = useNavigation();

  const onChangeText = (text) => {
    setTyped(true);
    setCity(text);
  };

  const submitSearch = () => {
    if (str1 !== " ") {
      navigation.navigate("ResultScreen", { str1: str1 });
    }
  };

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === "ios" ? "padding" : "height"}
      style={{
        flex: 1,
      }}
    >
      <ScrollView
        style={{
          flex: 1,
        }}
        scrollEnabled
        contentContainerStyle={{
          justifyContent: "center",
          alignItems: "center",
          flex: 1,
        }}
      >
        <LinearGradient
          colors={["#005C97", "#1F4696"]}
          style={styles.container}
        >
          <View style={styles.hewa_container}>
            <Text style={styles.text}>
              Hewa <View style={styles.round} />
            </Text>
          </View>
          <View style={styles.input_container}>
            <TextInput
              onChangeText={onChangeText}
              value={str1}
              placeholder="Enter city name to search"
              placeholderTextColor="gray"
              keyboardType="text"
              style={styles.input_style}
            />
            <TouchableOpacity onPress={() => submitSearch()} style={styles.btn}>
              <Text style={styles.text_btn}>Search</Text>
            </TouchableOpacity>
          </View>

          {typed === false && (
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
          )}
        </LinearGradient>
      </ScrollView>
    </KeyboardAvoidingView>
  );
}

export default SearchScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    position: "relative",
    width: "100%",
  },
  hewa_container: {
    margin: 60,
    justifyContent: "center",
    alignItems: "center",
  },

  text: {
    color: "#FFFFFF",
    fontWeight: "700",
    fontSize: 30,
    lineHeight: 70.9,
  },
  round: {
    height: 10,
    width: 10,
    borderRadius: 100,
    backgroundColor: "#FFA500",
  },
  input_container: {
    marginTop: 30,
    justifyContent: "center",
    alignItems: "center",
  },
  input_style: {
    height: 40,
    width: 250,
    borderWidth: 1.5,
    borderColor: "white",
    paddingHorizontal: 40,
    borderRadius: 10,
    color: "gray",
  },
  btn: {
    marginTop: 30,
    paddingVertical: 10,
    paddingHorizontal: 40,
    backgroundColor: "#FFA500",
    borderRadius: 10,
  },
  text_btn: {
    color: "white",
    textTransform: "capitalize",
    fontWeight: "700",
  },
});
