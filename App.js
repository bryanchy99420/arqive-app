import "react-native-gesture-handler";
import { NavigationContainer } from "@react-navigation/native";
import AppNav from "./src/navigators/AppNav";

//starting point of our app!
//The NavigationContainer component is only ever used once in entire app.
//Our AppNav navigator will contain all navigators for our app!
export default function App() {
  return (
    <NavigationContainer>
      <AppNav />
    </NavigationContainer>
  );
}
