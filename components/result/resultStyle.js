import { StyleSheet } from "react-native";

const homeStyle = StyleSheet.create({
  container: {
    flex: 1,
    display: "flex",
    alignItems: "center",
    // justifyContent: "center",
    position: "relative",
  },
  center: {
    width: "100%",
    margin: "auto",
    alignItems: "center",
  },

  image: {
    resizeMode: "contain",
    height: 200,
    width: 200,
    margin: 30,
  },
  desc: {
    fontWeight: 600,
    fontSize: 20,
    color: "#893386",
  },
  scoreWrapper: {
    padding: 20,
    width: 200,
    backgroundColor: "#EFE4B0",
    margin: 20,
    marginBottom: 40,
  },
  score: {
    color: "#ED1C24",
    fontSize: 28,
    fontWeight: 700,
    textAlign: "center",
  },
  level: {
    color: "#F32892",
    fontSize: 20,
    fontWeight: 700,
  },
  text: {
    textAlign: "center",
    width: "80%",
    color: "#893386",
    fontSize: 18,
    fontWeight: 700,
    margin: 20,
  },
  backHome: {
    backgroundColor: "#161223",
    padding: 12,
    borderRadius: 8,
  },
  backHomeText: {
    color: "white",
    fontSize: 18,
  },
});

export default homeStyle;
