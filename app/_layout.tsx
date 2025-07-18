import { Stack } from "expo-router";
import { StatusBar } from "react-native";


export default function RootLayout() {
  return (
    <>
      <StatusBar barStyle={'light-content'} />
        <Stack
          screenOptions={{
            headerStyle: { backgroundColor: "gray"},
            headerTintColor: "#fff",
            headerShown: false
      
          }}>
            <Stack.Screen name="(tabs)" options={{headerShown: false }} />
            <Stack.Screen name="+not-found" options={{headerTitle: "Erro"}} />
        </Stack>
    </>
  );
}
