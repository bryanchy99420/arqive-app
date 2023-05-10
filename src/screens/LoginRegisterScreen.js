import {
	Button,
	StyleSheet,
	Text,
	View,
	TouchableOpacity,
	Image,
	Touchable,
} from "react-native";
import React, { useState } from "react";
import { TextInput } from "react-native-gesture-handler";
import colors from "../config/colors";
import { useNavigation } from "@react-navigation/native";

export default function LoginRegisterScreen() {
	const navigation = useNavigation();

	return (
		<View style={styles.container}>
			<View style={styles.logoView}>
				<Image
					source={require("../../assets/thearqive_all_white_logo_lowhres.png")}
					style={styles.logo}
				/>
			</View>
			<View style={styles.loginView}>
				<TouchableOpacity
					style={styles.loginBtn}
					onPress={() => navigation.navigate("Login")}
				>
					<Text style={styles.loginText}>log in</Text>
				</TouchableOpacity>
			</View>
			<View style={styles.registerView}>
				<TouchableOpacity
					style={styles.registerBtn}
					onPress={() => navigation.navigate("EULA")}
				>
					<Text style={styles.registerText}>register</Text>
				</TouchableOpacity>
			</View>
			<View style={styles.continueView}>
				<TouchableOpacity
					style={styles.continueBtn}
					onPress={() => navigation.navigate("TabNav")}
				>
					<Text style={styles.continueText}>continue</Text>
				</TouchableOpacity>
			</View>
		</View>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: colors.purple,
	},

	logoView: {
		flex: 4.5,
		justifyContent: "center",
		alignItems: "center",
	},

	logo: {
		marginTop: 60,
		width: "60%",
		height: "20%",
		resizeMode: "stretch",
	},

	loginView: {
		flex: 1,
		alignItems: "center",
	},

	loginBtn: {
		backgroundColor: colors.white,
		height: 50,
		width: 220,
		borderRadius: 20,
		justifyContent: "center",
		alignItems: "center",
	},

	loginText: {
		fontSize: 20,
	},

	registerView: {
		flex: 1,
		alignItems: "center",
	},

	registerBtn: {
		backgroundColor: colors.white,
		height: 50,
		width: 220,
		borderRadius: 20,
		justifyContent: "center",
		alignItems: "center",
	},

	registerText: {
		fontSize: 20,
	},

	continueView: {
		flex: 2,
		justifyContent: "center",
		alignItems: "center",
	},

	continueBtn: {
		justifyContent: "center",
		alignItems: "center",
		height: 40,
		width: 100,
		marginBottom: 80,
	},

	continueText: {
		color: colors.border,
	},
});
