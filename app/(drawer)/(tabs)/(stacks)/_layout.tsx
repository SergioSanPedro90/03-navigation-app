import { Ionicons } from "@expo/vector-icons";
import { DrawerActions } from "@react-navigation/native";
import { Stack, useNavigation, useRouter } from "expo-router";



const StackLayout = () => {
  const navigation = useNavigation();
  const router = useRouter()

  const handleMenu = (canGoBack?: boolean) => {

    if(canGoBack) {
      router.back()
      return;
    }
    navigation.dispatch( DrawerActions.toggleDrawer() )

  }

  return (
    <Stack
      screenOptions={{
        headerShadowVisible: false,
        headerShown: true,
        headerLeft: ({ tintColor, canGoBack }) => (
          <Ionicons
            onPress={() => handleMenu(canGoBack)}
            className="mr-5"
            name={canGoBack ? "arrow-back-outline" : "grid-outline"}
            size={20}
          />
        ),
        contentStyle: {
          backgroundColor: "white",
        },
      }}
    >
      <Stack.Screen
        name="home/index"
        options={{
          title: "Inicio",
        }}
      />

      <Stack.Screen
        name="products/index"
        options={{
          title: "Productos",
        }}
      />

      <Stack.Screen
        name="profile/index"
        options={{
          title: "Perfil",
        }}
      />

      <Stack.Screen
        name="settings/index"
        options={{
          title: "Ajustes",
        }}
      />

      <Stack.Screen
        name="products/[id]"
        options={{
          title: "Detalles del Producto",
        }}
      />
    </Stack>
  );
};
export default StackLayout;
