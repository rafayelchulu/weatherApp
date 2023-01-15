import { Image, StyleSheet, Text, View, Dimensions } from "react-native";
import React from "react";

import Ionicons from "react-native-vector-icons/Ionicons";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import { LinearGradient } from "expo-linear-gradient";

import LoadingScreen from "./LoadingScreen";

import Svg, { Path } from "react-native-svg";
import { SearchWeather } from "../config/SearchWeather";
const height = Dimensions.get("window").height;

function HomeScreen() {
  const [loading, setLoading] = React.useState(true);
  const [currentDate, setCurrentDate] = React.useState("");
  const [hours, setHours] = React.useState("");
  const city = "Dar es Salaam";
  const result = SearchWeather(city);

  React.useEffect(() => {
    let date = new Date().getDate(); //Current Date
    let month = new Date().getMonth() + 1; //Current Month
    let year = new Date().getFullYear(); //Current Year
    let day = new Date().getDay();
    let hours = new Date().getHours(); //Current Hours
    let min = new Date().getMinutes(); //Current Minutes
    let sec = new Date().getSeconds(); //Current Seconds
    setHours(hours + ":" + min + ":" + sec + ":");
    setCurrentDate(date + "/" + month + "/" + year + ",  " + day);
    setLoading(false);
  }, []);

  return (
    <>
      {loading ? (
        <>
          <LoadingScreen />
        </>
      ) : (
        <>
          {result && (
            <LinearGradient
              colors={["#005C97", "#1F4696"]}
              style={styles.container}
            >
              <View style={styles.hewa_container}>
                <Text style={styles.text}>
                  Hewa <View style={styles.round} />
                </Text>
              </View>
              <View style={styles.container_ds}>
                <Ionicons name="location" size={24} color="#FFA500" />
                <Text style={styles.text_ds}>{result.name}</Text>
              </View>
              <View
                style={{
                  width: 200,
                  paddingRight: 20,
                  marginTop: 60,
                  position: "relative",
                  alignSelf: "center",
                  marginBottom: 10,
                }}
              >
                <Image
                  style={{
                    width: 70,
                    height: 90,
                    alignSelf: "flex-end",
                    position: "absolute",
                    right: 10,
                    top: -60,
                  }}
                  source={{
                    uri: `http://openweathermap.org/img/wn/${result.weather[0].icon}@2x.png`,
                  }}
                  resizeMode={"contain"}
                />
              </View>
              <View
                style={{
                  flexDirection: "row",
                  justifyContent: "space-between",
                  alignItems: "flex-end",
                  width: 100,
                  alignSelf: "center",
                  marginBottom: 10,
                }}
              >
                <Text
                  style={{
                    fontSize: 50,
                    fontWeight: "bold",
                    color: "white",
                  }}
                >
                  {Math.round(result.main.temp)}
                </Text>
                <MaterialCommunityIcons
                  style={{
                    alignSelf: "flex-end",
                  }}
                  name="temperature-celsius"
                  size={34}
                  color="#C6DEFF"
                />
              </View>

              <View
                style={{
                  flexDirection: "row",
                  alignItems: "center",
                  justifyContent: "center",
                  marginBottom: 10,
                }}
              >
                <Text
                  style={{
                    color: "white",
                    fontSize: 20,
                    letterSpacing: 1.6,
                    fontWeight: "400",
                  }}
                >
                  Feels like
                </Text>
                <Text
                  style={{
                    color: "#FFA500",
                    marginLeft: 10,
                  }}
                >
                  {Math.round(result.main.feels_like)}
                </Text>
                <MaterialCommunityIcons
                  style={{
                    alignSelf: "flex-end",
                  }}
                  name="temperature-celsius"
                  size={24}
                  color="#FFA500"
                />
              </View>

              <View
                style={{
                  padding: 10,
                  alignItems: "center",
                  justifyContent: "center",
                  marginBottom: 10,
                }}
              >
                <Text
                  style={{
                    color: "white",
                    fontSize: 20,
                    fontWeight: "500",
                  }}
                >
                  {result.weather[0].main}
                </Text>
              </View>

              <View
                style={{
                  backgroundColor: "#005C97",
                  height: height,
                  paddingTop: 70,
                  alignItems: "center",
                }}
              >
                <Svg
                  height="60%"
                  width="100%"
                  viewBox="0 0 1440 320"
                  style={{ position: "absolute", top: -200 }}
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

                <View
                  style={{
                    justifyContent: "center",
                    alignItems: "center",
                    marginVertical: 20,
                  }}
                >
                  <View
                    style={{
                      flexDirection: "row",
                      justifyContent: "space-between",
                      alignItems: "center",
                      paddingHorizontal: 5,
                      width: 340,
                    }}
                  >
                    <View
                      style={{
                        flexDirection: "row",
                        alignItems: "center",
                        paddingHorizontal: 10,
                      }}
                    >
                      <MaterialCommunityIcons
                        style={{
                          alignSelf: "flex-end",
                        }}
                        name="weather-windy"
                        size={20}
                        color="#C6DEFF"
                      />
                      <Text
                        style={{
                          color: "white",
                          marginLeft: 5,
                          fontWeight: "600",
                          letterSpacing: 1.2,
                          fontSize: 14,
                        }}
                      >
                        Windspeed
                      </Text>
                    </View>
                    <Text
                      style={{
                        color: "white",
                        fontWeight: "500",
                        letterSpacing: 1.2,
                        fontSize: 14,
                      }}
                    >
                      {result.wind.speed && result.wind.speed} m/s
                    </Text>
                  </View>

                  <View
                    style={{
                      flexDirection: "row",
                      justifyContent: "space-between",
                      alignItems: "center",
                      paddingHorizontal: 5,
                      width: 340,
                      paddingVertical: 20,
                    }}
                  >
                    <View
                      style={{
                        flexDirection: "row",
                        alignItems: "center",
                        paddingHorizontal: 10,
                      }}
                    >
                      <MaterialCommunityIcons
                        style={{
                          alignSelf: "flex-end",
                        }}
                        name="timetable"
                        size={20}
                        color="#C6DEFF"
                      />
                      <Text
                        style={{
                          color: "white",
                          marginLeft: 5,
                          fontWeight: "600",
                          letterSpacing: 1.1,
                          fontSize: 14,
                        }}
                      >
                        {currentDate && currentDate}
                      </Text>
                    </View>
                    <Text
                      style={{
                        color: "white",
                        fontWeight: "500",
                        letterSpacing: 1.2,
                        fontSize: 14,
                      }}
                    >
                      {hours && hours}
                    </Text>
                  </View>

                  <View
                    style={{
                      flexDirection: "row",
                      justifyContent: "space-between",
                      alignItems: "center",
                      paddingHorizontal: 5,
                      width: 340,
                    }}
                  >
                    <View
                      style={{
                        flexDirection: "row",
                        alignItems: "center",
                        paddingHorizontal: 10,
                      }}
                    >
                      <MaterialCommunityIcons
                        style={{
                          alignSelf: "flex-end",
                        }}
                        name="weather-pouring"
                        size={20}
                        color="#C6DEFF"
                      />
                      <Text
                        style={{
                          color: "white",
                          marginLeft: 5,
                          fontWeight: "600",
                          letterSpacing: 1.1,
                          fontSize: 14,
                        }}
                      >
                        Humidity
                      </Text>
                    </View>
                    <Text
                      style={{
                        color: "white",
                        fontWeight: "500",
                        letterSpacing: 1.2,
                        fontSize: 14,
                      }}
                    >
                      {result.main && result.main.humidity} %
                    </Text>
                  </View>
                </View>
              </View>
            </LinearGradient>
          )}
        </>
      )}
    </>
  );
}
// location-outline

export default HomeScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // alignItems: "center",
  },
  hewa_container: {
    marginTop: 60,
    marginBottom: 25,
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
  text_ds: {
    color: "#FFFFFF",
    fontWeight: "700",
    fontSize: 28,
    marginLeft: 5,
  },
  container_ds: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
});
