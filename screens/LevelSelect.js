import React from 'react';
import { Button } from 'react-native-paper';
import { StyleSheet, Text, View, ScrollView } from 'react-native';
import { useTheme } from '../contexts/ThemeProvider'; 

import { windowHeight, windowWidth, windowDiagonal } from '../contexts/Dimensions.js';

function LevelSelect({ navigation }) {
    const { theme } = useTheme();

    //Will add ScrollView when/if I make >4 levels
    return(
            <View style={[styles.container, { backgroundColor: theme.background.backgroundColor}]}>

                <Text style={[styles.title, { color: theme.title.titleColor }]}>LEVEL SELECT</Text>
                
                <View style={styles.levelButtonContainer}>
                    <Button
                        mode="contained"
                        style={[styles.levelButton, { borderColor: theme.levelButton.outlineColor, backgroundColor: theme.levelButton.innerColor }]}
                        onPress={() => navigation.navigate('PlayingScreen') }>
                        <Text style={[styles.levelText, { color: theme.levelButton.textColor }]}>1</Text>
                    </Button>
                    <Button
                        mode="contained"
                        style={[styles.levelButtonDisabled, { borderColor: theme.levelButtonDisabled.outlineColor, backgroundColor: theme.levelButtonDisabled.innerColor }]}>
                        <Text style={[styles.levelText, { color: theme.levelButton.textColor }]}></Text>
                    </Button>
                    <Button
                        mode="contained"
                        style={[styles.levelButtonDisabled, { borderColor: theme.levelButtonDisabled.outlineColor, backgroundColor: theme.levelButtonDisabled.innerColor }]}>
                        <Text style={[styles.levelText, { color: theme.levelButton.textColor }]}></Text>
                    </Button>
                </View>

            </View>
    )
}

export default LevelSelect;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#141B41',
        alignItems: 'center',
    },
    title: {
        fontSize: windowDiagonal * 0.08,
        fontWeight: 'bold',
        color: '#6F9CEB',
        paddingTop: windowHeight * 0.08,
        paddingBottom: windowHeight * 0.08
    },
    levelButtonContainer: {
        flexDirection: 'row',
        flexWrap: "wrap"
    },
    levelText: {
        fontSize: windowDiagonal * 0.08,
        borderWidth: windowDiagonal * 0.006467, 
    },
    levelButton: {
        borderWidth: windowDiagonal * 0.006467,
        width: windowWidth * 0.2,
        margin: windowWidth * 0.02
    },
    levelButtonDisabled: {
        borderWidth: windowDiagonal * 0.006467,
        width: windowWidth * 0.2,
        margin: windowWidth * 0.02
    }
});