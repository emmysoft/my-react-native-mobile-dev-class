import { View, Text, StyleSheet } from "react-native"; 
import Colors from "../../constants/colors";

function Title({ children }) {
  return <Text style={styles.title}>{children}</Text>;
}

export default Title;

const styles = StyleSheet.create({
  title: {
    fontFamily: "open-sans-bold",
    fontSize: 25,
    // fontWeight: "bold",
    color: "#fff",
    textAlign: "center",
    borderWidth: 2,
    borderRadius: 10,
    borderColor: "#fff",
    padding: 12,
    marginTop: 44,
  },
});
