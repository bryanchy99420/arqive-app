import { createStackNavigator } from "@react-navigation/stack";
import LoginScreen from "../screens/LoginScreen";
import TabNav from "./TabNav";
import LoginRegisterScreen from "../screens/LoginRegisterScreen";
import RegisterScreen from "../screens/RegisterScreen";
import eulaScreen from "../screens/eulaScreen";

const Stack = createStackNavigator();

//importing our screens that our navigators must handle
export default function AppNav() {
	return (
		<Stack.Navigator
			initialRouteName="LoginRegister"
			screenOptions={{ headerShown: false }}
		>
			<Stack.Screen name="LoginRegister" component={LoginRegisterScreen} />
			<Stack.Screen name="Login" component={LoginScreen} />
			<Stack.Screen name="Register" component={RegisterScreen} />
			<Stack.Screen name="TabNav" component={TabNav} />
			<Stack.Screen name="EULA" component={eulaScreen} />
		</Stack.Navigator>
	);
}
