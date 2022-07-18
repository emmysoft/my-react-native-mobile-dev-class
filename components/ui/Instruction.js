import { StyleSheet, Text } from "react-native";
import Colors from "../../constants/colors";

const Instruction = ({ children, style }) => {
  return <Text style={[styles.topic, style]}> {children} </Text>;
};

export default Instruction;

const styles = StyleSheet.create({
  topic: {
    color: Colors.secondary1,
    // fontWeight: "bold",
    fontSize: 24,
    fontFamily: "open-sans",
  },
});
