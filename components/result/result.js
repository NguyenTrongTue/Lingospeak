import React, { useEffect, useState } from "react";
import resultStyle from "./resultStyle";

import {
  Button,
  Text,
  Image,
  View,
  Pressable,
  TouchableOpacity,
} from "react-native";
import Icon from "react-native-vector-icons/FontAwesome";
import { useDispatch, useSelector } from "react-redux";
import { isPass } from "../redux/testSlice";

export default function Result(props) {
  const { pass, score, level } = useSelector((state) => state.test);

  return (
    <View style={resultStyle.container}>
      {!pass ? (
        <View style={resultStyle.center}>
          <Image
            style={resultStyle.image}
            source={require("../../assets/quyet-tam.png")}
          />
          <Text style={resultStyle.desc}>Điểm bài kiểm tra của bạn là</Text>
          <View style={resultStyle.scoreWrapper}>
            <Text style={resultStyle.score}>{score.toFixed(2)}</Text>
          </View>
          <Text style={resultStyle.text}>
            Rất tiếc bạn vẫn chưa đạt đến trình độ{" "}
            <Text style={resultStyle.level}>{level}</Text>
          </Text>
          <Text style={resultStyle.text}>Hãy cố gắng hơn ở lần sau nhé!</Text>
          <Pressable
            style={resultStyle.backHome}
            onPress={() => props.navigation.navigate("Home")}
          >
            <Text style={resultStyle.backHomeText}>Quay về trang chủ</Text>
          </Pressable>
        </View>
      ) : (
        <View style={resultStyle.center}>
          <Image
            style={resultStyle.image}
            source={require("../../assets/phao-hoa.png")}
          />
          <Text style={resultStyle.text}>
            Chúc mừng bạn đã vượt qua bài kiểm tra trình độ{" "}
            <Text style={resultStyle.level}>{level}</Text>
          </Text>
          <Text style={resultStyle.desc}>Điểm bài kiểm tra của bạn là</Text>
          <View style={resultStyle.scoreWrapper}>
            <Text style={resultStyle.score}>{score.toFixed(2)}</Text>
          </View>
          <Pressable
            style={resultStyle.backHome}
            onPress={() => props.navigation.navigate("Home")}
          >
            <Text style={resultStyle.backHomeText}>Quay về trang chủ</Text>
          </Pressable>
        </View>
      )}
    </View>
  );
}
