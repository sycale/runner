import React from 'react';
import { Button } from 'react-native-paper';
import { StyleSheet, Text, View } from 'react-native';
import { useTheme } from '../contexts/ThemeProvider';

import { windowHeight, windowWidth, windowDiagonal } from '../contexts/Dimensions.js';

function Settings({ navigation }) {
    const { theme, updateTheme} = useTheme();
    const changeTheme = () => updateTheme(theme.themeMode);

    return (
        <View style={[styles.container, { backgroundColor: theme.background.backgroundColor}]}>
            <Text style={[styles.title, { color: theme.title.titleColor }]}>SETTINGS</Text>

            <View style={[styles.settingsContainer, { borderColor: theme.mainButton.outlineColor, backgroundColor: theme.mainButton.innerColor }]}>
                <View style={styles.settingItem}>
                    <Text style={[styles.settingHeading, { color: theme.mainButton.textColor }]}>Press to change theme</Text>
                    <Button style={[styles.settingButtons, { borderColor: theme.mainButton.outlineColor, backgroundColor: theme.mainButton.innerColor }]} mode="contained" onPress={changeTheme}> 
                        {theme.themeMode === "blue" && <Text>Green Theme</Text>}
                        {theme.themeMode === "green" && <Text>Red Theme</Text>}
                        {theme.themeMode === "red" && <Text>Blue Theme</Text>}
                    </Button>
                </View>
            </View>

            <Button style={[styles.lesserButtons, { borderColor: theme.lesserButton.outlineColor, backgroundColor: theme.lesserButton.innerColor }]} mode="contained" onPress={() => navigation.goBack()}> 
                <Text style={[styles.lesserButtonsText, { color: theme.lesserButton.textColor }]}>Back</Text> 
            </Button>
        </View>
    )
}

export default Settings;

const styles = StyleSheet.create({
    container: {
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center',
    },
    title: {
        fontSize: windowDiagonal * 0.07,
        fontWeight: 'bold',
        paddingBottom: windowHeight * 0.02
    },
    settingsContainer: {
        borderWidth: windowDiagonal * 0.008622, //8px
        borderRadius: windowDiagonal * 0.01078, //10px
        width: windowWidth * 0.58,
        height: windowHeight * 0.42,
        paddingHorizontal: windowWidth * 0.05, 
        paddingVertical: windowHeight * 0.03,
    },
    settingItem: {
        alignItems: 'center', 
        justifyContent: 'space-between', 
        flexDirection: 'row'
    },
    settingHeading: {
        fontSize: windowDiagonal * 0.01724, //16px
        fontWeight: 'bold',
        color: '#FFF', 
    },
    settingButtons: {
        borderWidth: windowDiagonal * 0.008622,
        fontSize: windowDiagonal * 0.03,
        fontWeight: 'bold',
        width: windowWidth * 0.2,
        margin: windowWidth * 0.01,
    },
    lesserButtonsText: {
        fontSize: windowDiagonal * 0.015,
        fontWeight: 'bold',
        color: '#306BAC',
    },
    lesserButtons: {
        borderWidth: windowDiagonal * 0.006467, //6px
        borderColor: '#306BAC',
        backgroundColor: '#141B41',
        width: windowWidth * 0.2,
        margin: windowWidth * 0.03
    }
});

/*
px on Samsung Galaxy A71 and equivalent resizing factor
(on Samsung Galaxy A71: windowHeight = 411.43, windowWidth = 831.62, windowDiagonal = 927.83)

5 = windowHeight * 0.01215
6 = windowDiagonal * 0.006467
8 = windowDiagonal * 0.008622
10 = windowDiagonal * 0.01078
16 = windowDiagonal * 0.01724
18 = windowDiagonal * 0.01940

*/