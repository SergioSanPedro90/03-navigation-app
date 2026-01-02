import BotonsComponent from "@/components/boton/botons";
import { Link, router } from "expo-router";
import { View, Text } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
const HomeScreen = () => {
  return (
    <SafeAreaView>
      <View className="px-10 mt-5">
        <BotonsComponent
          color="primary"
          onPress={() => router.push("/tabs/(stacks)/products")}
        >
          Productos
        </BotonsComponent>
        <BotonsComponent
          color="secondary"
          onPress={() => router.push("/tabs/(stacks)/profile")}
        >
          Perfil
        </BotonsComponent>
        <BotonsComponent
          color="tertiary"
          onPress={() => router.push("/tabs/(stacks)/settings")}
        >
          Ajustes
        </BotonsComponent>
      </View>
    </SafeAreaView>
  );
};
export default HomeScreen;
