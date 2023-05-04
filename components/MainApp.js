import { StatusBar } from "expo-status-bar";
import { Pressable, StyleSheet, Text, View } from "react-native";
import {
  getFocusedRouteNameFromRoute,
  NavigationContainer,
} from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { HeaderTitle } from "@react-navigation/stack";
import Login from "./auth/Login";
import Register from "./auth/Register";
import Home from "./home/home";
import Test from "./test/test";
import History from "./history/history";

import {
  Select,
  Box,
  CheckIcon,
  Center,
  NativeBaseProvider,
} from "native-base";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";
import IconBack from "react-native-vector-icons/MaterialIcons";

import Level from "./levels/level";
import Result from "./result/result";
import Speak from "./Voice";
import { useSelector } from "react-redux";
import Profile from "./profile/profile";
import Practice from "./practice/Practice";
import prePractice from "./prePractice/prePractice";
import EditProfile from "./editProfile/EditProfile";

const Stack = createStackNavigator();
export default function MainApp() {
  const { currentUser } = useSelector((state) => state.user);

  return (
    <NativeBaseProvider>
      <NavigationContainer>
        <Stack.Navigator
          initialRouteName="Home"
          screenOptions={{
            headerMode: "screen",
            headerTintColor: "white",
            headerStyle: { backgroundColor: "#800080" },

            headerTitle: () => (
              <View
                style={{
                  flexDirection: "row",
                  width: "100%",

                  alignItems: "center",
                }}
              >
                <Icon
                  name="home"
                  color="white"
                  size={24}
                  onPress={() => console.log("Menu icon pressed")}
                />
                <Text
                  style={{
                    marginLeft: "50%",
                    color: "white",
                    fontSize: 20,
                    fontWeight: 600,
                    transform: [{ translateX: -40 }],
                  }}
                >
                  Trang chủ
                </Text>
              </View>
            ),
          }}
        >
          <Stack.Screen
            name="Register"
            component={Register}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="Login"
            component={Login}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="Level"
            component={Level}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="Home"
            component={currentUser ? Home : Login}
            options={{ headerShown: currentUser ? true : false }}
          />
          <Stack.Screen
            name="Result"
            component={Result}
            options={{
              headerTitle: "Kiểm tra",
              headerStyle: {
                height: 90,
                backgroundColor: "#800080",
              },
              headerTitleAlign: "center",
              headerTitleStyle: {
                fontSize: 24,
                fontWeight: "700",
              },
              headerBackImage: () => (
                <Icon name="home" size={24} color="white" />
              ),
            }}
          />
          <Stack.Screen
            name="Test"
            component={Test}
            options={{
              headerTitle: "Kiểm tra",
              headerStyle: {
                height: 90,
                backgroundColor: "#800080",
              },
              headerTitleAlign: "center",
              headerTitleStyle: {
                fontSize: 24,
                fontWeight: "700",
              },
              headerBackImage: () => (
                <Icon name="home" size={24} color="white" />
              ),
            }}
          />
          <Stack.Screen
            name="History"
            component={History}
            options={({ navigation }) => ({
              headerTitle: "Lịch sử thi",
              headerStyle: {
                height: 90,
                backgroundColor: "#800080",
              },
              headerTitleAlign: "center",
              headerTitleStyle: {
                fontSize: 24,
                fontWeight: "700",
              },
              headerBackImage: () => (
                <Pressable onPress={() => navigation.navigate("Home")}>
                  <Icon name="home" size={24} color="white" />
                </Pressable>
              ),
            })}
          />
          <Stack.Screen
            name="PrePractice"
            component={prePractice}
            options={({ navigation }) => ({
              headerTitle: "Luyện câu",
              headerStyle: {
                height: 90,
                backgroundColor: "#800080",
              },
              headerTitleAlign: "center",
              headerTitleStyle: {
                fontSize: 24,
                fontWeight: "700",
              },
              headerBackImage: () => (
                <Pressable onPress={() => navigation.navigate("Practice")}>
                  <IconBack name="arrow-back" size={24} color="white" />
                </Pressable>
              ),
            })}
          />
          <Stack.Screen
            name="EditProfile"
            component={EditProfile}
            options={({ navigation }) => ({
              headerTitle: "Chỉnh sửa hồ sơ",
              headerStyle: {
                height: 90,
                backgroundColor: "#800080",
              },
              headerTitleAlign: "center",
              headerTitleStyle: {
                fontSize: 24,
                fontWeight: "700",
              },
              headerBackImage: () => (
                <Pressable onPress={() => navigation.navigate("Profile")}>
                  <IconBack name="arrow-back" size={24} color="white" />
                </Pressable>
              ),
            })}
          />
          <Stack.Screen
            name="Practice"
            component={Practice}
            options={{
              headerTitle: "Luyện tập",
              headerStyle: {
                height: 90,
                backgroundColor: "#800080",
              },
              headerTitleAlign: "center",
              headerTitleStyle: {
                fontSize: 24,
                fontWeight: "700",
              },
              headerBackImage: () => (
                <Icon name="home" size={24} color="white" />
              ),
            }}
          />
          <Stack.Screen
            name="Profile"
            component={Profile}
            options={{
              headerTitle: "Hồ sơ",
              headerStyle: {
                height: 90,
                backgroundColor: "#800080",
              },
              headerTitleAlign: "center",
              headerTitleStyle: {
                fontSize: 24,
                fontWeight: "700",
              },
              headerBackImage: () => (
                <Icon name="home" size={24} color="white" />
              ),
            }}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </NativeBaseProvider>
  );
}
