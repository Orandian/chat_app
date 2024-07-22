import { View, ActivityIndicator } from 'react-native'
import React, { useEffect, useState } from 'react'
import { useAuth } from '@/context/authContext'
import { StatusBar } from 'expo-status-bar';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";
import ChatList from '@/components/ChatList';
import { getDocs, query, where } from 'firebase/firestore';
import { userRef } from '@/firebaseConfig';

const home = () => {
  const { user } = useAuth() as { user: any };
  const [users, setUsers] = useState<any[]>([]);
  
  useEffect(() => {
    if(user?.uid){
      getUsers();
    }
  }, [])

  const getUsers = async () => {
    const q = query(userRef, where("userId", "!=", user?.uid ));

    const querySnapshot = await getDocs(q);
    let data : any[] = [];
    querySnapshot.forEach(doc => {
      data.push({...doc.data()});
    })

    setUsers(data);
  }
  return (
    <View className="flex-1 bg-white">
      <StatusBar style="light" />
      {
        users.length > 0 ? (
          <ChatList currentUser={user} users={users} />
        ) : (
          <View className="flex items-center" style={{ top: hp(30) }}>
            <ActivityIndicator size="large" />
          </View>
        )
      }
    </View>
  )
}

export default home