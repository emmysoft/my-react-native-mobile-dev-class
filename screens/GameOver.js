import { StyleSheet, View, Text, Image } from "react-native";
import Colors from "../constants/colors";
import Title from "../components/ui/Title";
import PrimaryButton from "../components/ui/PrimaryButton";

function GameOver({ roundsNumber, userNumber, onStartNewGame }) {
  return (
    <>
      <View style={styles.msgContainer}>
        <Title style={styles.Title}> Game Over </Title>
        <View style={styles.imageContainer}>
          <Image source={require("../assets/image/success.png")} />
        </View>
        <Text style={styles.summaryText}>
          Your phone used <Text style={styles.highlight}>{roundsNumber}</Text>{" "}
          amount of times to guess{" "}
          <Text style={styles.highlight}>{userNumber}</Text>
        </Text>
        <PrimaryButton onPress={onStartNewGame}> Start New Game </PrimaryButton>
      </View>
    </>
  );
}

export default GameOver;

const styles = StyleSheet.create({
  msgContainer: {
    flex: 1,
    padding: 24,
    justifyCotnent: "center",
    alignItems: "center",
    // marginTop: 40,
  },
  imageContainer: {
    width: 300,
    height: 300,
    borderRadius: 200,
    borderWidth: 3,
    borderColor: Colors.primary1,
    overflow: "hidden",
    margin: 36,
  },
  image: {
    width: "100%",
    height: "100%",
  },
  summaryText: {
    fontFamily: "open-sans",
    fontSize: 24,
    textAlign: "center",
    marginVertical: 24,
  },
  highlight: {
    fontFamily: "open-sans-bold",
    color: Colors.primary1,
  },
});
