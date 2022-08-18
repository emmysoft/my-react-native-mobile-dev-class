import { useState } from "react";
import {
  View,
  TextInput,
  StyleSheet,
  Alert,
  useWindowDimensions,
  KeyboardAvoidingView,
  ScrollView,
} from "react-native";
import PrimaryButton from "../components/ui/PrimaryButton";
import Title from "../components/ui/Title";
import Card from "../components/ui/Card";
import Colors from "../constants/colors";
import Instruction from "../components/ui/Instruction";

function StartGameScreen({ onPickNumber }) {
  const { width, height } = useWindowDimensions();
  const [enteredNumber, setEnteredNumber] = useState("");

  const numberInputHandler = (enteredText) => {
    setEnteredNumber(enteredText);
  };

  const confirmInputHandler = () => {
    const chosenNumber = parseInt(enteredNumber); //convert empty string to number

    if (isNaN(chosenNumber) || chosenNumber <= 0 || chosenNumber > 99) {
      Alert.alert("Invalid Number", "Numbers has to be between 1 and 99", [
        //alert component with Text, title and array
        { text: "Okay", style: "destructive", onPress: resetInputHandler },
      ]);
      return;
    }
    onPickNumber(chosenNumber);
  };

  const resetInputHandler = () => {
    setEnteredNumber(""); //set state back to null
  };

  const marginTopSpace = height < 380 ? 30 : 100;

  return (
    <ScrollView style={styles.screen}>
      <KeyboardAvoidingView style={styles.screen} behavior="position">
        <View style={[styles.rootContainer, { marginTop: marginTopSpace }]}>
          <Title> Guess My Number </Title>
          <Card>
            <Instruction> Enter New Number </Instruction>
            <TextInput
              style={styles.numInput}
              maxLength={2}
              keyboardType="number-pad"
              autoCapitalize="none"
              autoCorrect={false}
              value={enteredNumber}
              onChangeText={numberInputHandler}
            />
            <View style={styles.buttonBox}>
              <View style={styles.buttons}>
                <PrimaryButton onPress={resetInputHandler}>Reset</PrimaryButton>
              </View>
              <View style={styles.buttons}>
                <PrimaryButton onPress={confirmInputHandler}>
                  Confirm
                </PrimaryButton>
              </View>
            </View>
          </Card>
        </View>
      </KeyboardAvoidingView>
    </ScrollView>
  );
}

export default StartGameScreen;

const styles = StyleSheet.create({
  rootContainer: {
    flex: 1,
    // marginTop: deviceHeight < 380 ? 30 : 100,
    alignItems: "center",
  },
  numInput: {
    width: 50,
    height: 50,
    fontSize: 32,
    borderBottomColor: Colors.secondary1,
    borderBottomWidth: 2,
    color: Colors.secondary1,
    marginVertical: 8,
    fontFamily: "open-sans-bold",
  },
  buttonBox: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
  },
  buttons: {
    flex: 1,
  },
});
