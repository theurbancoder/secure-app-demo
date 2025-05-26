import { Stack } from "expo-router";

export default function RootLayout() {
  return (
    <Stack>
      <Stack.Screen
        name="index"
        options={{
          // Hide the header for this route
          headerShown: false,
        }}
      />
    </Stack>
  );
}
