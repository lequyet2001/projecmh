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
import { Provider,useSelector } from 'react-redux';
import { legacy_createStore } from 'redux';
import rootReducer from './src/redux/rootReducer';
import GameLevel from './src/Screens/GameLevel';

const Stack = createNativeStackNavigator();
const store=legacy_createStore(rootReducer);

function App(): JSX.Element {

  return (

    <>
    <Provider store={store}>
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="ScreenDefault" options={{ headerShown: false }} component={ScreenDefault} />
        <Stack.Screen name="Home" options={{headerShown:false}} component={Home}/>
        <Stack.Screen name="GameLevel" options={{headerShown:false}} component={GameLevel}/>
        <Stack.Screen name="Login" options={{ headerShown: false }} component={Login} />
        <Stack.Screen name="Register" options={{headerShown:false}} component={Register}/>
        <Stack.Screen name="Game" options={{headerShown:false}} component={Game}/>
        <Stack.Screen name="Vocabulary" options={{ headerShown: false }} component={Vocabulary} />
        <Stack.Screen name="Dictionary" options={{ headerShown: false }} component={Dictionary} />
        <Stack.Screen name="Stories" options={{ headerShown: false }} component={Stories} />
        <Stack.Screen name="Number" options={{ headerShown: false }} component={Number} />
        <Stack.Screen name="Grammar" options={{ headerShown: false }} component={Grammar} />
      </Stack.Navigator>
   

    </NavigationContainer> 
    {/* <DrawerModelEditAvatar visible={true} onRequestClose={false} /> */}
    </Provider>
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
