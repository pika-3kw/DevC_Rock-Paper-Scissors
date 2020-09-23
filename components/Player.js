import React from "react";
import { View, StyleSheet, Text, Image } from "react-native";

import YourChoice from "./YourChoice";

const Player = (props) => {
  return (
    <View style={{ ...styles.player, ...props.style }}>
      <View style={styles.nameBox}>
        <Text style={styles.name}>{props.name}</Text>
      </View>
      <YourChoice setPlayerChoice={props.setPlayerChoice} />
      {/* <View style={styles.showChoice}>
        <View style={styles.choiceImage}>
          <Image />
        </View>
        <Text style={styles.choiceText}>Rock</Text>
      </View> */}
    </View>
  );
};

const styles = StyleSheet.create({
  player: {
    flex: 5,
    borderColor: "red",
    borderWidth: 3,
  },
  nameBox: {
    flex: 1,
    backgroundColor: "green",
    justifyContent: "center",
    alignItems: "center",
  },
  name: {
    fontSize: 20,
    fontWeight: "bold",
  },
  showChoice: {
    flex: 5,
  },
  choiceImage: {
    flex: 5,
    backgroundColor: "grey",
  },
  choiceText: {
    flex: 1,
    textAlign: "center",
    fontSize: 18,
  },
});

export default Player;
