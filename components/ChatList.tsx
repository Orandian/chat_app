import { View, Text, FlatList } from "react-native";
import React from "react";
import ChatItem from "./ChatItem";
import { useRouter } from "expo-router";

export default function ChatList({ currentUser, users }: { currentUser: any, users: Array<any> }) {
  const router = useRouter();
  return (
    <View className="flex-1">
      <FlatList
        data={users}
        contentContainerStyle={{ flex: 1, paddingVertical: 25 }}
        keyExtractor={(item) => Math.random().toString()}
        showsVerticalScrollIndicator={false}
        renderItem={({ item, index }) => (
          <ChatItem
            noBorder={index + 1 === users.length}
            item={item}
            router={router}
            currentUser={currentUser}
          />
        )}
      />
    </View>
  );
}
