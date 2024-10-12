import { DarkTheme, DefaultTheme, ThemeProvider } from '@react-navigation/native';
import { useFonts } from 'expo-font';
import { Stack } from 'expo-router';
import * as SplashScreen from 'expo-splash-screen';
import { useEffect } from 'react';
import 'react-native-reanimated';
import { useColorScheme } from '@/hooks/useColorScheme';


SplashScreen.preventAutoHideAsync();

export default function RootLayout() {
  const colorScheme = useColorScheme();
  const [loaded] = useFonts({
    SpaceMono: require('../assets/fonts/SpaceMono-Regular.ttf'),
  });

  useEffect(() => {
    if (loaded) {
      SplashScreen.hideAsync();
    }
  }, [loaded]);

  if (!loaded) {
    return null;
  }

  return (
    <ThemeProvider value={colorScheme === 'dark' ? DarkTheme : DefaultTheme}>
      <Stack>
      <Stack.Screen name="index" options={{ title: 'Start' , headerShown:false}}  />
      <Stack.Screen name="Level" options={{ title: 'Level', headerShown:false}} />
      <Stack.Screen name="Start" options={{ title: 'Start', headerShown:false}} />
      <Stack.Screen name="NextCenter" options={{ title: 'NextCenter', headerShown:false}} />
      <Stack.Screen name="Congration" options={{ title: 'Congration', headerShown:false}} />
      <Stack.Screen name="Settings" options={{ title: 'Settings', headerShown:false}} />
      <Stack.Screen name="About" options={{ title: 'About', headerShown:false}} />
      </Stack>
    </ThemeProvider>
  );
}
