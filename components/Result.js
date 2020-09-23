import React from "react";
import { View, StyleSheet, Text } from "react-native";

const Result = (props) => {
  return (
    <View style={{ ...styles.result, ...props.style }}>
      <Text style={styles.resultText}>{props.text}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  result: {
    justifyContent: "center",
    alignItems: "center",
  },
  resultText: {
    fontSize: 20,
  },
});

export default Result;
