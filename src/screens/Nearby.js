import { Button, StyleSheet, Text, View } from "react-native";
import React from "react";
import { FlatList } from "react-native-gesture-handler";

const DATA = [
	{
		id: "bd7acbea-c1b1-46c2-aed5-3ad53abb28ba",
		title: "First Item",
	},
	{
		id: "3ac68afc-c605-48d3-a4f8-fbd91aa97f63",
		title: "Second Item",
	},
	{
		id: "58694a0f-3da1-471f-bd96-145571e29d72",
		title: "Third Item",
	},
];

const Item = ({ title }) => (
	<View style={styles.item}>
		<Text style={styles.title}>{title}</Text>
	</View>
);

//will import our components to our screen files if need be
export default function Nearby({ navigation, route }) {
	return (
		<View style={styles.container}>
			{/* <Text>Welcome, {route.params.paramKey}</Text> */}
			<FlatList
				style={styles.flist}
				data={DATA}
				renderItem={({ item }) => <Item title={item.title} />}
			/>
			<Button title="Go to Map" onPress={() => navigation.navigate("Map")} />
			<Button
				title="Go to Login"
				onPress={() => navigation.navigate("Login")}
			/>
		</View>
	);
}

const styles = StyleSheet.create({
	//flex 1 tells the screen to take up all availible space
	container: {
		flex: 1,
		backgroundColor: "lightblue",
		alignItems: "center",
	},

	flist: {},
});
