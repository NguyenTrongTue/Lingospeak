import React, { useState, useEffect } from "react";
import BASE_URL from "../api/axiosClient";
import axios from "axios";
import { Button, Text, Image, View, Pressable } from "react-native";
import levelStyle from "./levelStyle";
import { useSelector, useDispatch } from "react-redux";
import { getTest, isPass, setScore } from "../redux/testSlice";

export default function Level(props) {
  const [recording, setRecording] = useState(0);

  const [startRecording, setStartRecording] = useState(false);
  const [recorded, setRecorded] = useState(false);

  const { tests, level, type } = useSelector((state) => state.test);
  const [test, setTest] = useState();
  const [testslist, setTestsList] = useState(tests);
  const [currentTest, setCurrentTest] = useState(0);
  const [totalScore, setTotalScore] = useState(0);
  const [text, setText] = useState("");
  const [words, setWords] = useState([]);

  const { currentUser } = useSelector((state) => state.user);
  const dispatch = useDispatch();
  console.log(currentUser);

  const handleRecord = async () => {
    try {
      setStartRecording(true);

      const res = await axios.get(`${BASE_URL}/test/en/${test?.sentenceid}`);
      setStartRecording(false);
      const { score, text, words } = res.data;
      setWords(words);
      setText(text);
      console.log(score);
      setRecording(score.toFixed(2));
      setTotalScore((prev) => prev + score);

      setRecorded(true);
    } catch (e) {
      console.log(e.message);
      setStartRecording(false);
    }
  };

  useEffect(() => {
    if (testslist.length > 0) setTest(testslist[0]);
  }, [testslist]);

  useEffect(() => {
    setCurrentTest(0);
    setTotalScore(0);
    dispatch(setScore(0));
    const fetchTests = async () => {
      try {
        const results = await axios.get(
          `${BASE_URL}/sentences/cefr_tags/?cefr_tags=${level}`
        );
        dispatch(getTest(results.data));
        setTestsList(results.data);
      } catch (e) {
        console.log(e.message);
      }
    };
    fetchTests();
  }, []);

  const handleNextTest = async () => {
    if (currentTest + 1 == testslist.length) {
      setCurrentTest(0);
      setTest(testslist[0]);
      console.log(totalScore);
      dispatch(setScore(totalScore));
      dispatch(isPass({ score: totalScore, level }));
      await axios.post(`${BASE_URL}/save_test/`, {
        userid: currentUser.userid,
        timestamp: new Date(),
        practicedphrases: level,
        score: totalScore,
        wordmissed: type,
      });
      props.navigation.navigate("Result");
    } else {
      setCurrentTest((prev) => prev + 1);
      setTest(testslist[currentTest + 1]);
    }
    setRecorded(false);
  };

  return (
    <View style={levelStyle.container}>
      <View style={levelStyle.center}>
        <View style={levelStyle.box}>
          <Image
            style={levelStyle.image}
            source={require("../../assets/loa.png")}
          />
          <View>
            <View style={levelStyle.testwrapper}>
              <View style={levelStyle.test}>
                <Text style={levelStyle.testText}>
                  {type === "Phát âm" ? test?.english : test?.vietnamese}
                </Text>
              </View>
              <View
                style={{
                  position: "absolute",
                  top: -40,
                  left: "15%",
                  width: 0,
                  height: 0,
                  backgroundColor: "transparent",
                  borderStyle: "solid",
                  borderTopWidth: 50,
                  borderRightWidth: 30,
                  borderBottomWidth: 0,
                  borderLeftWidth: 0,
                  borderTopColor: "#FDECA6",
                  borderRightColor: "transparent",
                  borderBottomColor: "transparent",
                  borderLeftColor: "transparent",
                  transform: [{ rotate: "-90deg" }],
                }}
              />
            </View>
          </View>
        </View>
        <View style={levelStyle.recording}>
          {!recorded && (
            <Pressable
              onPress={() => {
                handleRecord();
              }}
            >
              <Image
                style={levelStyle.microImage}
                source={
                  startRecording
                    ? require("../../assets/ghi-am.png")
                    : require("../../assets/ghi-am-xong.png")
                }
              />
            </Pressable>
          )}
          <View>
            {recorded && (
              <View>
                <View style={levelStyle.resultwrapper}>
                  <View style={levelStyle.result}>
                    <Text style={levelStyle.resultText}>
                      {text.split(" ").map((t, i) => {
                        return words[i] == 0 ? (
                          <Text style={levelStyle.correct} key={i}>
                            {t}{" "}
                          </Text>
                        ) : (
                          <Text style={levelStyle.incorrect} key={i}>
                            {t}{" "}
                          </Text>
                        );
                      })}
                    </Text>
                  </View>

                  <View
                    style={{
                      position: "absolute",
                      top: -10,
                      righ: "15%",
                      width: 0,
                      height: 0,
                      backgroundColor: "transparent",
                      borderStyle: "solid",
                      borderTopWidth: 30,
                      borderRightWidth: 30,
                      borderBottomWidth: 0,
                      borderLeftWidth: 0,
                      borderTopColor: "#FEBCE6",
                      borderRightColor: "transparent",
                      borderBottomColor: "transparent",
                      borderLeftColor: "transparent",
                      transform: [{ rotate: "45deg" }],
                    }}
                  />
                </View>
                <Text style={levelStyle.resultScore}>
                  Điểm số của bạn là {recording}
                </Text>
              </View>
            )}
          </View>
          <Button
            title={recorded ? "Câu hỏi tiếp theo" : "Bấm vào micro để ghi âm"}
            onPress={handleNextTest}
          />
        </View>
      </View>
    </View>
  );
}
