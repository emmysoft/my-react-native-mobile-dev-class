import { useState } from "react";
import {
  View,
  TextInput,
  Button,
  StyleSheet,
  Modal,
  Image,
} from "react-native";

function GoalInput(props) {
  const [enteredGoalText, setEnteredGoalText] = useState("");

  const goalHandler = (enteredText) => {
    setEnteredGoalText(enteredText);
  };

  const addgoalHandler = () => {
    props.onAddGoal(enteredGoalText);
    setEnteredGoalText("");
  };

  return (
    <Modal visible={props.visible} animationType="slide">
      <View style={styles.firstView}>
        <Image
          style={styles.image}
          source={require("../assets/images/goal.png")}
        />
        <TextInput
          style={styles.inputStyle}
          placeholder="type your goals here..."
          onChangeText={goalHandler}
          value={enteredGoalText}
        />
        <View style={styles.buttonContainer}>
          <View style={styles.button}>
            <Button title="Cancel" onPress={props.onCancel} color="#f31282" />
          </View>
          <View style={styles.button}>
            <Button title="Add Goal" onPress={addgoalHandler} color="#b180f0" />
          </View>
        </View>
      </View>
    </Modal>
  );
}

export default GoalInput;

const styles = StyleSheet.create({
  firstView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#311b6b",
    padding: 16,
  },
  image: {
    width: 100,
    height: 100,
    margin: 20,
  },
  inputStyle: {
    borderWidth: 1,
    borderColor: "#e4d0ff",
    borderRadius: 6,
    backgroundColor: "#e4d0ff",
    color: "#120438",
    width: "100%",
    padding: 16,
    width: '100%',
  },
  buttonContainer: {
    marginTop: 16,
    flexDirection: "row",
  },
  button: {
    width: 100,
    marginHorizontal: 8,
  },
});
