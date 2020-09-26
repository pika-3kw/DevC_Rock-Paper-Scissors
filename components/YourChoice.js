import React from "react";
import { View, StyleSheet, Text, Image, TouchableOpacity } from "react-native";

const YourChoice = (props) => {
  const handlerChoice = (num) => {
    const {
      setPlayerChoice,
      playerChoice,
      setComputerChoice,
      computerChoice,
      setResult,
    } = props;

    setPlayerChoice(num);

    const random = Math.floor(Math.random() * 3);

    setComputerChoice(random);
  };

  const renderChoices = () =>
    props.choices.map((choice, i) => (
      <TouchableOpacity
        key={i}
        style={styles.choice0}
        onPress={() => handlerChoice(i)}
      >
        <Image
          source={choice.image}
          style={styles.choiceImage}
          resizeMode="contain"
        />
        <Text style={styles.choiceName}>{choice.name}</Text>
      </TouchableOpacity>
    ));
  return (
    <View style={{ ...styles.yourChoice, ...props.style }}>
      {renderChoices()}
    </View>
  );
};

const styles = StyleSheet.create({
  yourChoice: {
    flex: 5,
    flexDirection: "row",
    alignItems: "stretch",
  },
  choice0: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  choiceImage: {
    width: "70%",
    height: "70%",
  },
  choiceName: {
    textTransform: "capitalize",
  },
});

export default YourChoice;
