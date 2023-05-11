import {
	StyleSheet,
	Button,
	Text,
	View,
	TouchableOpacity,
	Image,
	Dimensions,
	Touchable,
	PermissionsAndroid,
} from "react-native";
import colors from "../config/colors";
import React, { useEffect, useState, useRef } from "react";
import { Marker, MAP_TYPES, PROVIDER_GOOGLE, UrlTile } from "react-native-maps";
import MapView from "react-native-map-clustering";
import { useNavigation } from "@react-navigation/native";
import * as Location from "expo-location";
// import Geolocation from "react-native-geolocation-service";
import { FlatList, ScrollView } from "react-native-gesture-handler";

const urlTemplate =
	"https://basemaps.cartocdn.com/rastertiles/light_all/{z}/{x}/{y}.png";

const INITIAL_REGION = {
	latitude: 34.0522,
	longitude: -118.2437,
	latitudeDelta: 0.3,
	longitudeDelta: 0.3,
};

const PERSONAL_PIN = require("../../assets/pinImages/personal_128x128.png");
const HISTORICAL_PIN = require("../../assets/pinImages/historical_128x128.png");
const COMMUNITY_PIN = require("../../assets/pinImages/community_128x128.png");

const urlPins = "https://api.thearqive.com/api/pins/";

function stripHTML(myString) {
	return myString.replace(/(<([^>]+)>)/gi, "");
}

