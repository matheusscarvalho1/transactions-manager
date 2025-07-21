import { colors } from "@/constants/Colors";
import GlobalState from "@/contexts/GlobalState";
import { Stack } from "expo-router";
import { StatusBar } from "react-native";


export default function RootLayout() {
  return (
    <GlobalState>
      <StatusBar backgroundColor={colors.primary} barStyle={'light-content'} />
        <Stack>
            <Stack.Screen name="(tabs)" options={{headerShown: false }} />
            <Stack.Screen name="+not-found" options={{headerTitle: "Erro"}} />
        </Stack>
    </GlobalState>
  );
}
