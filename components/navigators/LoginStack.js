import { createNativeStackNavigator } from "@react-navigation/native-stack";

// component imports:
import SignupPage from "../pages/SignupPage";
import LoginPage from "../pages/LoginPage";

const Stack = createNativeStackNavigator();

export default function LoginStack() {
  return (
    <Stack.Navigator
      initialRouteName="Login"
      screenOptions={{
        headerTintColor: "#fff",
        headerShown: false,
        headerTransparent: true,
      }}
    >
      <Stack.Screen
        name="Signup"
        component={SignupPage}
        options={{
          headerShown: true,
          headerBackVisible: false,
        }}
      />
      <Stack.Screen
        name="Login"
        component={LoginPage}
        options={{
          headerShown: true,
          headerBackVisible: false,
        }}
      />
    </Stack.Navigator>
  );
}
