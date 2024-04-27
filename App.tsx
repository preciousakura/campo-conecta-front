import { NavigationContainer } from '@react-navigation/native';
import Routes from './routes';
import { StatusBar } from 'react-native';
import { useCallback } from 'react';
import * as SplashScreen from 'expo-splash-screen';
import * as Font from 'expo-font';

SplashScreen.preventAutoHideAsync();

export default function App() {
  const [fontsLoaded] = Font.useFonts({
    'MontserratRegular': require('./assets/fonts/Montserrat-Regular.ttf'),
    'MontserratSemiBold': require('./assets/fonts/Montserrat-SemiBold.ttf'),
    'MontserratBold': require('./assets/fonts/Montserrat-Bold.ttf'),
    'MontserratExtraBold': require('./assets/fonts/Montserrat-ExtraBold.ttf'),
  });

  const onLayoutRootView = useCallback(async () => {
    if(fontsLoaded)
      await SplashScreen.hideAsync();
  }, [fontsLoaded]);

  if(!fontsLoaded)
    return null;

  return (
    <NavigationContainer onReady={onLayoutRootView}>
      <StatusBar backgroundColor="#819601" barStyle="light-content" />
      <Routes />
    </NavigationContainer>
  );
};