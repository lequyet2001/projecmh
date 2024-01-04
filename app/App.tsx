/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */
// import 'react-native-gesture-handler';
import React from 'react';
import type {PropsWithChildren} from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';

import {
  Colors,
  DebugInstructions,
  Header,
  LearnMoreLinks,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';
import Home from './src/Screens/Home';
import ScreenDefault from './src/Screens/ScreenDefault';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Login from './src/Screens/Login';
import Register from './src/Screens/SignUp';
import Game from './src/Screens/Game';
import Vocabulary from './src/Screens/ScreenMain/Vocabulary';
import Grammar from './src/Screens/ScreenMain/Grammar';
import Number from './src/Screens/ScreenMain/Number';
import Stories from './src/Screens/ScreenMain/Stories';
import Dictionary from './src/Screens/ScreenMain/Dictionary';
import { DrawerModelEditAvatar } from './src/Component/ModelScreens/ModelInformation';

  
type SectionProps = PropsWithChildren<{
  title: string;
}>;

function Section({children, title}: SectionProps): JSX.Element {
  const isDarkMode = useColorScheme() === 'dark';
  return (
    <View style={styles.sectionContainer}>
      <Text
        style={[
          styles.sectionTitle,
          {
            color: isDarkMode ? Colors.white : Colors.black,
          },
        ]}>
        {title}
      </Text>
      <Text
        style={[
          styles.sectionDescription,
          {
            color: isDarkMode ? Colors.light : Colors.dark,
          },
        ]}>
        {children}
      </Text>
    </View>
  );
}
const Stack = createNativeStackNavigator();
function App(): JSX.Element {
  const isDarkMode = useColorScheme() === 'dark';

  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  };

  return (

    <>
    {/* <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" options={{headerShown:false}} component={Home}/>
        <Stack.Screen name="ScreenDefault" options={{ headerShown: false }} component={ScreenDefault} />
        <Stack.Screen name="Login" options={{ headerShown: false }} component={Login} />
        <Stack.Screen name="Register" options={{headerShown:false}} component={Register}/>
        <Stack.Screen name="Game" options={{headerShown:true}} component={Game}/>
        <Stack.Screen name="Vocabulary" options={{ headerShown: false }} component={Vocabulary} />
        <Stack.Screen name="Dictionary" options={{ headerShown: false }} component={Dictionary} />
        <Stack.Screen name="Stories" options={{ headerShown: false }} component={Stories} />
        <Stack.Screen name="Number" options={{ headerShown: false }} component={Number} />
        <Stack.Screen name="Grammar" options={{ headerShown: false }} component={Grammar} />
      </Stack.Navigator>
   

    </NavigationContainer> */}
    <DrawerModelEditAvatar visible={true} onRequestClose={false} />
    </>

  );
}

const styles = StyleSheet.create({
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
  },
  highlight: {
    fontWeight: '700',
  },
});

export default App;
