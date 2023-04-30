import { StyleSheet } from "react-native";

const levelStyle = StyleSheet.create({
  container: {
    flex: 1,
    display: "flex",
    position: "relative",
  },
  center: {
    width: "100%",
    margin: "auto",
    padding: 20,
  },
  box: {},
  image: {
    width: 40,
    height: 40,
    resizeMode: "contain",
    marginBottom: 30,
    marginTop: 50,

  },

  testwrapper: {
    width: "80%",
    height: 120,
    alignItems: "center",
    padding: 20,
    backgroundColor: "#FDECA6",
    borderRadius: 20,
  },
  test: {},
  testText: {
    color: "#683256",
    fontSize: 20,
    fontWeight: 600,
  },
  microImage: {
    width: 40,
    height: 40,
    resizeMode: "contain",
    marginBottom: 30,
    alignSelf: "center",
  },
  recording: {
    marginTop: 50,
  },
  resultwrapper: {
    width: "80%",

    alignItems: "center",
    padding: 20,
    backgroundColor: "#FEBCE6",
    borderRadius: 20,
    alignSelf: "center",
  },
  result: {},
  resultText: {
    color: "#683256",
    fontSize: 20,
    fontWeight: 600,
  },
  correct: {
    color: "green",
  },
  incorrect: {
    color: "red",
  },
  resultScore: {
    padding: 20,
    width: 200,
    backgroundColor: "#EFE4B0",
    margin: 20,
    marginBottom: 40,
    fontSize: 20,
    alignSelf: "center",
    borderRadius: 16,
    borderWidth: 2,
    borderColor: "#683256",
    textAlign: "center",
    fontWeight: 700,
    color: "#683256",
  },
});

export default levelStyle;
