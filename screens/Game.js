import React, { useState, useEffect } from "react";
import { View, StyleSheet } from "react-native";

import Result from "../components/Result";
import YourChoice from "../components/YourChoice";
import PlayerArea from "../components/PlayerArea";

import paperImg from "../assets/paper.jpg";
import rockImg from "../assets/rock.jpg";
import scissorsImg from "../assets/scissors.jpg";

const choices = [
  {
    // đấm
    name: "rock",
    image: rockImg,
  },
  {
    // bao
    name: "paper",
    image: paperImg,
  },
  {
    // kéo
    name: "scissors",
    image: scissorsImg,
  },
];

const Game = () => {
  const [computerChoice, setComputerChoice] = useState(null);
  const [playerChoice, setPlayerChoice] = useState(null);
  const [result, setResult] = useState("Choose your weapon");

  useEffect(() => {
    if (playerChoice === null) return;

    if (playerChoice === computerChoice) {
      return setResult("DRAW");
    }

    // player: rock, computer: paper
    // player: paper, computer: scissors
    // player: scissors, computer: rock
    if (
      (playerChoice === 0 && computerChoice === 1) ||
      (playerChoice === 1 && computerChoice === 2) ||
      (playerChoice === 2 && computerChoice === 0)
    ) {
      return setResult("YOU LOSE");
    }

    // player: rock, computer: scissors
    // player: paper, computer: rock
    // player: scissors, computer: paper
    if (
      (playerChoice === 0 && computerChoice === 2) ||
      (playerChoice === 1 && computerChoice === 0) ||
      (playerChoice === 2 && computerChoice === 1)
    ) {
      return setResult("YOU WIN");
    }
  }, [playerChoice, computerChoice]);

  return (
    <View style={styles.game}>
      <PlayerArea
        style={styles.computer}
        name="COMPUTER"
        choice={choices[computerChoice]}
        color="#f39c12"
      />

      <Result style={styles.result} text={result} />

      <PlayerArea
        style={styles.player}
        name="YOU"
        choice={choices[playerChoice]}
        color="#8e44ad"
      />

      <YourChoice
        choices={choices}
        style={styles.yourChoice}
        setPlayerChoice={setPlayerChoice}
        playerChoice={playerChoice}
        setComputerChoice={setComputerChoice}
        setResult={setResult}
        computerChoice={computerChoice}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  game: { flex: 1 },
  result: { flex: 1 },
  player: { flex: 5 },
  computer: { flex: 5, flexDirection: "column-reverse" },
  yourChoice: { flex: 2 },
});

export default Game;
