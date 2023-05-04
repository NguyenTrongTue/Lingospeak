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
import FontAwesome from "react-native-vector-icons/FontAwesome";
import SelectDropdown from "react-native-select-dropdown";
import testStyle from "./prePracticeStyle";
import { useDispatch } from "react-redux";
import { selectLevel, selectType } from "../redux/testSlice";
export default PrePractice = (props) => {
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
            Bắt đầu luyện tập
          </Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};
