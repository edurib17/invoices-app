import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import HomeScreen from "./src/screens/HomeScreen";
import { NativeBaseProvider } from "native-base";
import DetailsScreen from "./src/screens/DetailsScreen";

export default function App() {
  const Stack = createNativeStackNavigator();
  return (
    <NativeBaseProvider>
      <NavigationContainer>
        <Stack.Navigator initialRouteName="Home" screenOptions={{headerShown:false}}>
          <Stack.Screen name="Home" component={HomeScreen}  />
          <Stack.Screen name="Details" component={DetailsScreen}  />
        </Stack.Navigator>
      </NavigationContainer>
    </NativeBaseProvider>
  );
}
