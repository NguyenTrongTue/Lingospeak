import React, { useState } from "react";
import historyStyle from "./historyStyle";

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

export default function Home(props) {
  const [tab, setTab] = useState(1);
  return (
    <View style={historyStyle.container}>
      <View style={historyStyle.center}>
        <View style={historyStyle.header}>
          <Pressable
            onPress={() => setTab(1)}
            style={[historyStyle.tab, tab === 1 && historyStyle.activeTab]}
          >
            <Text
              style={[
                historyStyle.tabText,
                tab === 1 && historyStyle.activeTabText,
              ]}
            >
              Phát âm
            </Text>
          </Pressable>
          <Pressable
            onPress={() => setTab(2)}
            style={[historyStyle.tab, tab !== 1 && historyStyle.activeTab]}
          >
            <Text
              style={[
                historyStyle.tabText,
                tab !== 1 && historyStyle.activeTabText,
              ]}
            >
              Dịch nghĩa
            </Text>
          </Pressable>
        </View>
        <View style={historyStyle.box}>
          <View style={historyStyle.top}>
            <Text style={historyStyle.topLabel1}>Thời gian</Text>
            <Text style={historyStyle.topLabel}>Độ khó</Text>
            <Text style={historyStyle.topLabel}>Điểm</Text>
          </View>
          <View style={historyStyle.content}>
            {Array(14).fill(
              <View style={historyStyle.top}>
                <Text
                  style={[historyStyle.topLabel1, historyStyle.contentLabel]}
                >
                  2023-01-05 20:40
                </Text>
                <Text
                  style={[historyStyle.topLabel, historyStyle.contentLabel]}
                >
                  B1
                </Text>
                <Text
                  style={[historyStyle.topLabel, historyStyle.contentLabel]}
                >
                  8.5
                </Text>
              </View>
            )}
          </View>
        </View>
      </View>
    </View>
  );
}
