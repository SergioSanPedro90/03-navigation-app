import CustomDrawer from '@/components/CustomDrawer';
import { Ionicons } from '@expo/vector-icons';
import { Drawer } from 'expo-router/drawer';
const DrawerLayout = () => {
  return (
    <Drawer 
    drawerContent={CustomDrawer}
    screenOptions={{
        overlayColor: 'rgba(0,0,0,0.4)',
        // headerShown: false,
        headerShadowVisible: false,
        drawerActiveTintColor: 'indigo',
        sceneStyle: {
            backgroundColor: 'white'
        }
    }}>
      <Drawer.Screen
        name="user/index" // This is the name of the page and must match the url from root
        options={{
          drawerLabel: 'Usuario',
          title: 'Usuario',
          drawerIcon: ({ size, color }) => <Ionicons size={size} color={color} name='person-circle-outline'/>
        }}
      />
      <Drawer.Screen
        name="(tabs)" // This is the name of the page and must match the url from root
        options={{
          headerShown: false,
          drawerLabel: 'tabs + stack',
          title: 'Tabs + stack',
          drawerIcon: ({ size, color }) => <Ionicons size={size} color={color} name='albums-outline'/>
        }}
      />
      <Drawer.Screen
        name="schedule/index" // This is the name of the page and must match the url from root
        options={{
          drawerLabel: 'Horario',
          title: 'Horario',
          drawerIcon: ({ size, color }) => <Ionicons size={size} color={color} name='calendar-outline'/>
        }}
      />
    </Drawer>
  );
}
export default DrawerLayout