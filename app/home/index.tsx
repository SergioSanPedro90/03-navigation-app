import { Link } from 'expo-router'
import { View, Text } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
const HomeScreen = () => {
  return (
    <SafeAreaView>
    <View className='px-10'>
      <Text className='mb-10'>HomeScreen</Text>

      <Link className='mb-5' href={'/products'}>Productos</Link>
      <Link className='mb-5' href={'/profile'}>Perfil</Link>
      <Link className='mb-5' href={'/settings'}>Ajustes</Link>
    </View>
    
    </SafeAreaView>
  )
}
export default HomeScreen