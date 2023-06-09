import React, { useState } from "react";
import homeStyle from "./homeStyle";

import {
  Button,
  Text,
  Image,
  View,
  Pressable,
  TouchableOpacity,
} from "react-native";

export default function Home(props) {
  return (
    <View style={homeStyle.container}>
      <View style={homeStyle.center}>
        <Text style={homeStyle.title}>Lingo Speak</Text>

        <View style={homeStyle.features}>
          <TouchableOpacity
            style={homeStyle.featureItem}
            onPress={() => props.navigation.navigate("Profile")}
          >
            <Text style={homeStyle.featureText}>Hồ sơ</Text>
            <Image
              style={homeStyle.featureImage}
              source={require("../../assets/nguoi.png")}
            />
          </TouchableOpacity>

          <TouchableOpacity
            style={homeStyle.featureItem}
            onPress={() => props.navigation.navigate("History")}
          >
            <Text style={homeStyle.featureText}>Lịch sử kiểm tra</Text>
            <Image
              style={homeStyle.featureImage}
              source={require("../../assets/lich-su.png")}
            />
          </TouchableOpacity>

          <TouchableOpacity
            style={homeStyle.featureItem}
            onPress={() => props.navigation.navigate("Practice")}
          >
            <Text style={homeStyle.featureText}>Luyện tập</Text>
            <Image
              style={homeStyle.featureImage}
              source={require("../../assets/luyentap.png")}
            />
          </TouchableOpacity>
          <TouchableOpacity
            style={homeStyle.featureItem}
            onPress={() => props.navigation.navigate("Test")}
          >
            <Text style={homeStyle.featureText}>Kiểm tra</Text>
            <Image
              style={homeStyle.featureImage}
              source={require("../../assets/test.png")}
            />
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}
