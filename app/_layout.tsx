import { useFonts } from "expo-font";
import { Stack } from "expo-router";

export default function RootLayout() {
	// useFonts({
	// 	// "outfits-regular": require("../assets/fonts/outfit-regular.ttf"),
	// });
	return (
		<Stack
			screenOptions={{
				headerShown: false,
			}}
		>
			<Stack.Screen
				name="(tabs)"
				options={{
					headerShown: false,
				}}
			/>
		</Stack>
	);
}
