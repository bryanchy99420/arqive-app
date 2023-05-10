import React, { useEffect, useState } from "react";
import {
	BackHandler,
	FlatList,
	Linking,
	StyleSheet,
	TouchableOpacity,
	View,
	Text,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
// import Modal from "react-native-modal";
import { FontAwesome5, Entypo } from "@expo/vector-icons";

// import Text from "../components/text";
import colors from "../config/colors";
import { ScrollView } from "react-native-gesture-handler";

function PrivacyPolicyModal(props) {
	const [showModal, setShowModal] = useState(false);

	useEffect(() => {
		const backAction = () => {
			// if (props.route.params.isMapScreen) {
			// console.log("maps");
			// fun bug where on the map screen it wasn't routing correctly
			// you still the other navigation because it handles routing oddly
			// if you don't do that in the profile screen
			// } else {
			// console.log("not maps");
			props.navigation.goBack();
			// }
		};
		const backHandler = BackHandler.addEventListener(
			"hardwareBackPress",
			backAction
		);

		return () => backHandler.remove();
	}, []);

	const data = [
		{
			name: "Privacy Policy",
			description:
				"Privacy Policy for TheArqive.com \n\nAt TheArqive, we are committed to protecting the privacy and security of our users. This Privacy Policy describes the types of information we collect, how we use, share, and protect that information, and how it complies with the Google Play requirements. \n\n\nInformation We Collect \n\nWe collect the following types of information from our users: \n*Personal Information: We may collect personal information such as your name, email address, and location when you sign up for an account with us. \n*User Content: We may collect user-generated content such as posts, comments, images, and videos that you submit to our website. \n*Cookies and Tracking Information: We may use cookies, web beacons, and similar technologies to collect information about how you use our website, such as the pages you visit and the links you click. \n*Log Data: Our servers automatically record information about how you use our website, including your IP address, browser type, operating system, and the date and time of your visit. We also collect information transmitted off-device through third-party libraries or SDKs used in our app. This includes data collected and handled by these third-party tools to provide and improve their services. \n\n\nHow We Use Your Information \n\nWe use your information to provide and improve our services, communicate with you about your account, and personalize your experience on our website. \n\nWe may also use your information to: \n*Respond to your requests and inquiries. \n*Analyze user behavior and usage patterns to improve our website and services. \n*Send you promotional materials and offers. \n*Comply with legal obligations. \n*Sharing Your Information. \n\nWe may share your information with third-party service providers who help us provide and improve our services. We may also share your information with law enforcement agencies, government bodies, or other third parties when we are required to do so by law. \n\nSee more at https://thearqive.com/privacypolicy",
		},
	];

	return (
		<ScrollView style={styles.container}>
			<View
				style={[
					styles.shadow2,
					{
						flexDirection: "row",
						justifyContent: "space-between",
						backgroundColor: colors.purple,
						width: "100%",
					},
				]}
			>
				<Entypo
					onPress={() => {
						props.navigation.goBack();
					}}
					style={{ padding: 24 }}
					name="chevron-left"
					size={28}
					color={colors.white}
				/>
				<Text
					style={{
						fontSize: 18,
						padding: 24,
						color: colors.white,
						fontWeight: "bold",
					}}
				>
					privacy policy
				</Text>
				<Entypo
					style={{ padding: 24 }}
					name="cross"
					size={28}
					color={colors.purple}
				/>
			</View>
			<View style={styles.box}>
				<Text style={styles.itemTitle}>Privacy Policy</Text>
				<Text style={styles.description}>Privacy Policy for TheArqive.com</Text>
				<Text style={styles.description}>
					At TheArqive, we are committed to protecting the privacy and security
					of our users. This Privacy Policy describes the types of information
					we collect, how we use, share, and protect that information, and how
					it complies with the Google Play requirements.
				</Text>
				<Text style={styles.subtitle}>Information We Collect</Text>
				<Text style={styles.description}>
					We collect the following types of information from our users:{" "}
				</Text>
				<Text style={styles.itemizedDescription}>
					{"\u2043"} Personal Information: We may collect personal information
					such as your name, email address, and location when you sign up for an
					account with us.
				</Text>
				<Text style={styles.itemizedDescription}>
					{"\u2043"} User Content: We may collect user-generated content such as
					posts, comments, images, and videos that you submit to our website.
				</Text>
				<Text style={styles.itemizedDescription}>
					{"\u2043"} Cookies and Tracking Information: We may use cookies, web
					beacons, and similar technologies to collect information about how you
					use our website, such as the pages you visit and the links you click.
				</Text>
				<Text style={styles.itemizedDescription}>
					{"\u2043"} Log Data: Our servers automatically record information
					about how you use our website, including your IP address, browser
					type, operating system, and the date and time of your visit. We also
					collect information transmitted off-device through third-party
					libraries or SDKs used in our app. This includes data collected and
					handled by these third-party tools to provide and improve their
					services.
				</Text>
				<Text style={styles.subtitle}>How We Use Your Information </Text>
				<Text style={styles.description}>
					We use your information to provide and improve our services,
					communicate with you about your account, and personalize your
					experience on our website.
				</Text>
				<Text style={styles.description}>
					We may also use your information to:
				</Text>
				<Text style={styles.itemizedDescription}>
					{"\u2043"} Respond to your requests and inquiries.
				</Text>
				<Text style={styles.itemizedDescription}>
					{"\u2043"} Analyze user behavior and usage patterns to improve our
					website and services.
				</Text>
				<Text style={styles.itemizedDescription}>
					{"\u2043"} Send you promotional materials and offers.
				</Text>
				<Text style={styles.itemizedDescription}>
					{"\u2043"} Comply with legal obligations.
				</Text>
				<Text style={styles.subtitle}>Sharing Your Information </Text>
				<Text style={styles.description}>
					We may share your information with third-party service providers who
					help us provide and improve our services. We may also share your
					information with law enforcement agencies, government bodies, or other
					third parties when we are required to do so by law.{" "}
				</Text>
				<Text style={styles.description}>
					See more at https://thearqive.com/privacypolicy
				</Text>
			</View>
		</ScrollView>
	);
}

function elevationShadowStyle(elevation) {
	return {
		elevation: 4,
		shadowColor: "black",
		shadowOffset: { width: 0, height: 0.5 * elevation },
		shadowOpacity: 0.3,
		shadowRadius: 0.8 * elevation,
	};
}

const styles = StyleSheet.create({
	shadow2: elevationShadowStyle(20),
	container: {
		flex: 1,
		backgroundColor: colors.white,
		// alignItems: "center",
		height: "100%",
	},
	box: {
		paddingTop: 18,
		paddingBottom: 18,
		paddingRight: 32,
		paddingLeft: 32,
		marginBottom: 12,
		backgroundColor: colors.white,
	},
	itemTitle: {
		fontSize: 16,
		fontWeight: "bold",
		color: colors.black,
	},
	description: {
		color: colors.black,
		fontSize: 12,
		paddingVertical: 5,
	},
	subtitle: {
		color: colors.black,
		fontSize: 12,
		textDecorationLine: "underline",
		paddingVertical: 10,
	},
	itemizedDescription: {
		color: colors.black,
		fontSize: 12,
		paddingLeft: 5,
	},
});

export default PrivacyPolicyModal;
