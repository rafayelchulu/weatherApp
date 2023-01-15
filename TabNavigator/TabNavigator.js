import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import HomeScreen from "../screens/HomeScreen";

// You can import Ionicons from @expo/vector-icons/Ionicons if you use Expo or
// react-native-vector-icons/Ionicons otherwise.
import Ionicons from "react-native-vector-icons/Ionicons";
import Fontisto from "react-native-vector-icons/Fontisto"; // Home
import UndoScreen from "../screens/UndoScreen";
import RootSearch from "../screens/search/RootSearch";

const Tab = createBottomTabNavigator();
function TabNavigator() {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        headerShown: false,
        tabBarIcon: ({ focused, color, size }) => {
          let iconName;

          if (route.name === "Home") {
            iconName = focused ? "home" : "home";
          } else if (route.name === "Search") {
            iconName = focused ? "search" : "search";
          } else if (route.name === "Undo") {
            iconName = focused ? "arrow-undo-outline" : "arrow-undo-outline";
          }

          if (route.name !== "Undo") {
            return <Fontisto name={iconName} size={size} color={color} />;
          }
          return <Ionicons name={iconName} size={size} color={color} />;
        },
        tabBarActiveTintColor: "#FFA500",
        tabBarInactiveTintColor: "#FFFFFF",
      })}
      tabBarOptions={{
        tabBarActiveBackgroundColor: "blue",
        tabBarInactiveBackgroundColor: "blue",
        showLabel: false,
        activeBackgroundColor: "blue",
        inactiveBackgroundColor: "blue",
        style: {
          backgroundColor: "blue",
          padding: 0,
        },
      }}
    >
      <Tab.Screen name="Home" component={HomeScreen} />
      <Tab.Screen name="Search" component={RootSearch} />
      <Tab.Screen name="Undo" component={UndoScreen} />
    </Tab.Navigator>
  );
}

export default TabNavigator;
