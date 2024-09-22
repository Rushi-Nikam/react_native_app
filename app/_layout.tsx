import { Stack } from "expo-router";
export default function RootLayout() {
  return (
    <Stack >
      <Stack.Screen name="(tab)" options={{headerShown:false}}/>
      <Stack.Screen name="index" options={{title:"home"}} />
      <Stack.Screen name="about" options={{title:"About"}} />
    </Stack>
  );
}
