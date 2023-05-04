import React, { useState } from "react";
import profileStyle from "./EditProfileStyle";
import { Formik } from "formik";
import {
  Button,
  Text,
  Image,
  View,
  TextInput,
  Pressable,
  TouchableOpacity,
} from "react-native";
import Icon from "react-native-vector-icons/Foundation";
import { useDispatch, useSelector } from "react-redux";
import { userUpdate } from "../redux/authReducer";

export default function EditProfile(props) {
  const dispatch = useDispatch();
  const { currentUser } = useSelector((state) => state.user);
  return (
    <View style={profileStyle.container}>
      <View style={profileStyle.center}>
        <View style={profileStyle.top}>
          <View style={profileStyle.user}>
            <View style={profileStyle.avatarWrapper}>
              <Image
                style={profileStyle.image}
                source={require("../../assets/avatar.png")}
              />
            </View>
            <Text style={profileStyle._username}>TRONG TUE</Text>
          </View>
          <Icon
            style={profileStyle.icon}
            name="clipboard-pencil"
            size={40}
            color="#800080"
          />
        </View>
        <Formik
          initialValues={{
            username: currentUser.username,
            gender: currentUser.gender,
            birthday: currentUser.birthday,
            email: currentUser.email,
            phone: currentUser.phone,
            bio: currentUser.bio,
          }}
          onSubmit={(values) => {
            dispatch(userUpdate(values));
            props.navigation.navigate("Profile");
          }}
        >
          {({ handleChange, handleBlur, handleSubmit, values }) => (
            <View style={profileStyle.middle}>
              <View style={profileStyle.item}>
                <Text style={profileStyle.label}>Họ và tên:</Text>
                <TextInput
                  style={profileStyle.value}
                  onChangeText={handleChange("username")}
                  onBlur={handleBlur("username")}
                  value={values.username}
                />
              </View>
              <View style={profileStyle.item}>
                <Text style={profileStyle.label}>Giới tính:</Text>
                <TextInput
                  style={profileStyle.value}
                  onChangeText={handleChange("gender")}
                  onBlur={handleBlur("gender")}
                  value={values.gender}
                />
              </View>
              <View style={profileStyle.item}>
                <Text style={profileStyle.label}>Ngày sinh</Text>
                <TextInput
                  style={profileStyle.value}
                  onChangeText={handleChange("birthday")}
                  onBlur={handleBlur("birthday")}
                  value={values.birthday}
                />
              </View>
              <View style={profileStyle.item}>
                <Text style={profileStyle.label}>Email:</Text>
                <TextInput
                  style={profileStyle.value}
                  onChangeText={handleChange("email")}
                  onBlur={handleBlur("email")}
                  value={values.email}
                />
                <Text style={profileStyle.value}>tuetn@gmail.com</Text>
              </View>
              <View style={profileStyle.item}>
                <Text style={profileStyle.label}>Điện thoại:</Text>
                <TextInput
                  style={profileStyle.value}
                  onChangeText={handleChange("phone")}
                  onBlur={handleBlur("phone")}
                  value={values.phone}
                />
              </View>
              <View style={profileStyle.desc}>
                <Text style={profileStyle.descLabel}>Mô tả:</Text>
                <TextInput
                  style={profileStyle.value}
                  onChangeText={handleChange("bio")}
                  onBlur={handleBlur("bio")}
                  value={values.bio}
                />
              </View>
              <Pressable style={profileStyle.btn} onPress={handleSubmit}>
                <Text style={profileStyle.btnLabel}>Lưu</Text>
              </Pressable>
            </View>
          )}
        </Formik>
      </View>
    </View>
  );
}
