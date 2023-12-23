import { SafeAreaProvider } from "react-native-safe-area-context";
import Login from "./src/screens/Login";
import { Provider } from "react-redux";
import store, { persistor } from "./src/redux/store";
import Register from "./src/screens/Register";
import { PersistGate } from "redux-persist/integration/react";
import { MainNavigation } from "./src/naviagation/MainNavigation";
import FlashMessage from "react-native-flash-message";


export default function App() {



  return (
    <SafeAreaProvider>
      <Provider store={store}>
        <PersistGate persistor={persistor} loading={null} >
          <MainNavigation />
        </PersistGate>
      </Provider>
      <FlashMessage position="top" />
    </SafeAreaProvider>
  );
}


