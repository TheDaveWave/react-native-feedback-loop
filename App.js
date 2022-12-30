import { NavigationContainer } from "@react-navigation/native";
import { StatusBar } from "expo-status-bar";

// component imports:
import StackNavigator from "./components/navigators/StackNavigator";

export default function App() {
  return (
    <NavigationContainer>
        <StackNavigator />
        <StatusBar style="auto" />
    </NavigationContainer>
  );
}
