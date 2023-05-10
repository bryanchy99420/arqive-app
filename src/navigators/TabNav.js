import Nearby from "../screens/Nearby";
import Notification from "../screens/Notification";
import Bookmark from "../screens/Bookmark";
import Profile from "../screens/Profile";
import DrawerNav from "./DrawerNav";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Image } from "react-native";
import colors from "../config/colors.js";

const Tab = createBottomTabNavigator();

export default function TabNav() {
	return (
		<Tab.Navigator
			initialRouteName="Login"
			screenOptions={() => ({
				tabBarLabel: () => {
					return null;
				},
				headerShown: false,
				tabBarStyle: { height: 60 },
				tabBarActiveTintColor: colors.white,
				tabBarActiveBackgroundColor: colors.purple,
				tabBarInactiveBackgroundColor: colors.purple,
			})}
		>
			<Tab.Screen
				name="DrawerNav"
				component={DrawerNav}
				options={{
					tabBarIcon: ({ focused }) =>
						focused ? (
							<Image
								source={require("../../assets/map-location-WHITE.png")}
								style={{
									width: 30,
									height: 30,
								}}
							/>
						) : (
							<Image
								source={require("../../assets/map-location-GRAY.png")}
								style={{
									width: 30,
									height: 30,
								}}
							/>
						),
				}}
			/>
			{/* <Tab.Screen
				name="Map"
				options={{
					tabBarIcon: ({ focused }) =>
						focused ? (
							<Image
								source={require("../../assets/map-location-WHITE.png")}
								style={{
									width: 30,
									height: 30,
								}}
							/>
						) : (
							<Image
								source={require("../../assets/map-location-GRAY.png")}
								style={{
									width: 30,
									height: 30,
								}}
							/>
						),
				}}
				component={MapScreen}
			/> */}
			<Tab.Screen
				name="Bookmark"
				options={{
					tabBarIcon: ({ focused }) =>
						focused ? (
							<Image
								source={require("../../assets/bookmark-solid.png")}
								style={{
									width: 20,
									height: 30,
								}}
							/>
						) : (
							<Image
								source={require("../../assets/bookmark-gray.png")}
								style={{
									width: 20,
									height: 30,
								}}
							/>
						),
				}}
				component={Bookmark}
			/>
			<Tab.Screen
				name="Nearby"
				options={{
					tabBarIcon: ({ focused }) =>
						focused ? (
							<Image
								source={require("../../assets/street-view-WHITE.png")}
								style={{
									width: 30,
									height: 30,
								}}
							/>
						) : (
							<Image
								source={require("../../assets/street-view-GRAY.png")}
								style={{
									width: 30,
									height: 30,
								}}
							/>
						),
				}}
				component={Nearby}
			/>
			<Tab.Screen
				name="Notification"
				options={{
					tabBarIcon: ({ focused }) =>
						focused ? (
							<Image
								source={require("../../assets/notif_bell.png")}
								style={{
									width: 25,
									height: 30,
								}}
							/>
						) : (
							<Image
								source={require("../../assets/notif_bell_gray.png")}
								style={{
									width: 25,
									height: 30,
								}}
							/>
						),
				}}
				component={Notification}
			/>
			<Tab.Screen
				name="Profile"
				options={{
					tabBarIcon: ({ focused }) =>
						focused ? (
							<Image
								source={require("../../assets/user-WHITE_ICON.png")}
								style={{
									width: 25,
									height: 30,
								}}
							/>
						) : (
							<Image
								source={require("../../assets/user-GRAY_ICON.png")}
								style={{
									width: 25,
									height: 30,
								}}
							/>
						),
				}}
				component={Profile}
			/>
		</Tab.Navigator>
	);
}
