import React, { useState } from "react";
import axios from "axios";
import { Pressable, Text, TextInput, View } from "react-native";
import { Snackbar } from "react-native-paper";
import { registerStyle } from "./authStyle";
import FontAwesome from "react-native-vector-icons/FontAwesome";
import {
  Button,
  useToast,
  Spinner,
  HStack,
  Center,
  NativeBaseProvider,
} from "native-base";
import SelectDropdown from "react-native-select-dropdown";
import VisibilityIcon from "react-native-vector-icons/MaterialIcons";

const genderlist = ["Nam", "Nữ", "Khác"];

const Process = () => {
  return (
    <HStack space={8} justifyContent="center" alignItems="center">
      <Spinner size="lg" />
    </HStack>
  );
};

export default function Register(props) {
  const [birthday, setBirthDay] = useState("");
  const [password, setPassword] = useState("");
  const [gender, setGender] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  const [username, setUsername] = useState("");
  const [loading, setLoading] = useState(false);
  const [usernameFocus, setUsernameFocus] = useState(false);
  const [birthdayFocus, setBirthdayFocus] = useState(false);
  const [passwordFocus, setPasswordFocus] = useState(false);

  const toast = useToast();
  const handleSubmit = async () => {
    try {
      const data = {
        username,
        gender,
        password,
        birthday,
        email: "",
        phone: "",
        bio: "",
      };
      const dataJSON = JSON.stringify(data);
      setLoading(true);

      const res = await fetch("http://localhost:8000/usercreate/", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: dataJSON,
      });
      setLoading(false);
      toast.show({
        description: "Đăng ký thành công",
      });
      setTimeout(() => {
        props.navigation.navigate("Login");
      }, 2000);
    } catch (e) {
      console.log(e);
    }
  };

  return (
    <View style={registerStyle.container}>
      <View style={registerStyle.center}>
        <View style={registerStyle.headerLogin}>
          <Text style={registerStyle.wellcom}>Chào mừng bạn đến với</Text>
          <Text style={registerStyle.brand}>LingoSpeak</Text>
        </View>
        <View style={registerStyle.formCenter}>
          <View style={registerStyle.input}>
            <TextInput
              onFocus={() => setUsernameFocus(true)}
              onBlur={() => setUsernameFocus(false)}
              style={[
                registerStyle.textInput,
                usernameFocus && registerStyle.inputFocused,
              ]}
              placeholder="Username"
              value={username}
              onChangeText={(username) => setUsername(username)}
            />
          </View>

          <View style={registerStyle.input}>
            <TextInput
              onFocus={() => setBirthdayFocus(true)}
              onBlur={() => setBirthdayFocus(false)}
              style={[
                registerStyle.textInput,
                birthdayFocus && registerStyle.inputFocused,
              ]}
              placeholder="yyyy-mm-dd"
              onChangeText={(birthday) => setBirthDay(birthday)}
              value={birthday}
            />
          </View>
          <SelectDropdown
            data={genderlist}
            onSelect={(selectedItem, index) => {
              setGender(selectedItem === "Nam" ? "MALE" : "FEMALE");
            }}
            defaultButtonText={"Chọn giới tính"}
            buttonTextAfterSelection={(selectedItem, index) => {
              return selectedItem;
            }}
            rowTextForSelection={(item, index) => {
              return item;
            }}
            buttonStyle={registerStyle.dropdown1BtnStyle}
            buttonTextStyle={registerStyle.dropdown1BtnTxtStyle}
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
            dropdownStyle={registerStyle.dropdown1DropdownStyle}
            rowStyle={registerStyle.dropdown1RowStyle}
            rowTextStyle={registerStyle.dropdown1RowTxtStyle}
            selectedRowStyle={registerStyle.dropdown1SelectedRowStyle}
          />
          <View style={registerStyle.input}>
            <TextInput
              onFocus={() => setPasswordFocus(true)}
              onBlur={() => setPasswordFocus(false)}
              style={[
                registerStyle.textInput,
                passwordFocus && registerStyle.inputFocused,
              ]}
              placeholder="Password"
              secureTextEntry={!showPassword}
              onChangeText={(password) => setPassword(password)}
              value={password}
            />
            <Pressable
              onPress={() => setShowPassword(!showPassword)}
              style={registerStyle.passwordIcon}
            >
              <VisibilityIcon
                name={showPassword ? "visibility" : "visibility-off"}
                color="#c7c3c3"
                size={20}
                solid
              ></VisibilityIcon>
            </Pressable>
          </View>

          <Pressable style={registerStyle.button} onPress={handleSubmit}>
            {!loading ? (
              <Text style={registerStyle.buttonText}>Đăng nhập</Text>
            ) : (
              <NativeBaseProvider>
                <Center flex={1} px="3">
                  <Process />
                </Center>
              </NativeBaseProvider>
            )}
          </Pressable>
        </View>

        <View style={registerStyle.bottomButton}>
          <Text
            style={registerStyle.bottomText}
            onPress={() => props.navigation.navigate("Login")}
          >
            Already have an account?{" "}
            <Text style={registerStyle.signin}>Sign In</Text>
          </Text>
        </View>
      </View>
    </View>
  );
}

import { StyleSheet } from "react-native";
