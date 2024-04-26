import { NavigationContainer } from '@react-navigation/native';
import Routes from './routes';
import { StatusBar } from 'react-native';
import { useCallback } from 'react';
import * as SplashScreen from 'expo-splash-screen';
import * as Font from 'expo-font';

SplashScreen.preventAutoHideAsync();

export default function App() {
  const [fontsLoaded, fontError] = Font.useFonts({
    'Montserrat-Regular': require('./assets/fonts/Montserrat-Regular.ttf'),
    'Montserrat-Bold': require('./assets/fonts/Montserrat-Bold.ttf'),
  });

  const onLayoutRootView = useCallback(async () => {
    if(fontError || fontError)
      await SplashScreen.hideAsync();
  }, [fontsLoaded, fontError]);

  if(!fontsLoaded && !fontError)
    return null;

  return (
    <NavigationContainer onReady={onLayoutRootView}>
      <StatusBar backgroundColor="#8F9F2C" barStyle="light-content" />
      <Routes />
    </NavigationContainer>
  );
};