import { createNativeStackNavigator } from "@react-navigation/native-stack";

// component imports:
import HomePage from "../pages/HomePage";

const Stack = createNativeStackNavigator();

// component that handles the navigation between screens / pages.
export default function StackNavigator() {
  return (
    <Stack.Navigator initialRouteName="Home">
      <Stack.Screen name="Home" component={HomePage} />
    </Stack.Navigator>
  );
}
