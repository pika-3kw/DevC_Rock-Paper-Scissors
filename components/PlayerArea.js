import React from "react";
import { View, StyleSheet, Text, Image } from "react-native";

const PlayerArea = (props) => {
  return (
    <View
      style={{ ...styles.playerArea, ...props.style, borderColor: props.color }}
    >
      <View style={{ ...styles.nameBox, backgroundColor: props.color }}>
        <Text style={styles.name}>{props.name}</Text>
      </View>
      <View style={styles.showChoice}>
        {props.choice ? (
          <>
            <Image
              style={styles.choiceImage}
              source={props.choice.image}
              resizeMode="contain"
            />
            <Text style={styles.choiceText}>{props.choice.name}</Text>
          </>
        ) : null}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  playerArea: {
    flex: 5,
    borderColor: "#2980b9",
    borderWidth: 3,
  },
  nameBox: {
    flex: 1,
    backgroundColor: "#2980b9",
    justifyContent: "center",
    alignItems: "center",
  },
  name: {
    fontSize: 20,
    fontWeight: "bold",
    color: "white",
  },
  showChoice: {
    flex: 5,
    justifyContent: "center",
    alignItems: "center",
  },
  choiceImage: {
    flex: 5,
  },
  choiceText: {
    flex: 1,
    textAlign: "center",
    fontSize: 18,
    textTransform: "capitalize",
  },
});

export default PlayerArea;
