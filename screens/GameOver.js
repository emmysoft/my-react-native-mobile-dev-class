import { StyleSheet, View, Text, Image, useWindowDimensions, ScrollView } from "react-native";
import Colors from "../constants/colors";
import Title from "../components/ui/Title";
import PrimaryButton from "../components/ui/PrimaryButton";

function GameOver({ roundsNumber, userNumber, onStartNewGame }) {

  const {width, height} = useWindowDimensions();

  let imageSize = 300; 

  if (width > 380) {
    imageSize = 150;
  };

  if (height > 400) {
    imageSize = 80;
  };

  const imageStyle = {
    width: imageSize,
    height: imageSize,
    borderRadius: imageSize/2,
  }

  return (
    <>
    <ScrollView style={styles.screen}>
      <View style={styles.msgContainer}>
        <Title style={styles.Title}> Game Over </Title>
        <View style={[styles.imageContainer, imageStyle]}>
          <Image source={require("../assets/image/success.png")} />
        </View>
        <Text style={styles.summaryText}>
          Your phone used <Text style={styles.highlight}>{roundsNumber}</Text>{" "}
          amount of times to guess{" "}
          <Text style={styles.highlight}>{userNumber}</Text>
        </Text>
        <PrimaryButton onPress={onStartNewGame}> Start New Game </PrimaryButton>
      </View>
      </ScrollView>
    </>
  );
}

export default GameOver;

const styles = StyleSheet.create({
  screen: {
    flex: 1,
  },
  msgContainer: {
    flex: 1,
    padding: 24,
    justifyCotnent: "center",
    alignItems: "center",
  },
  imageContainer: {
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
