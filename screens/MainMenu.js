import React from 'react';
import { Button } from 'react-native-paper';
import { StyleSheet, Text, View } from 'react-native';
import { useTheme } from '../contexts/ThemeProvider'; 

import { windowHeight, windowWidth, windowDiagonal } from '../contexts/Dimensions.js';


function MainMenu({ navigation }) {
  const { theme } = useTheme();

  return(
      <View style={[styles.container, { backgroundColor: theme.background.backgroundColor }]}>

          <Text style={[styles.title, { color: theme.title.titleColor}]}>~ RUNNER ~</Text>

          <View style={styles.mainButtonContainer}>
              <Button 
                  mode="contained"
                  style={[styles.mainButtons, { borderColor: theme.mainButton.outlineColor, backgroundColor: theme.mainButton.innerColor, color: theme.mainButton.textColor }]}
                  onPress={() => navigation.navigate('LevelSelect')}>
                  <Text style={styles.mainButtons}>PLAY</Text>
              </Button>
          </View>

          <View style={styles.lesserButtonContainer}>
              <Button 
                  mode="contained"
                  style={[styles.lesserButtons, { borderColor: theme.lesserButton.outlineColor, backgroundColor: theme.lesserButton.innerColor}]}
                  onPress={() => navigation.navigate('Settings')}>
                  <Text style={[styles.lesserButtonsText, { color: theme.lesserButton.textColor }]}>settings</Text>
              </Button>
              <Button 
                  mode="contained"
                  style={[styles.lesserButtons, { borderColor: theme.lesserButton.outlineColor, backgroundColor: theme.lesserButton.innerColor}]}
                  onPress={() => navigation.navigate('Stats')}>
                  <Text style={[styles.lesserButtonsText, { color: theme.lesserButton.textColor }]}>stats</Text>
              </Button>
          </View>

      </View>
  )
}

export default MainMenu;

const styles = StyleSheet.create({
    container: {
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center',
    },
    title: {
      fontSize: windowDiagonal * 0.08,
      fontWeight: 'bold',
      paddingBottom: windowHeight * 0.08
    },
    mainButtonContainer: {
      paddingTop: windowHeight * 0.01,
      paddingBottom: windowHeight * 0.02
    },
    mainButtons: {
      borderWidth: windowDiagonal * 0.008622,
      fontSize: windowDiagonal * 0.03,
      fontWeight: 'bold',
      width: windowWidth * 0.3
    },
    lesserButtonContainer: {
      flexDirection: 'row',
    },
    lesserButtonsText: {
      fontSize: windowDiagonal * 0.015,
      fontWeight: 'bold',
    },
    lesserButtons: {
      borderWidth: windowDiagonal * 0.006467,
      width: windowWidth * 0.2,
      margin: windowWidth * 0.02
    }
  });