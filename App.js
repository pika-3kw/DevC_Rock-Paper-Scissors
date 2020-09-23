import React from "react";
import { StyleSheet, Text, View } from "react-native";
import Constants from "expo-constants";

import Game from "./screens/Game";

export default function App() {
  return (
    <View style={styles.container}>
      <Game />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: Constants.statusBarHeight,
  },
});
