import React, { useState, useEffect } from "react";
import { View, StyleSheet, Text } from "react-native";

import Computer from "../components/Computer";
import Player from "../components/Player";
import Result from "../components/Result";

const data = [
  {
    // đấm
    name: "rock",
    imgUrl: "",
  },
  {
    // bao
    name: "paper",
    imgUrl: "",
  },
  {
    // kéo
    name: "scissors",
    imgUrl: "",
  },
];

const Game = () => {
  const [computerChoice, setComputerChoice] = useState();
  const [playerChoice, setPlayerChoice] = useState();
  const [result, setResult] = useState();

  useEffect(() => {
    if (playerChoice) {
      const random = Math.floor(Math.random() * 3);
      setComputerChoice(random);

      if (playerChoice === computerChoice) {
        return setResult("DRAW");
      }

      // player: rock, computer: paper
      if (playerChoice === 0 && computerChoice === 1) {
        return setResult("YOU LOSE");
      }

      // player: rock, computer: scissors
      if (playerChoice === 0 && computerChoice === 2) {
        return setResult("YOU WIN");
      }

      // player: paper, computer: rock
      if (playerChoice === 1 && computerChoice === 0) {
        return setResult("YOU WIN");
      }

      // player: paper, computer: scissors
      if (playerChoice === 1 && computerChoice === 2) {
        return setResult("YOU LOSE");
      }

      // player: scissors, computer: rock
      if (playerChoice === 2 && computerChoice === 0) {
        return setResult("YOU LOSE");
      }

      // player: scissors, computer: paper
      if (playerChoice === 2 && computerChoice === 1) {
        return setResult("YOU WIN");
      }
    }
  });

  return (
    <View style={styles.game}>
      <Computer style={styles.computer} />
      <Result style={styles.result} text={result} />
      <Player
        style={styles.player}
        setPlayerChoice={setPlayerChoice}
        name="YOU"
      />
    </View>
  );
};

const styles = StyleSheet.create({
  game: { flex: 1 },
  result: { flex: 1 },
  player: { flex: 5 },
  computer: { flex: 5 },
});

export default Game;
