import { StyleSheet, View } from "react-native";
import Colors from "../../constants/colors";

function Card({ children }) {
  return <View style={styles.inputStyle}>{children}</View>;
}

export default Card;

const styles = StyleSheet.create({
  inputStyle: {
    justifyContent: "center",
    alignItems: "center",
    marginTop: 100,
    marginHorizontal: 24,
    borderRadius: 8,
    padding: 16,
    backgroundColor: Colors.primary3,
    elevation: 4,
  },
});
