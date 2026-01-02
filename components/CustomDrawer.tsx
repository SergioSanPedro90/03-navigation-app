import {
  DrawerContentComponentProps,
  DrawerContentScrollView,
  DrawerItemList,
} from "@react-navigation/drawer";
import { View, Text } from "react-native";

const CustomDrawer = (props: DrawerContentComponentProps) => {
  return (
    <DrawerContentScrollView {...props}>
      <View className="flex-1 justify-center items-center mb-10 mx-3 rounded-xl bg-primary h-[150px]">
        <View className="flex justify-center items-center bg-white rounded-full h-24 w-24">
          <Text className="text-primary text-3xl font-work-black">FH</Text>
        </View>
      </View>

      {/* DrawerItems */}

      <DrawerItemList {...props} />
    </DrawerContentScrollView>
  );
};
export default CustomDrawer;
