import { Provider } from "react-redux";

// component imports:
import AppNav from "./components/navigators/AppNav";
import { AuthProvider } from "./context/AuthContext";
import store from "./redux/store";

export default function App() {
  return (
    <AuthProvider>
      <Provider store={store}>
        <AppNav />
      </Provider>
    </AuthProvider>
  );
}
