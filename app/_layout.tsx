import { Colors } from "@/constants/Colors";
import { Stack } from "expo-router";
import { StatusBar } from "react-native";


export default function RootLayout() {
  return (
    <>
      <StatusBar backgroundColor={Colors.primary} barStyle={'light-content'} />
        <Stack>
            <Stack.Screen name="(tabs)" options={{headerShown: false }} />
            <Stack.Screen name="+not-found" options={{headerTitle: "Erro"}} />
        </Stack>
    </>
  );
}
