import { StyleSheet, Text, View } from "react-native";
import React from "react";

//will import our components to our screen files if need be
export default function Home() {
  return (
    <View style={styles.container}>
      <Text>Home</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  //flex 1 tells the screen to take up all availible space
  container: {
    flex: 1,
    backgroundColor: "blue",
  },
});
