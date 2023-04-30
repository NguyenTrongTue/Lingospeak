import { StyleSheet, Dimensions } from "react-native";
const { width } = Dimensions.get("window");

const testStyle = StyleSheet.create({
  title: {
    color: "#FF0080",
    textAlign: "center",
    fontSize: 30,
    marginBottom: 10,
    marginTop: 50,
    fontWeight: 700,
  },
  // shadow: {
  //   shadowColor: "#000",
  //   shadowOffset: { width: 0, height: 6 },
  //   shadowOpacity: 0.1,
  //   shadowRadius: 10,
  //   elevation: 10,
  // },

  headerTitle: { color: "#000", fontWeight: "bold", fontSize: 16 },
  saveAreaViewContainer: {
    flex: 1,
    backgroundColor: "#FFF",
    justifyContent: "space-between",
  },
  viewContainer: { width, backgroundColor: "#FFF" },
  scrollViewContainer: {
    alignItems: "center",
    paddingVertical: "10%",
    paddingBottom: "10%",
  },

  dropdown1BtnStyle: {
    width: "80%",
    height: 50,
    backgroundColor: "#FFF",
    borderRadius: 8,
    borderWidth: 1,
    borderColor: "#800080",
  },
  dropdown1BtnTxtStyle: {
    color: "#800080",
    textAlign: "left",
    fontWeight: 600,
  },
  dropdown1DropdownStyle: { backgroundColor: "#800080" },
  dropdown1RowStyle: {
    backgroundColor: "#800080",
    borderBottomColor: "#C5C5C5",
  },
  dropdown1RowTxtStyle: { color: "#ffffff", textAlign: "left" },
  dropdown1SelectedRowStyle: { backgroundColor: "rgba(0,0,0,0.1)" },
  start: {
    color: "#800080",
    fontWeight: 600,
    backgroundColor: "#EFE4B0",
    width: "80%",
    padding: 16,
    textAlign: "center",
    fontSize: 26,
    alignSelf: "center",
    borderRadius: 10,
  },
  notewrapper: {
    position: "relative",
    alignItems: "center",
    marginBottom: 35,
  },
  note: {
    width: "80%",
    height: 120,
    alignItems: "center",
    padding: 20,
    backgroundColor: "#E3DEF3",
    borderRadius: 20,
  },
  noteText: {
    color: "#FF0080",
    fontWeight: 600,
    fontSize: 20,
  },
  noteDesc: {
    color: "#800080",
    fontWeight: 600,
    fontSize: 20,
  },
  image: {
    resizeMode: "contain",
    height: 100,
    width: 100,
    marginBottom: 20,
    marginLeft: 50,
  },
  chooseType: {
    alignSelf: "center",
    marginBottom: 20,
  },
});

export default testStyle;
