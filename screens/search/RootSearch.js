import { createNativeStackNavigator } from "@react-navigation/native-stack";
import ResultScreen from "./ResultScreen";
import SearchScreen from "./SearchScreen";

const Stack = createNativeStackNavigator();

const RootSearch = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}
    >
      <Stack.Screen name="SearchScreen" component={SearchScreen} />
      <Stack.Screen name="ResultScreen" component={ResultScreen} />
    </Stack.Navigator>
  );
};

export default RootSearch;
