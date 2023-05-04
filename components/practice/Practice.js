import React, { useState } from "react";
import historyStyle from "./practiceStyle";

import {
  Button,
  Text,
  Image,
  View,
  Pressable,
  TouchableOpacity,
} from "react-native";
import Icon from "react-native-vector-icons/FontAwesome";
import { HISTORYLIST } from "../dummyData";

export default function Practice(props) {
  const [tab, setTab] = useState(1);
  return (
    <View style={historyStyle.container}>
      <View style={historyStyle.center}>
        <Text style={historyStyle.title}>Lingo Speak</Text>
        <TouchableOpacity
          style={historyStyle.button}
          onPress={() => props.navigation.navigate("PrePractice")}
        >
          <Text style={historyStyle.buttonLabel}>Luyện từ</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={historyStyle.button}
          onPress={() => props.navigation.navigate("PrePractice")}
        >
          <Text style={historyStyle.buttonLabel}>Luyện câu</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}
