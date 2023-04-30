import React, { useRef, useState } from "react";
import axios from "axios";
import { loginStyle as styles } from "./authStyle";
import {
  Spinner,
  HStack,
  Center,
  NativeBaseProvider,
  Modal,
  ScrollView,
  Button,
} from "native-base";

import { Text, TextInput, View, Pressable } from "react-native";
import Icon from "react-native-vector-icons/FontAwesome";
import VisibilityIcon from "react-native-vector-icons/MaterialIcons";

import { useDispatch } from "react-redux";
import { loginSuccess } from "../redux/authReducer";

const Process = () => {
  return (
    <HStack space={8} justifyContent="center" alignItems="center">
      <Spinner size="lg" />
    </HStack>
  );
};

function ModalComponent({ modalVisible, setModalVisible, props }) {
  return (
    <>
      <Modal isOpen={modalVisible} onClose={setModalVisible} size={"md"}>
        <Modal.Content maxH="212">
          <Modal.Body>
            <ScrollView>
              <Text>
                Tài khoản này chưa được đăng ký, bạn có muốn đăng ký bây giờ
                không?
              </Text>
            </ScrollView>
          </Modal.Body>
          <Modal.Footer>
            <Button.Group space={2}>
              <Button
                variant="ghost"
                colorScheme="blueGray"
                onPress={() => {
                  setModalVisible(false);
                }}
              >
                Hủy bỏ
              </Button>
              <Button
                onPress={() => {
                  props.navigation.navigate("Register");
                }}
              >
                Đăng ký bây giờ
              </Button>
            </Button.Group>
          </Modal.Footer>
        </Modal.Content>
      </Modal>
    </>
  );
}

export default function Login(props) {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [showPassword, setShowPassword] = useState(false);

  const [modalVisible, setModalVisible] = useState(false);
  const [usernameFocus, setUsernameFocus] = useState(false);
  const [passwordFocus, setPasswordFocus] = useState(false);

  const dispatch = useDispatch();
  const handleLogin = async () => {
    try {
      setLoading(true);
      const res = await axios.get(`http://localhost:8000/user/${username}`);
      setLoading(false);
      dispatch(loginSuccess(res.data));
      props.navigation.navigate("Home");
    } catch (e) {
      console.log(e.message);
      setModalVisible(true);
      setLoading(false);
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.center}>
        <View style={styles.headerLogin}>
          <Text style={styles.wellcom}>Chào mừng bạn đến với</Text>
          <Text style={styles.brand}>LingoSpeak</Text>
        </View>
        <View style={styles.formCenter}>
          <View style={styles.input}>
            <TextInput
              onFocus={() => setUsernameFocus(true)}
              onBlur={() => setUsernameFocus(false)}
              style={[styles.textInput, usernameFocus && styles.inputFocused]}
              placeholder="Tên đăng nhập"
              onChangeText={(username) => setUsername(username)}
            />
          </View>
          <View style={styles.input}>
            <TextInput
              onFocus={() => setPasswordFocus(true)}
              onBlur={() => setPasswordFocus(false)}
              style={[styles.textInput, passwordFocus && styles.inputFocused]}
              placeholder="Mật khẩu"
              secureTextEntry={!showPassword}
              onChangeText={(password) => setPassword(password)}
            />
            <Pressable
              onPress={() => setShowPassword(!showPassword)}
              style={styles.passwordIcon}
            >
              <VisibilityIcon
                name={showPassword ? "visibility" : "visibility-off"}
                color="#c7c3c3"
                size={20}
                solid
              ></VisibilityIcon>
            </Pressable>
          </View>

          <Pressable style={styles.button} onPress={handleLogin}>
            {!loading ? (
              <Text style={styles.buttonText}>Đăng nhập</Text>
            ) : (
              <Center flex={1} px="3">
                <Process />
              </Center>
            )}
          </Pressable>
        </View>
        <View style={styles.bottomButton}>
          <Text style={styles.missPass}>Quên mật khẩu</Text>
          <Text style={styles.dntHaveAcc}>Bạn chưa có mật khẩu</Text>

          <Text
            style={styles.signup}
            onPress={() => props.navigation.navigate("Register")}
          >
            Đăng ký ngay
          </Text>
        </View>
        <View style={styles.other}>
          <Pressable style={styles.item}>
            <Icon
              name="google"
              color="#ff0000"
              size={20}
              style={styles.icon}
              solid
            ></Icon>
            <Text style={styles.itemText}>GOOGLE</Text>
          </Pressable>
          <Pressable style={styles.item}>
            <Icon
              name="facebook-square"
              color="#3b5998"
              size={20}
              style={styles.icon}
              solid
            ></Icon>
            <Text style={styles.itemText}>FACEBOOK</Text>
          </Pressable>
        </View>
        <View style={styles.bottom}>
          <Text style={styles.note}>
            Khi đăng ký trên LingoSpeak, bạn đã đồng ý với
            <Text style={styles.policy}>
              {" "}
              Các chính sách và Chính sách bảo mật{" "}
            </Text>
            của chúng tôi
          </Text>
        </View>

        <ModalComponent
          modalVisible={modalVisible}
          setModalVisible={setModalVisible}
          props={props}
        />
      </View>
    </View>
  );
}
