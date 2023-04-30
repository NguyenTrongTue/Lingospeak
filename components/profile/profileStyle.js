import { StyleSheet } from "react-native";

const profileStyle = StyleSheet.create({
  container: {
    flex: 1,
    display: "flex",
    alignItems: "center",
    // justifyContent: "center",
    position: "relative",
    backgroundColor: "#C8BFE7",
  },
  center: {
    width: "100%",

    alignItems: "center",
    padding: 20,
  },
  top: {
    width: "100%",
    position: "relative",
    marginTop: 20,
    marginBottom: 20,
  },
  user: {
    alignSelf: "center",
  },
  avatarWrapper: {
    width: 150,
    height: 150,
    borderRadius: 100,
    borderColor: "#800080",
    borderWidth: 2,
    borderStyle: "solid",
    overflow: "hidden",
  },
  image: {
    resizeMode: "contain",
    width: "100%",
    height: "100%",
  },
  icon: {
    position: "absolute",
    right: 0,
  },
  username: {
    color: "#FF0080",
    fontWeight: 700,
    fontSize: 24,
  },
  middle: {
    width: "100%",
  },
  item: {
    width: "100%",
    display: "flex",
    flexDirection: "row",
    borderWidth: 2,
    borderColor: "white",
    borderStyle: "solid",
    borderRadius: 10,
    marginTop: 5,
    marginBottom: 5,
    overflow: "hidden",
  },
  label: {
    padding: 10,
    backgroundColor: "#800080",
    color: "white",
    fontWeight: 700,
    fontSize: 18,
    width: 110,
  },
  value: {
    width: "100%",
    padding: 10,
    backgroundColor: "white",
    color: "#800080",
    fontWeight: 700,
    fontSize: 18,
  },
  desc: {
    width: "100%",
    flexDirection: "row",
    position: "relative",
    borderWidth: 2,
    borderColor: "white",
    borderStyle: "solid",
    borderRadius: 10,
    marginTop: 5,
    marginBottom: 5,
    overflow: "hidden",
    backgroundColor: "white",
  },
  descLabel: {
    padding: 5,
    backgroundColor: "#800080",
    color: "white",
    fontWeight: 700,
    fontSize: 18,
    width: 110,
  },
  descValue: {
    color: "#800080",
    fontWeight: 700,
    fontSize: 14,
  },
});

export default profileStyle;
