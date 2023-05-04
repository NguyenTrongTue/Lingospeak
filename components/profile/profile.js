import React, { useState } from "react";
import profileStyle from "./profileStyle";

import {
  Button,
  Text,
  Image,
  View,
  Pressable,
  TouchableOpacity,
} from "react-native";
import Icon from "react-native-vector-icons/Foundation";
import { useSelector } from "react-redux";

export default function Profile(props) {
  const { currentUser } = useSelector((state) => state.user);
  const { username, birthday, email, phone, gender, bio } = currentUser;
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
            <Text style={profileStyle._username}>{username}</Text>
          </View>
          <Pressable
            style={profileStyle.icon}
            onPress={() => props.navigation.navigate("EditProfile")}
          >
            <Icon name="clipboard-pencil" size={40} color="#800080" />
          </Pressable>
        </View>
        <View style={profileStyle.middle}>
          <View style={profileStyle.item}>
            <Text style={profileStyle.label}>Họ và tên:</Text>
            <Text style={profileStyle.value}>{username}</Text>
          </View>
          <View style={profileStyle.item}>
            <Text style={profileStyle.label}>Giới tính:</Text>
            <Text style={profileStyle.value}>{gender}</Text>
          </View>
          <View style={profileStyle.item}>
            <Text style={profileStyle.label}>Ngày sinh</Text>
            <Text style={profileStyle.value}>{birthday}2</Text>
          </View>
          <View style={profileStyle.item}>
            <Text style={profileStyle.label}>Email:</Text>
            <Text style={profileStyle.value}>{email}</Text>
          </View>
          <View style={profileStyle.item}>
            <Text style={profileStyle.label}>Điện thoại:</Text>
            <Text style={profileStyle.value}>{phone}</Text>
          </View>
          <View style={profileStyle.desc}>
            <Text style={profileStyle.descLabel}>Mô tả:</Text>
            <Text
              style={profileStyle.descValue}
              numberOfLines={2}
              ellipsizeMode="tail"
            >
              {bio}
            </Text>
          </View>
        </View>
      </View>
    </View>
  );
}
