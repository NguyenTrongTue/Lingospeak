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
    backgroundColor: "#9D79CE",
  },
  header: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    width: "100%",
    borderTopColor: "white",
    borderTopWidth: 2,
  },
  tab: {
    backgroundColor: "#C8BFE7",
    flex: 1,
    padding: 8,
  },
  tabText: {
    color: "#800080",
    fontSize: 20,
    fontWeight: 500,
    textAlign: "center",
  },
  activeTabText: {
    color: "white",
  },
  activeTab: {
    backgroundColor: "#800080",
    borderColor: "white",
    borderWidth: 2,
    borderTopWidth: 0,
    borderStyle: "solid",
  },
  box: {
    width: "100%",
    marginTop: 20,
    padding: 16,
  },
  top: {
    width: "100%",
    display: "flex",
    flexDirection: "row",
    gap: 2,
    marginTop: 2,
  },
  topLabel: {
    flex: 1,
    backgroundColor: "#FE89AC",
    color: "#880015",
    textAlign: "center",
    padding: 6,
    fontSize: 18,
    fontWeight: 500,
  },
  topLabel1: {
    flex: 2,
    backgroundColor: "#FE89AC",
    color: "#880015",
    textAlign: "center",
    padding: 6,
    fontSize: 18,
    fontWeight: 500,
  },
  contentLabel: {
    backgroundColor: "#FDECA6",
    color: "#7E1B8B",
    fontSize: 16,
  },
});

export default historyStyle;
