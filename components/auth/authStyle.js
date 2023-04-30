import { StyleSheet } from "react-native";

export const loginStyle = StyleSheet.create({
  container: {
    flex: 1,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    position: "relative",
  },
  center: {
    width: "100%",
    margin: "auto",
  },
  headerLogin: {
    marginBottom: 12,
    alignItems: "center",
  },
  wellcom: {
    color: "#800080",
    fontSize: 24,
  },
  brand: {
    color: "#FF0080",
    fontSize: 26,
    fontWeight: 700,
  },
  formCenter: {
    alignItems: "center",
  },
  input: {
    marginTop: 12,
    marginBottom: 12,
    height: 44,
    width: "80%",
    position: "relative",
  },
  textInput: {
    borderWidth: 2,
    padding: 10,
    borderRadius: 4,
    borderColor: "#800080",
    fontSize: 16,
    borderRadius: 8,
    backgroundColor: "white",
  },
  inputFocused: {
    backgroundColor: "#d9e0e6",
  },

  passwordIcon: {
    position: "absolute",
    right: 10,
    top: "50%",
    transform: [{ translateY: -12 }],
  },
  button: {
    width: "80%",
    height: 50,
    backgroundColor: "#800080",
    padding: 12,
    borderRadius: 4,
    marginTop: 10,
    marginBottom: 10,
    borderRadius: 12,
  },
  buttonText: {
    textAlign: "center",
    color: "white",

    fontSize: 20,
  },
  bottomButton: {
    marginTop: 16,
    alignItems: "center",
  },
  missPass: {
    color: "#800080",
    fontSize: 18,
    marginBottom: 10,
    textDecorationLine: "underline",
    fontWeight: 600,
  },
  dntHaveAcc: {
    color: "#800080",
    fontSize: 14,
    marginTop: 20,
  },
  signup: {
    color: "#FF0080",
    fontSize: 16,
    fontWeight: 500,
    textDecorationLine: "underline",
  },
  other: {
    alignItems: "center",
    marginTop: 20,
    flexDirection: "row",
    justifyContent: "center",
  },
  item: {
    borderRadius: 16,
    borderWidth: 2,
    borderColor: "#CECECE",
    borderStyle: "solid",
    margin: 10,
    padding: 10,
    position: "relative",
    width: "37%",
  },
  icon: {
    position: "absolute",
    top: 8,
    left: 10,
    width: 50,
    marginRight: 20,
  },
  itemText: {
    fontWeight: "bold",
    textAlign: "center",
    color: "#3b5998",
  },
  bottom: {
    alignItems: "center",
    marginTop: 10,
  },
  note: {
    color: "#afafaf",
    width: "80%",
    textAlign: "center",
  },
  policy: {
    color: "#afafaf",
    fontWeight: 700,
  },
});

export const registerStyle = StyleSheet.create({
  container: {
    flex: 1,
    display: "flex",
    position: "relative",
    backgroundColor: "white",
  },
  center: {
    width: "100%",
    padding: 20,
    marginTop: 120,
  },
  formCenter: {},
  input: {
    marginTop: 12,
    marginBottom: 12,
    height: 44,
    width: "100%",
    position: "relative",
  },
  textInput: {
    borderWidth: 2,
    padding: 10,
    borderRadius: 4,
    color: "#800080",
    borderColor: "#800080",
    fontSize: 18,
    borderRadius: 8,
    backgroundColor: "white",
  },
  inputFocused: {
    backgroundColor: "#d9e0e6",
  },

  passwordIcon: {
    position: "absolute",
    right: 10,
    top: "50%",
    transform: [{ translateY: -12 }],
  },
  button: {
    height: 50,
    borderRadius: 10,
    backgroundColor: "#800080",
    width: "90%",
    margin: 20,
    padding: 12,
    alignSelf: "center",
    width: "100%",
  },
  buttonText: {
    color: "white",
    textAlign: "center",
    fontSize: 20,
    fontWeight: 600,
  },
  bottomButton: {
    alignSelf: "center",
  },
  headerLogin: {
    marginBottom: 12,
    alignItems: "center",
  },
  wellcom: {
    color: "#800080",
    fontSize: 24,
  },
  brand: {
    color: "#FF0080",
    fontSize: 26,
    fontWeight: 700,
  },
  bottomText: {
    fontSize: 16,
    color: "#800080",
  },
  signin: {
    fontWeight: 700,
  },
  dropdown1BtnStyle: {
    width: "100%",
    height: 50,
    backgroundColor: "#FFF",
    borderRadius: 8,
    borderColor: "#800080",
    borderWidth: 2,
    borderStyle: "solid",
  },
  dropdown1BtnTxtStyle: {
    color: "#800080",
    textAlign: "left",
    fontWeight: 400,
  },
  dropdown1DropdownStyle: { backgroundColor: "#800080" },
  dropdown1RowStyle: {
    backgroundColor: "#800080",
    borderBottomColor: "#C5C5C5",
  },
  dropdown1RowTxtStyle: { color: "#ffffff", textAlign: "left" },
  dropdown1SelectedRowStyle: { backgroundColor: "rgba(0,0,0,0.1)" },
});
