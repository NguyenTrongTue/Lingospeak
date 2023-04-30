import { StyleSheet } from "react-native";

const homeStyle = StyleSheet.create({
  container: {
    flex: 1,
    display: "flex",
    // alignItems: "center",
    // justifyContent: "center",
    position: "relative",
  },
  center: {
    width: "100%",
    margin: "auto",
  },
  title: {
    color: "#FF0080",
    textAlign: "center",
    fontSize: 30,
    marginBottom: 100,
    marginTop: 100,
  },
  features: {
    width: "100%",
    display: "flex",
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "center",
  },
  featureItem: {
    width: "42%",
    alignItems: "center",
    margin: 10,
    borderRadius: 16,
    backgroundColor: "#FFFFA4",
    borderWidth: 2,
    borderColor: "#CECECE",
    borderStyle: "solid",
    padding: 8,
    paddingBottom: 10,
  },
  featureText: {
    color: "#800080",
    fontWeight: 600,
    fontSize: 20,
    marginBottom: 12,
  },
  featureImage: {
    resizeMode: "contain",
    height: 100,
    width: 100,
  },
});

export default homeStyle;
