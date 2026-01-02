import { Redirect} from "expo-router";

const App = () => {

  return <Redirect href={"/tabs" as any}/>

  // return (
  //   <SafeAreaView>
  //     <View className="p-4">
        

  //       <Text className="text-2xl font-work-black text-primary">Hola Mundo</Text>
  //       <Text className="text-2xl font-bold font-work-light text-secondary-200">Hola Mundo</Text>
  //       <Text className="text-2xl font-work-medium text-tertiary">Hola Mundo</Text>

  //       <Link href={'/products' as any}>
  //         <Text>Productos</Text>
  //       </Link>
  //     </View>
  //   </SafeAreaView>
  // );
};
export default App;
