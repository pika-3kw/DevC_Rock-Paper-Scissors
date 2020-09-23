import React from "react";
import { View, StyleSheet, Text, Image, TouchableOpacity } from "react-native";

const YourChoice = (props) => {
  const choice = (num) => {
    props.setPlayerChoice(num);
  };

  return (
    <View style={{ ...styles.yourChoice, ...props.style }}>
      <TouchableOpacity style={styles.choice0} onPress={() => choice(0)}>
        <Image />
        <Text>Rock</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.choice1} onPress={() => choice(1)}>
        <Image />
        <Text>Paper</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.choice2} onPress={() => choice(2)}>
        <Image />
        <Text>Scissors</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  yourChoice: {
    flex: 5,
    backgroundColor: "white",
    flexDirection: "row",
    alignItems: "stretch",
  },
  choice0: {
    flex: 1,
    backgroundColor: "grey",
    justifyContent: "center",
    alignItems: "center",
  },
  choice1: {
    flex: 1,
    backgroundColor: "blue",
    justifyContent: "center",
    alignItems: "center",
  },
  choice2: {
    flex: 1,
    backgroundColor: "green",
    justifyContent: "center",
    alignItems: "center",
  },
});

export default YourChoice;
