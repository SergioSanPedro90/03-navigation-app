import BotonsComponent from "@/components/boton/botons";
import { DrawerActions } from "@react-navigation/native";
import { router, useNavigation } from "expo-router";
import { View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
const HomeScreen = () => {

  const navigation = useNavigation();

  const onToggleDrawer = () => {
    navigation.dispatch( DrawerActions.toggleDrawer )
  }

  return (
    <SafeAreaView>
      <View className="px-10 mt-5">
        <BotonsComponent
          color="primary"
          onPress={() => router.push("/products")}
        >
          Productos
        </BotonsComponent>
        <BotonsComponent
          color="secondary"
          onPress={() => router.push("/profile")}
        >
          Perfil
        </BotonsComponent>
        <BotonsComponent
          color="tertiary"
          onPress={() => router.push("/settings")}
        >
          Ajustes
        </BotonsComponent>
        <BotonsComponent
          color="tertiary"
          onPress={onToggleDrawer}
        >
          ABRIR MENU
        </BotonsComponent>
      </View>
    </SafeAreaView>
  );
};
export default HomeScreen;
