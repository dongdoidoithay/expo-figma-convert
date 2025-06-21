import { useColorScheme } from '@/hooks/useColorScheme';
import { DarkTheme, DefaultTheme, ThemeProvider } from '@react-navigation/native';
import { useFonts } from 'expo-font';
import { Stack } from 'expo-router';
import { StatusBar, Platform } from 'expo-status-bar';
import 'react-native-reanimated';
import { FontProvider, useFont } from '../contexts/FontContext';
import "../global.css";

export default function RootLayout() {
  const colorScheme = useColorScheme();
  const [fontsLoaded] = useFonts({
    'Quicksand-Regular': require('../assets/fonts/Quicksand-Regular.ttf'),
    'NunitoSans-Italic': require('../assets/fonts/NunitoSans-Italic.ttf'),
    'NunitoSans-Variable': require('../assets/fonts/NunitoSans-VariableFont.ttf'),
    'Quicksand-Medium': require('../assets/fonts/Quicksand-Medium.ttf'),
    'Quicksand-SemiBold': require('../assets/fonts/Quicksand-SemiBold.ttf'),
    'Quicksand-Bold': require('../assets/fonts/Quicksand-Bold.ttf'),
  });

  const { font } = useFont();

  if (!fontsLoaded) {
    return null;
  }

  return (
    <FontProvider>
      <ThemeProvider value={colorScheme === 'dark' ? DarkTheme : DefaultTheme}>
        <Stack>
          <Stack.Screen name="index" options={{ headerShown: false}} />
         
          <Stack.Screen name="+not-found" />
          </Stack>
        <StatusBar style={colorScheme === 'dark' ? 'light' : 'dark'} />
      </ThemeProvider>
    </FontProvider>
  );
}
