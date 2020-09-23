import React from "react";
import { View, StyleSheet, Text, Image } from "react-native";

const Computer = (props) => {
  return (
    <View style={{ ...styles.computer, ...props.style }}>
      <View style={styles.nameBox}>
        <Text style={styles.name}>COMPUTER</Text>
      </View>
      <View style={styles.showChoice}>
        <View style={styles.choiceImage}>
          <Image />
        </View>
        <Text style={styles.choiceText}>Rock</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  computer: {
    flex: 5,
    borderColor: "red",
    borderWidth: 3,
    flexDirection: "column-reverse",
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
  choiceContainer: {
    flex: 5,
  },
});

export default Computer;
