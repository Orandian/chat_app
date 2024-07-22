import { View, Text, ScrollView } from "react-native";
import React from "react";
import MessageItem from "./MessageItem";

interface MessageListProps {
  messages: any;
  currentUser: any;
  scrollViewRef: any;
}

export default function MessageList({
  messages,
  currentUser,
  scrollViewRef,
}: MessageListProps) {
  return (
    <ScrollView
      ref={scrollViewRef}
      showsVerticalScrollIndicator={false}
      contentContainerStyle={{ paddingTop: 10 }}
    >
      {messages.map((message: any, index: number) => {
        return (
          <MessageItem
            message={message}
            key={index}
            currentUser={currentUser}
          />
        );
      })}
    </ScrollView>
  );
}
