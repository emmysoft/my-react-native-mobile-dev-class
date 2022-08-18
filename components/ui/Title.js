import { Text, StyleSheet, Platform } from "react-native"; 
import Colors from "../../constants/colors";

function Title({ children }) {
  return <Text style={styles.title}>{children}</Text>;
}

export default Title;

const styles = StyleSheet.create({
  title: {
    fontFamily: "open-sans-bold",
    fontSize: 25,
    color: "#fff",
    textAlign: "center",
    borderWidth: Platform.select({ios: 0, android: 2}),
    borderRadius: 10,
    borderColor: "#fff",
    padding: 12,
    marginTop: 44,
    maxWidth: "80%",
  },
});
