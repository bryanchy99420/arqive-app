import React, { useState } from "react";
import { View, StyleSheet, Text, Image } from "react-native";
import { DrawerContentScrollView, DrawerItem } from "@react-navigation/drawer";
import { Drawer } from "react-native-paper";
import { Switch } from "react-native-gesture-handler";
import { useNavigation } from "@react-navigation/native";
import colors from "../config/colors";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";

// import testing from "../modals/testing";

export function DrawerContent(props) {
	const [isEnabled, setIsEnabled] = useState(false);
	const toggleSwitch = () => setIsEnabled((previousState) => !previousState);
	const navigation = useNavigation();

	return (
		<View style={styles.container}>
			<DrawerContentScrollView {...props}>
				<View style={styles.drawerContent}>
					<View style={styles.userInfo}>
						<Image
							style={styles.userImage}
							source={require("../../assets/username.png")}
						></Image>
						<Text style={styles.username}>__Username__</Text>
					</View>
					<View style={styles.settings}>
						<Text style={styles.options}>options</Text>
						<View
							style={{
								flexDirection: "row",
								alignItems: "center",
								justifyContent: "space-between",
							}}
						>
							<Text style={styles.anonBtn}>anon on ?</Text>
							<Switch
								trackColor={{ false: colors.gray, true: colors.success }}
								thumbColor={colors.white}
								ios_backgroundColor="#3e3e3e"
								onValueChange={toggleSwitch}
								value={isEnabled}
							/>
						</View>
						<DrawerItem
							label="settings"
							labelStyle={styles.drawerItems}
							onPress={() => console.log("go to setting page")}
						/>
					</View>
					<View style={styles.resources}>
						<DrawerItem
							label="help & hotline"
							labelStyle={styles.drawerItems}
							onPress={() => {
								navigation.navigate("helpAndHotlineModal");
							}}
						/>
						<DrawerItem
							label="support us"
							labelStyle={styles.drawerItems}
							onPress={() => {
								navigation.navigate("supportUsModal");
							}}
						/>
						<DrawerItem
							label="contact us"
							labelStyle={styles.drawerItems}
							onPress={() => {
								navigation.navigate("contactUsModal");
							}}
						/>
						<DrawerItem
							label="FAQ's"
							labelStyle={styles.drawerItems}
							onPress={() => {
								navigation.navigate("faqsModal");
							}}
						/>
						<DrawerItem
							label="terms of service"
							labelStyle={styles.drawerItems}
							onPress={() => {
								navigation.navigate("TosModal");
							}}
						/>
						<DrawerItem
							label="privacy policy"
							labelStyle={styles.drawerItems}
							onPress={() => {
								navigation.navigate("privacyPolicyModal");
							}}
						/>
						<DrawerItem
							label="credits"
							labelStyle={styles.drawerItems}
							onPress={() => {
								navigation.navigate("creditsModal");
							}}
						/>
					</View>
				</View>
			</DrawerContentScrollView>
			<Drawer.Section style={styles.logout}>
				<DrawerItem
					icon={({ color, size }) => (
						<Icon name="logout" color={colors.white} size={size} />
					)}
					label="Logout"
					labelStyle={styles.logoutBtn}
				/>
			</Drawer.Section>
		</View>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: colors.purple,
	},

	drawerContent: {
		flex: 1,
		backgroundColor: colors.purple,
	},

	userInfo: {
		flex: 1,
		flexDirection: "row",
		alignItems: "center",
		paddingLeft: 30,
		paddingVertical: 20,
	},

	userImage: {
		height: 50,
		width: 50,
		marginRight: 20,
		borderRadius: 100,
	},

	username: {
		color: colors.white,
	},

	settings: {
		borderColor: colors.border,
		borderTopWidth: 3,
		borderBottomWidth: 3,
		paddingVertical: 20,
		paddingLeft: 30,
		paddingRight: 40,
		flex: 2,
	},

	options: {
		fontSize: 18,
		paddingBottom: 10,
		paddingLeft: 5,
		color: colors.white,
	},

	anonBtn: {
		paddingLeft: 18,
		color: colors.background,
	},

	anonSwitch: {},

	resources: {
		flex: 4,
		paddingLeft: 30,
		paddingTop: 20,
	},

	drawerItems: {
		color: colors.background,
	},

	logout: {
		marginLeft: 30,
	},

	logoutBtn: {
		color: colors.white,
		fontSize: 16,
	},
});
