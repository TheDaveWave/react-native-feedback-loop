import { createNativeStackNavigator } from "@react-navigation/native-stack";

// component imports:
import HomePage from "../pages/HomePage";
import FeelingPage from "../pages/FeelingPage";
import SupportPage from "../pages/SupportPage";
import UnderstandingPage from "../pages/UnderstandPage";
import CommentPage from "../pages/CommentPage";
import ReviewPage from "../pages/ReviewPage";
import SuccessPage from "../pages/SuccessPage";

/**
 * App should move through the pages in the following order:
 * Feeling Page
 * Support Page
 * Understanding Page
 * Comment Page
 * Review Page
 * Success Page
*/

// set createNativeStackNavigator to Stack.
const Stack = createNativeStackNavigator();

// component that handles the navigation between screens / pages.
export default function StackNavigator() {
  return (
    // create a navigation stack and set the default route to Home.
    <Stack.Navigator initialRouteName="Home">
      <Stack.Screen name="Home" component={HomePage} />
      <Stack.Screen name="Feeling" component={FeelingPage} />
      <Stack.Screen name="Support" component={SupportPage} />
      <Stack.Screen name="Understand" component={UnderstandingPage} />
      <Stack.Screen name="Comment" component={CommentPage} />
      <Stack.Screen name="Review" component={ReviewPage} />
      <Stack.Screen name="Success" component={SuccessPage} />
    </Stack.Navigator>
  );
}
