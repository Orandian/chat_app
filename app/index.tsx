import { ActivityIndicator, View } from 'react-native'

const StartPage = () => {
  return (
    <View className="flex-1 justify-center">
      <ActivityIndicator size="large" color="gray" />
    </View>
  )
}

export default StartPage