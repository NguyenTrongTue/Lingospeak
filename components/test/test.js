/* eslint-disable no-undef */
import React from "react";
import {
  View,
  Text,
  SafeAreaView,
  StatusBar,
  Dimensions,
  StyleSheet,
  ScrollView,
  Image,
  TouchableOpacity,
} from "react-native";
const { width } = Dimensions.get("window");
import FontAwesome from "react-native-vector-icons/FontAwesome";
import SelectDropdown from "react-native-select-dropdown";
import testStyle from "./testStyle";
import { useDispatch } from "react-redux";
import { selectLevel, selectType } from "../redux/testSlice";
export default Test = (props) => {
  const level = ["a1", "a2", "b1", "b2"];
  const type = ["Phát âm", "Dịch nghĩa"];

  const dispatch = useDispatch();

  return (
    <SafeAreaView style={testStyle.saveAreaViewContainer}>
      <View>
        <Text style={testStyle.title}>Lingo Speak</Text>
        <View style={testStyle.viewContainer}>
          <ScrollView
            showsVerticalScrollIndicator={false}
            alwaysBounceVertical={false}
            contentContainerStyle={testStyle.scrollViewContainer}
          >
            <SelectDropdown
              data={level}
              onSelect={(selectedItem, index) => {
                dispatch(selectLevel(selectedItem));
                console.log(selectedItem, index);
              }}
              defaultButtonText={"Chọn độ khó"}
              buttonTextAfterSelection={(selectedItem, index) => {
                return selectedItem.toUpperCase();
              }}
              rowTextForSelection={(item, index) => {
                return item.toUpperCase();
              }}
              buttonStyle={testStyle.dropdown1BtnStyle}
              buttonTextStyle={testStyle.dropdown1BtnTxtStyle}
              renderDropdownIcon={(isOpened) => {
                return (
                  <FontAwesome
                    name={isOpened ? "chevron-up" : "chevron-down"}
                    color={"#800080"}
                    size={18}
                  />
                );
              }}
              dropdownIconPosition={"right"}
              dropdownStyle={testStyle.dropdown1DropdownStyle}
              rowStyle={testStyle.dropdown1RowStyle}
              rowTextStyle={testStyle.dropdown1RowTxtStyle}
              selectedRowStyle={testStyle.dropdown1SelectedRowStyle}
            />
          </ScrollView>
          <View style={testStyle.chooseType}>
            <SelectDropdown
              data={type}
              onSelect={(selectedItem, index) => {
                dispatch(selectType(selectedItem));
                console.log(selectedItem, index);
              }}
              defaultButtonText={"Chọn dạng bài kiểm tra"}
              buttonTextAfterSelection={(selectedItem, index) => {
                return selectedItem;
              }}
              rowTextForSelection={(item, index) => {
                return item;
              }}
              buttonStyle={testStyle.dropdown1BtnStyle}
              buttonTextStyle={testStyle.dropdown1BtnTxtStyle}
              renderDropdownIcon={(isOpened) => {
                return (
                  <FontAwesome
                    name={isOpened ? "chevron-up" : "chevron-down"}
                    color={"#800080"}
                    size={18}
                  />
                );
              }}
              dropdownIconPosition={"right"}
              dropdownStyle={testStyle.dropdown1DropdownStyle}
              rowStyle={testStyle.dropdown1RowStyle}
              rowTextStyle={testStyle.dropdown1RowTxtStyle}
              selectedRowStyle={testStyle.dropdown1SelectedRowStyle}
            />
          </View>
        </View>
        <TouchableOpacity>
          <Text
            style={testStyle.start}
            onPress={() => props.navigation.navigate("Level")}
          >
            Bắt đầu
          </Text>
        </TouchableOpacity>
      </View>
      <View>
        <View style={testStyle.notewrapper}>
          <View style={testStyle.note}>
            <Text style={testStyle.noteText}>
              Lưu ý:{" "}
              <Text style={testStyle.noteDesc}>
                Bải kiểm tra của bạn phải đặt ít nhất 8 điểm để đạt mức độ đã
                chọn
              </Text>
            </Text>
          </View>
          <View
            style={{
              position: "absolute",
              bottom: -20,
              left: "20%",
              width: 0,
              height: 0,
              backgroundColor: "transparent",
              borderStyle: "solid",
              borderTopWidth: 50,
              borderRightWidth: 50,
              borderBottomWidth: 0,
              borderLeftWidth: 0,
              borderTopColor: "#E3DEF3",
              borderRightColor: "transparent",
              borderBottomColor: "transparent",
              borderLeftColor: "transparent",
              transform: [{ rotate: "-135deg" }],
            }}
          />
        </View>
        <Image
          style={testStyle.image}
          source={require("../../assets/quyet-tam.png")}
        />
      </View>
    </SafeAreaView>
  );
};
