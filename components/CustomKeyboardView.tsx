import {
  View,
  Text,
  KeyboardAvoidingView,
  Platform,
  ScrollView,
} from "react-native";
import React from "react";

const ios = Platform.OS == "ios";

const CustomKeyboardView = ({ children, inChat }: { children: React.ReactNode, inChat?: boolean }) => {
    let kavConfig = {};
    let scrollViewConfig = {};

    if(inChat){
        kavConfig = {
            keyboardVerticalOffect: 90
        }
        scrollViewConfig = {
            contentContainerStyle: {
                flex: 1
            }
        }
    }
  return (
    <KeyboardAvoidingView
      behavior={ios ? "padding" : "height"}
      style={{ flex: 1 }}
      {...kavConfig}
    >
      <ScrollView
        style={{ flex: 1 }}
        bounces={false}
        showsVerticalScrollIndicator={false}
        {...scrollViewConfig}
      >
        {children}
      </ScrollView>
    </KeyboardAvoidingView>
  );
};

export default CustomKeyboardView;
