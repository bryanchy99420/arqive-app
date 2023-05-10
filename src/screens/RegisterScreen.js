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

export default function RegisterScreen({ navigation }) {
	const [username, setUsername] = useState("");
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");

	return (
		<View style={styles.container}>
			<View style={styles.logoView}>
				<Image
					source={require("../../assets/color_icon.png")}
					style={styles.logo}
				/>
			</View>
			<View style={styles.register_text}>
				<Text style={styles.registerText}>register</Text>
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
					value={email}
					placeholder="email"
					placeholderTextColor="gray"
					onChangeText={(userName) => setEmail(email)}
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
			<View style={styles.inputView}>
				<TextInput
					placeholder="confirm password"
					placeholderTextColor="gray"
					secureTextEntry={true}
					onChangeText={(password) => setPassword(password)}
					style={styles.inputText}
				/>
			</View>
			<View style={styles.login}>
				<Text style={styles.alreadyhaveText}>already have an account?</Text>
				<TouchableOpacity onPress={() => navigation.navigate("Login")}>
					<Text style={styles.loginBtn}>login here</Text>
				</TouchableOpacity>
			</View>
			<View style={styles.login}>
				<Text style={styles.alreadyhaveText}>
					by registering, you are agreeing to the Terms of Service
				</Text>
			</View>
			<View style={styles.register}>
				<TouchableOpacity
					onPress={() => navigation.navigate("TabNav", { paramKey: username })}
				>
					<Text style={styles.registerBtn}>register</Text>
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

	register_text: {
		flex: 0.5,
		justifyContent: "center",
	},

	registerText: {
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

	login: {
		flexDirection: "row",
	},

	alreadyhaveText: {
		color: colors.gray,
		justifyContent: "center",
		margin: 5,
	},

	loginBtn: {
		marginVertical: 5,
		color: colors.purple,
	},

	register: {
		flex: 1,
		// fontS,
	},

	registerBtn: {
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
