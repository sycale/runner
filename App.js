import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { Button } from 'react-native-paper';
import { StyleSheet, Text, View } from 'react-native';
import * as ScreenOrientation from 'expo-screen-orientation';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import AsyncStorage from '@react-native-async-storage/async-storage';

import MainMenu from './screens/MainMenu';
import LevelSelect from './screens/LevelSelect';
import PlayingScreen from './screens/PlayingScreen';
import GameOver from './screens/GameOver';
import LevelComplete from './screens/LevelComplete';
import Stats from './screens/Stats';
import Settings from './screens/Settings';

import ThemeProvider from './contexts/ThemeProvider';
import ThemeWrapper from './contexts/ThemeWrapper';


//import initData from './functions/initData';

const Stack = createNativeStackNavigator();

export default function App() {
  //locking display orientation in landscape mode
  ScreenOrientation.lockAsync(ScreenOrientation.OrientationLock.LANDSCAPE);

  //initializing the themeMode to the default blue theme colors 
  AsyncStorage.setItem('themeMode', 'blue');

  const initData = async (key) => {
    try{
      const oldData = await AsyncStorage.getItem(key);
      if (oldData) {
        AsyncStorage.setItem(key, '0');
      }
    } catch (err) {
        console.log(err);
    }
  };

  initData('gameNum');
  initData('deathNum');
  initData('winNum');

  return (
    <ThemeProvider>
      <ThemeWrapper>
        <NavigationContainer>
          <StatusBar hidden />
          <Stack.Navigator screenOptions={{ headerShown: false }} >
            <Stack.Screen name="MainMenu" component={MainMenu} />
            <Stack.Screen name="LevelSelect" component={LevelSelect} />
            <Stack.Screen name="PlayingScreen" component={PlayingScreen} />
            <Stack.Screen name="GameOver" component={GameOver} />
            <Stack.Screen name="LevelComplete" component={LevelComplete} />
            <Stack.Screen name="Stats" component={Stats} />
            <Stack.Screen name="Settings" component={Settings} />
          </Stack.Navigator>
        </NavigationContainer>
      </ThemeWrapper>
    </ThemeProvider>
  );
}


/*
  //if the user has never played a game, initialize all game data to 0
  if (AsyncStorage.getItem('gameNum') === null) {
    AsyncStorage.setItem('gameNum', 0);
  }
  if (AsyncStorage.getItem('deathNum') === null) {
    AsyncStorage.setItem('deathNum', 0);
  }
  if (AsyncStorage.getItem('winNum') === null) {
    AsyncStorage.setItem('winNum', 0);
  }
*/