import { StyleSheet } from "react-native";

const historyStyle = StyleSheet.create({
  container: {
    flex: 1,
    display: "flex",
    position: "relative",
    backgroundColor: "#800080",
  },
  center: {
    height: "100%",
    width: "100%",
    backgroundColor: "#C8BFE7",
  },
  title: {
    color: "#FF0080",
    textAlign: "center",
    fontSize: 30,
    marginBottom: 70,
    marginTop: 50,
    fontWeight: 700,
  },
  button: {
    width: "80%",
    marginTop: 20,
    marginBottom: 20,
    alignSelf: "center",
    backgroundColor: "#EFE4B0",
    borderRadius: 10,
    borderColor: "#7E1B7E",
    borderWidth: 2,
    padding: 10,
  },
  buttonLabel: {
    textAlign: "center",
    fontSize: 24,
    color: "#7E1B7E",
  },
});

export default historyStyle;
