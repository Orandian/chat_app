import React, { useState } from "react";
import {
  Alert,
  Image,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
  Pressable
} from "react-native";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";
import { StatusBar } from "expo-status-bar";
import { Octicons, Feather } from "@expo/vector-icons";
import { useRouter } from "expo-router";
import Loading from "@/components/Loading";
import CustomKeyboardView from "@/components/CustomKeyboardView";
import { RegisterProps, useAuth } from "@/context/authContext";

const SignUp = () => {
  const router = useRouter();
  const { register } = useAuth() as { register: ({ email, password, username, profileUrl }: RegisterProps) => Promise<any> };
  const [loading, setLoading] = useState(false);

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [username, setUsername] = useState("");
  const [profileUrl, setProfileUrl] = useState("");

  const handleRegister = async () => {
    if (!email || !password || !username || !profileUrl) {
      Alert.alert("Sign Up", "Please fill all the fields");
      return;
    }
    setLoading(true);
    let response = await register({
      email,
      password,
      username,
      profileUrl,
    });
    setLoading(false);
    if (!response.success) {
      Alert.alert("Sign Up", response.msg);
    } 
  };

  return (
    <CustomKeyboardView>
      <StatusBar style="dark" />
      <View
        style={{ paddingTop: hp(8), paddingHorizontal: wp(5) }}
        className="flex-1 gap-12"
      >
        <View className="items-center">
          <Image
            style={{ height: hp(25) }}
            resizeMode="contain"
            source={require("@/assets/images/register.png")}
          />
        </View>

        <View className="gap-10">
          <Text
            style={{ fontSize: hp(4) }}
            className="font-bold tracking-wider text-center text-neutral-800"
          >
            Sign Up
          </Text>
          <View className="gap-4">
            <View
              style={{ height: hp(7) }}
              className="flex-row gap-4 px-4 bg-neutral-100 items-center rounded-xl"
            >
              <Feather name="user" size={hp(2.7)} color="gray" />
              <TextInput
                onChangeText={setUsername}
                style={{ fontSize: hp(2) }}
                className="flex-1 font-semibold text-neutral-700"
                placeholder="User Name"
                placeholderTextColor="gray"
              />
            </View>
            <View
              style={{ height: hp(7) }}
              className="flex-row gap-4 px-4 bg-neutral-100 items-center rounded-xl"
            >
              <Octicons name="mail" size={hp(2.7)} color="gray" />
              <TextInput
                onChangeText={setEmail}
                style={{ fontSize: hp(2) }}
                className="flex-1 font-semibold text-neutral-700"
                placeholder="Email Address"
                placeholderTextColor="gray"
              />
            </View>

            <View
              style={{ height: hp(7) }}
              className="flex-row gap-4 px-4 bg-neutral-100 items-center rounded-xl"
            >
              <Octicons name="lock" size={hp(2.7)} color="gray" />
              <TextInput
                onChangeText={setPassword}
                style={{ fontSize: hp(2) }}
                className="flex-1 font-semibold text-neutral-700"
                placeholder="Password"
                secureTextEntry
                placeholderTextColor="gray"
              />
            </View>

            <View
              style={{ height: hp(7) }}
              className="flex-row gap-4 px-4 bg-neutral-100 items-center rounded-xl"
            >
              <Feather name="image" size={hp(2.7)} color="gray" />
              <TextInput
                onChangeText={setProfileUrl}
                style={{ fontSize: hp(2) }}
                className="flex-1 font-semibold text-neutral-700"
                placeholder="Profile URL"
                placeholderTextColor="gray"
              />
            </View>

            <View>
              {loading ? (
                <View className="flex-row justify-center">
                  <Loading size={hp(6.5)} />
                </View>
              ) : (
                <TouchableOpacity
                  onPress={handleRegister}
                  style={{ height: hp(6.5) }}
                  className="bg-indigo-500 rounded-xl justify-center items-center"
                >
                  <Text
                    style={{ fontSize: hp(2.7) }}
                    className="text-white font-bold tracking-wider"
                  >
                    Sign Up
                  </Text>
                </TouchableOpacity>
              )}
            </View>

            <View className="flex-row justify-center">
              <Text
                style={{ fontSize: hp(1.8) }}
                className="font-semibold text-neutral-500"
              >
                Already have an account?{" "}
              </Text>
              <Pressable onPress={() => router.push("SignIn")}>
                <Text
                  style={{ fontSize: hp(1.8) }}
                  className="font-bold text-indigo-500"
                >
                  Sign In
                </Text>
              </Pressable>
            </View>
          </View>
        </View>
      </View>
    </CustomKeyboardView>
  );
};

export default SignUp;
