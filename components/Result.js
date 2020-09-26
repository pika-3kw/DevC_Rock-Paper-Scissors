import React, { useEffect, useState } from "react";
import { View, StyleSheet, Text } from "react-native";

const Result = (props) => {
  const [styleColor, setstyleColor] = useState({
    color: "white",
  });

  useEffect(() => {
    if (props.text === "YOU LOSE") {
      setstyleColor({
        color: "#c0392b",
      });
    }
    if (props.text === "YOU WIN") {
      setstyleColor({
        color: "#27ae60",
      });
    }
    if (props.text === "DRAW") {
      setstyleColor({
        color: "#000000",
      });
    }
  }, [props.text]);

  return (
    <View style={{ ...styles.result, ...props.style }}>
      <Text style={{ ...styles.resultText, ...styleColor }}>{props.text}</Text>
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