//will import our components to our screen files if need be
export default function MapScreen() {
	const mapRef = useRef();

	const [pins, setPins] = useState(null);
	const [pinColor, setPinColor] = useState("");
	const [storyScreenOpened, setStoryScreenOpened] = useState(false);
	const [pullUpHeight, setPullUpHeight] = useState("0");
	const [buttonOpacity, setButtonOpacity] = useState(1);
	const [storyNum, setStoryNum] = useState(20);
	const [gotLocation, setGotLocation] = useState(false);
	const [location, setLocation] = useState({
		latitude: 34.0522,
		longitude: -118.2437,
		latitudeDelta: 0.3,
		longitudeDelta: 0.3,
	});

	useEffect(() => {
		getPins();
	}, []);

	const getPins = async () => {
		const result = await fetch(urlPins, {
			headers: {
				"X-Arqive-Api-Key": "4BqxMFdJ.3caXcBkTUuLWpGrfbBDQYfIyBVKiEif1",
			},
		});
		const allPins = await result.json();
		setPins(allPins);
	};

	const getLocation = async () => {
		let { status } = await Location.requestForegroundPermissionsAsync();
		if (status !== "granted") {
			//handle error here
		}

		let loc = await Location.getCurrentPositionAsync({});
		const { latitudeDelta, longitudeDelta } = location;
		setLocation({
			latitude: loc.coords.latitude,
			longitude: loc.coords.longitude,
			latitudeDelta: latitudeDelta,
			longitudeDelta: longitudeDelta,
		});
		setGotLocation(true);
	};

	const showMenu = (e, index) => {
		setStoryNum(index);
		let pinType = "";
		switch (pins[index].category) {
			case 1:
				pinType = colors.personal;
				break;
			case 2:
				pinType = colors.community;
				break;
			default:
				pinType = colors.historical;
		}
		setPinColor(pinType);
		setPullUpHeight("60");
		setStoryScreenOpened(true);
		setButtonOpacity(0);
	};

	const mapCloseMenu = () => {
		setPullUpHeight("0");
		setStoryScreenOpened(false);
		setButtonOpacity(1);
	};

	const navigation = useNavigation();
	const styles = getStyles(buttonOpacity, pullUpHeight, pinColor);

	return (
		<>
			{pins == null ? (
				<View style={styles.mapStyle}>
					<Image
						source={require("../../assets/02_thearqive_loading_screen_.gif")}
						style={styles.loadingIcon}
					/>
					<Text style={styles.loadingText}>
						fetching stories... placing pins...
					</Text>
				</View>
			) : (
				<View style={styles.container}>
					<MapView
						style={styles.mapStyle}
						ref={mapRef}
						provider={PROVIDER_GOOGLE}
						mapType={MAP_TYPES.NONE}
						initialRegion={INITIAL_REGION}
						showsUserLocation={false}
						showsMyLocationButton={false}
						rotateEnabled={false}
						clusterColor={"#FFA500"}
						clusterTextColor={"#000000"}
						maxZoomLevel={21}
						minZoomLevel={1}
						maxZoom={19}
						minZoom={0}
						minPoints={5}
						toolbarEnabled={false}
						flex={1}
						onPress={mapCloseMenu}
						// onLongPress={(event) => {
						//     props.navigation.navigate("SubmitStoryModal", {
						//         latitude: event.nativeEvent.coordinate.latitude,
						//         longitude: event.nativeEvent.coordinate.longitude,
						//     });
						// }}
					>
						{pins.map((marker, index) => {
							let pinType = "";
							switch (marker.category) {
								case 1:
									pinType = PERSONAL_PIN;
									break;
								case 2:
									pinType = COMMUNITY_PIN;
									break;
								default:
									pinType = HISTORICAL_PIN;
							}
							return (
								<Marker
									key={index}
									coordinate={{
										latitude: parseFloat(marker.latitude),
										longitude: parseFloat(marker.longitude),
									}}
									// title={marker.title}
									image={pinType}
									onPress={(e) => showMenu(e, index)}
								/>
							);
						})}
						<UrlTile
							// urlTemplate={
							//     props.is_anonymous_active
							//         ? urlTemplateDark
							//         : urlTemplate
							// }
							urlTemplate={urlTemplate}
							shouldReplaceMapContent={true}
							maximumZ={19}
							minimumZ={0}
							maxZoomLevel={19}
							minZoomLevel={0}
							zIndex={1}
						/>
						{/* {renderPins()} */}
					</MapView>
					<View></View>
					<View style={styles.hamburgerBtnOverlay}>
						<View style={styles.hamburgerBtn}>
							<TouchableOpacity
								onPress={() => navigation.openDrawer()}
								disabled={storyScreenOpened}
							>
								{/* <TouchableOpacity navigation={this.props.navigation.openDrawer()}> */}
								<View>
									<Image
										style={styles.hamburgerLogo}
										source={require("../../assets/grip-lines-WHITE.png")}
									/>
								</View>
							</TouchableOpacity>
						</View>
					</View>
					<View style={styles.reroutingBtnOverlay}>
						<View style={styles.reroutingBtn}>
							<TouchableOpacity
								// onPress={() => console.log("Rerouting")}
								// onPress={getLocation}
								onPress={() => {
									getLocation(),
										mapRef.current.animateToRegion({
											latitude: location.latitude,
											longitude: location.longitude,
											latitudeDelta: 0.0922,
											longitudeDelta: 0.0421,
										});
								}}
								disabled={storyScreenOpened}
							>
								<View>
									<Image
										style={styles.reroutingLogo}
										source={require("../../assets/location-arrow-WHITE_Outline.png")}
									/>
								</View>
							</TouchableOpacity>
						</View>
					</View>
					<View style={styles.searchBtnOverlay}>
						<View style={styles.searchBtn}>
							<TouchableOpacity
								onPress={() => console.log("Search")}
								disabled={storyScreenOpened}
							>
								<View>
									<Image
										style={styles.searchLogo}
										source={require("../../assets/magnifying-glass-WHITE.png")}
									/>
								</View>
							</TouchableOpacity>
						</View>
					</View>
					<View style={styles.addStoryBtnOverlay}>
						<View style={styles.addStoryBtn}>
							<TouchableOpacity onPress={() => console.log("AddStory")}>
								<View>
									<Image
										style={styles.addStoryLogo}
										source={require("../../assets/ARQIVE-ICON.png")}
									/>
								</View>
							</TouchableOpacity>
						</View>
					</View>
					<View style={styles.pullUpOverlay}>
						<View style={styles.topBar}>
							<Text></Text>
						</View>
						<ScrollView
							style={styles.storyScrollView}
							persistentScrollbar={true}
						>
							<View style={styles.storyTitle}>
								<Text style={styles.storyTitleText}>
									{pins[storyNum].title}
								</Text>
							</View>
							{/* <View>
									<Image
										style={styles.bookmarkImage}
										source={require("../../assets/bookmark-red.png")}
									/>
								</View>
							</View> */}
							<View style={styles.titleFlagBar}>
								<View style={styles.storyPoster}>
									{pins[storyNum].username == null ? (
										<Text>
											<Text style={styles.storyPostedByText}>Posted by: </Text>
											<Text style={styles.storyPosterUserText}>ANON</Text>
										</Text>
									) : (
										<Text>
											<Text style={styles.storyPostedByText}>Posted by: </Text>
											<Text style={styles.storyPosterUserText}>
												{pins[storyNum].username}
											</Text>
										</Text>
									)}
								</View>
							</View>
							<View style={styles.titleFlagBar}>
								<View style={styles.storyAddress}>
									<Text style={styles.storyAddressText}>
										{pins[storyNum].address} {pins[storyNum].locality}{" "}
										{pins[storyNum].region}
									</Text>
								</View>
								{/* <View>
									<TouchableOpacity>
										<Image
											style={styles.flagImage}
											source={require("../../assets/Group74.png")}
										/>
									</TouchableOpacity>
								</View> */}
							</View>

							<View style={styles.storyDetail}>
								<Text style={styles.storyDetailText}>
									{stripHTML(pins[storyNum].description)}
								</Text>
							</View>
							<View style={styles.shareView}>
								<TouchableOpacity style={styles.shareBtn}>
									<Text>share</Text>
								</TouchableOpacity>
							</View>
							{/* <View style={styles.container1}>
								<FlatList
									style={styles.flist}
									// data={DATA}
									// renderItem={({ item }) => <Item title={item.title} />}
								/>
							</View> */}
						</ScrollView>
					</View>
				</View>
			)}
		</>
	);
}

