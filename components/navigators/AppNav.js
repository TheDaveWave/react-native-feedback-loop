import { NavigationContainer } from "@react-navigation/native";
import { StatusBar } from "expo-status-bar";
import { useContext } from "react";
import { AuthContext } from "../../context/AuthContext";
import { ActivityIndicator, View } from "react-native";

// component imports:
import StackNavigator from "./StackNavigator";
import LoginStack from "./LoginStack";

export default function AppNav() {
  const { loading, userToken } = useContext(AuthContext);

  if (loading) {
    return (
      <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
        <ActivityIndicator size="large" />
      </View>
    );
  }

  return (
    <NavigationContainer>
      {userToken !== null ? <StackNavigator /> : <LoginStack />}
      <StatusBar style="auto" />
    </NavigationContainer>
  );
}
