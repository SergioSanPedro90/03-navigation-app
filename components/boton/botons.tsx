import { View, Text, Pressable, PressableProps } from 'react-native'

interface Props extends PressableProps {
    children: string,
    color?: 'primary' | 'secondary' | 'tertiary'
}

const BotonsComponent = ( { children, color= 'primary', onPress }: Props ) => {
 
  const btnColor = {
    primary: 'bg-primary',
    secondary: 'bg-secondary',
    tertiary: 'bg-tertiary'
  }[color]
 
 
  return (
    <Pressable
    className={`mb-3 p-3 rounded-md ${btnColor} active:opacity-90`}
    onPress={ onPress }
    >
      <Text className='text-white text-center'>{children}</Text>
    </Pressable>
  )
}
export default BotonsComponent