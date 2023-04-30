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

export default function Profile(props) {
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
            <Text style={profileStyle.username}>TRONG TUE</Text>
          </View>
          <Icon
            style={profileStyle.icon}
            name="clipboard-pencil"
            size={40}
            color="#800080"
          />
        </View>
        <View style={profileStyle.middle}>
          <View style={profileStyle.item}>
            <Text style={profileStyle.label}>Họ và tên:</Text>
            <Text style={profileStyle.value}>Nguyễn Trọng Tue</Text>
          </View>
          <View style={profileStyle.item}>
            <Text style={profileStyle.label}>Giới tính:</Text>
            <Text style={profileStyle.value}>Nam</Text>
          </View>
          <View style={profileStyle.item}>
            <Text style={profileStyle.label}>Ngày sinh</Text>
            <Text style={profileStyle.value}>01/06/2002</Text>
          </View>
          <View style={profileStyle.item}>
            <Text style={profileStyle.label}>Email:</Text>
            <Text style={profileStyle.value}>tuetn@gmail.com</Text>
          </View>
          <View style={profileStyle.item}>
            <Text style={profileStyle.label}>Điện thoại:</Text>
            <Text style={profileStyle.value}>035937609</Text>
          </View>
          <View style={profileStyle.desc}>
            <Text style={profileStyle.descLabel}>Mô tả:</Text>
            <Text
              style={profileStyle.descValue}
              numberOfLines={2}
              ellipsizeMode="tail"
            >
              Đây là một số môt tả về bản thân tôi. Here are a few lines
              describing myself
            </Text>
          </View>
        </View>
      </View>
    </View>
  );
}
