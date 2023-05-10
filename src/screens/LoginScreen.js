import {
	Button,
	StyleSheet,
	Text,
	View,
	TouchableOpacity,
	Image,
} from "react-native";
import React, { useState } from "react";
import { TextInput } from "react-native-gesture-handler";
import colors from "../config/colors";

export default function LoginScreen({ navigation }) {
	const [username, setUsername] = useState("");
	const [password, setPassword] = useState("");

	return (
		<View style={styles.container}>
			<View style={styles.logoView}>
				<Image
					source={require("../../assets/color_icon.png")}
					style={styles.logo}
				/>
			</View>
			<View style={styles.log_in}>
				<Text style={styles.loginText}>log in</Text>
			</View>
			<View style={styles.inputView}>
				<TextInput
					value={username}
					placeholder="username"
					placeholderTextColor="gray"
					onChangeText={(userName) => setUsername(userName)}
					style={styles.inputText}
				/>
			</View>
			<View style={styles.inputView}>
				<TextInput
					placeholder="password"
					placeholderTextColor="gray"
					secureTextEntry={true}
					onChangeText={(password) => setPassword(password)}
					style={styles.inputText}
				/>
			</View>
			<View style={styles.forgotPassword}>
				<Text style={styles.forgotPasswordText}>
					forgot your login details?
				</Text>
				<TouchableOpacity
				// onPress={() => navigation.navigate("TabNav", { paramKey: username })}
				>
					<Text style={styles.forgotPasswordBtn}>get help signing in here</Text>
				</TouchableOpacity>
			</View>
			<View style={styles.register}>
				<Text style={styles.accountText}>don't have an account?</Text>
				<TouchableOpacity
					onPress={() => navigation.navigate("EULA", { paramKey: username })}
				>
					<Text style={styles.registerBtn}>register here</Text>
				</TouchableOpacity>
			</View>
			<View style={styles.login}>
				<TouchableOpacity
					onPress={() => navigation.navigate("TabNav", { paramKey: username })}
				>
					<Text style={styles.loginBtn}>log in</Text>
				</TouchableOpacity>
			</View>
			<View style={styles.continue}>
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
		backgroundColor: colors.white,
		alignItems: "center",
		justifyContent: "center",
	},

	logoView: {
		flex: 1,
		paddingTop: 40,
		justifyContent: "center",
		alignItems: "center",
	},

	logo: {
		height: 100,
		width: 150,
	},

	log_in: {
		flex: 0.5,
		justifyContent: "center",
	},

	loginText: {
		fontSize: 20,
	},

	image: {
		height: 15,
		width: 15,
		margin: 5,
	},

	inputView: {
		flexDirection: "row",
		flex: 0.3,
		width: 230,
		margin: 10,
		borderWidth: 1,
		borderColor: colors.darkPurple,
	},

	inputText: {
		marginLeft: 10,
	},

	forgotPassword: {
		flexDirection: "row",
	},

	forgotPasswordText: {
		color: colors.gray,
		justifyContent: "center",
		margin: 5,
	},

	forgotPasswordBtn: {
		color: colors.purple,
		marginVertical: 5,
	},

	register: {
		flexDirection: "row",
	},

	accountText: {
		color: colors.gray,
		justifyContent: "center",
		margin: 5,
	},

	registerBtn: {
		marginVertical: 5,
		color: colors.purple,
	},

	login: {
		flex: 1,
		// fontS,
	},

	loginBtn: {
		margin: 20,
		paddingHorizontal: 80,
		padding: 15,
		backgroundColor: colors.purple,
		color: colors.white,
		borderRadius: 10,
	},

	continue: {
		flex: 1,
		justifyContent: "center",
		alignItems: "center",
	},

	continueBtn: {
		justifyContent: "center",
		alignItems: "center",
		height: 40,
		width: 100,
		marginBottom: 50,
	},

	continueText: {
		color: colors.border,
	},
});
