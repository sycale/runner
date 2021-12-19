import React from 'react';
import { useState } from 'react';
import { Button } from 'react-native-paper';
import { StyleSheet, Text, View } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useTheme } from '../contexts/ThemeProvider';

import { windowHeight, windowWidth, windowDiagonal } from '../contexts/Dimensions.js';

function Stats({ navigation }) {
    const { theme } = useTheme();

    const [gameNum, setGameNum] = useState('');
    const [deathNum, setDeathNum] = useState('');
    const [winNum, setWinNum] = useState('');

    const getData = async () => {
        try{
            const games = await AsyncStorage.getItem('gameNum');
            if (games) {
                setGameNum(games);
            }
            const deaths = await AsyncStorage.getItem('deathNum');
            if (deaths) {
                setDeathNum(deaths);
            }
            const wins = await AsyncStorage.getItem('winNum');
            if (wins) {
                setWinNum(wins);
            }
        } catch (err) {
            console.log(err);
        }
    };

    getData();

    return (
        <View style={[styles.container, { backgroundColor: theme.background.backgroundColor}]}>

            <Text style={[styles.title, { color: theme.title.titleColor }]}>STATS</Text>

            <View style={[styles.dataContainer, { borderColor: theme.mainButton.outlineColor, backgroundColor: theme.mainButton.innerColor }]}>
                <View style={styles.dataPoint}>
                    <Text style={[styles.dataHeading, { color: theme.mainButton.textColor }]}>Total number of games played</Text>
                    <Text style={[styles.dataNumber, { color: theme.mainButton.textColor }]}>{gameNum}</Text>
                </View>
                <View style={styles.dataPoint}>
                    <Text style={[styles.dataHeading, { color: theme.mainButton.textColor }]}>Total number of deaths</Text>
                    <Text style={[styles.dataNumber, { color: theme.mainButton.textColor }]}>{deathNum}</Text>
                </View>
                <View style={styles.dataPoint}>
                    <Text style={[styles.dataHeading, { color: theme.mainButton.textColor }]}>Total number of wins</Text>
                    <Text style={[styles.dataNumber, { color: theme.mainButton.textColor }]}>{winNum}</Text>
                </View>
            </View>

            <Button style={ [styles.lesserButtons, { borderColor: theme.lesserButton.outlineColor, backgroundColor: theme.lesserButton.innerColor }] } mode="contained" onPress={() => navigation.goBack()}>
                <Text style={[styles.lesserButtonsText, { color: theme.lesserButton.textColor }]}>Back</Text>
            </Button>

        </View>
    )
}

export default Stats;

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
    dataContainer: {
        borderWidth: windowDiagonal * 0.008622, //8px
        borderRadius: windowDiagonal * 0.01078, //10px
        width: windowWidth * 0.58,
        height: windowHeight * 0.42,
        paddingHorizontal: windowWidth * 0.05,
        paddingVertical: windowHeight * 0.06,
    },
    dataPoint: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingVertical: windowHeight * 0.01215, //5px
    },
    dataHeading: {
        fontSize: windowDiagonal * 0.01724, //16px
        fontWeight: 'bold',
        paddingRight: windowWidth * 0.145
    },
    dataNumber: {
        fontSize: windowDiagonal * 0.01940, //18px
        fontWeight: 'bold',
    },
    lesserButtonsText: {
        fontSize: windowDiagonal * 0.015,
        fontWeight: 'bold',
    },
    lesserButtons: {
        borderWidth: windowDiagonal * 0.006467, //6px
        width: windowWidth * 0.2,
        margin: windowWidth * 0.03
    }
});