const getStyles = (buttonOpacity, pullUpHeight, pinColor) =>
	StyleSheet.create({
		container: {
			flex: 1,
		},

		hamburgerBtnOverlay: {
			flexDirection: "row",
			position: "absolute",
			alignSelf: "flex-start",
		},

		hamburgerBtn: {
			height: 45,
			width: 45,
			backgroundColor: colors.purple,
			borderRadius: 15,
			justifyContent: "center",
			alignItems: "center",
			marginTop: 30,
			marginLeft: 15,
			opacity: buttonOpacity,
		},

		hamburgerLogo: {
			height: 30,
			width: 30,
		},

		searchBtnOverlay: {
			flexDirection: "row",
			position: "absolute",
			alignSelf: "flex-end",
			backgroundColor: "Blue",
			opacity: buttonOpacity,
		},

		searchBtn: {
			height: 45,
			width: 45,
			backgroundColor: colors.purple,
			borderRadius: 100,
			justifyContent: "center",
			alignItems: "center",
			marginTop: 35,
			marginRight: 15,
		},

		searchLogo: {
			height: 25,
			width: 25,
		},

		reroutingBtnOverlay: {
			flexDirection: "row",
			position: "absolute",
			alignSelf: "flex-end",
		},

		reroutingBtn: {
			height: 45,
			width: 45,
			backgroundColor: colors.purple,
			borderRadius: 100,
			justifyContent: "center",
			alignItems: "center",
			marginTop: 110,
			marginRight: 15,
			opacity: buttonOpacity,
		},

		reroutingLogo: {
			marginTop: 3,
			marginRight: 4,
			height: 25,
			width: 25,
		},

		addStoryBtnOverlay: {
			flexDirection: "column",
			position: "absolute",
			alignSelf: "flex-end",
			bottom: 15,
		},

		addStoryBtn: {
			height: 70,
			width: 70,
			backgroundColor: colors.purple,
			borderRadius: 100,
			justifyContent: "center",
			alignItems: "center",
			marginTop: 30,
			marginRight: 15,
		},

		addStoryLogo: {
			marginTop: 5,
			height: 45,
			width: 45,
		},

		mapStyle: {
			flex: 1,
			justifyContent: "center",
			alignItems: "center",
			width: Dimensions.get("window").width,
			height: Dimensions.get("window").height,
		},

		loadingText: {
			textAlign: "center",
			marginTop: 10,
		},

		loadingIcon: {
			height: 50,
			width: 60,
			resizeMode: "contain",
		},

		topBar: {
			backgroundColor: pinColor,
		},

		pullUpOverlay: {
			// flex: 0,
			height: `${parseInt(pullUpHeight)}%`,
			// position: "absolute",
			backgroundColor: colors.white,
			width: "100%",
			bottom: 0,
		},

		storyScrollView: {
			paddingHorizontal: 40,
		},

		storyTitle: {
			paddingTop: 40,
		},

		storyTitleText: {
			fontSize: 25,
			fontWeight: "bold",
		},

		titleFlagBar: {
			flexDirection: "row",
			justifyContent: "space-between",
		},

		bookmarkImage: {
			height: 20,
			width: 15,
		},

		storyPoster: {
			padding: 5,
		},

		storyPostedByText: {
			fontSize: 12,
		},

		storyPosterUserText: {
			fontSize: 12,
			color: colors.gray,
		},

		flagImage: {
			height: 20,
			width: 18,
		},

		storyAddress: {
			padding: 5,
		},

		storyAddressText: {
			fontWeight: "bold",
			fontStyle: "italic",
		},

		storyDetail: {
			padding: 5,
		},

		storyDetailText: {},

		shareView: {
			flexDirection: "row",
			justifyContent: "flex-start",
		},

		shareBtn: {
			borderWidth: 1,
			borderRadius: 7,
			margin: 10,
			paddingHorizontal: 12,
			paddingVertical: 3,
		},

		container1: {
			flex: 1,
			backgroundColor: "lightblue",
			alignItems: "center",
		},
	});
