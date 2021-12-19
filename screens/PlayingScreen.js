import React from 'react';
import { useRef } from 'react';
import { Button } from 'react-native-paper';
import { StyleSheet, Text, View } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import updateData from '../functions/updateData';
import { useTheme } from '../contexts/ThemeProvider'; 
import { GameEngine } from 'react-native-game-engine';
import Matter from 'matter-js';

import { windowHeight, windowWidth, windowDiagonal } from '../contexts/Dimensions.js';

//the runner, character controlled entity
import Runner from '../game-components/Runner';

//floor the runner will be running on
import Floor from '../game-components/Floor';

//The 2 types of obstacles
import Spike from '../game-components/Spike';
import Block from '../game-components/Block';

import Physics from '../game-components/Physics';


function PlayingScreen({ navigation }) {
    const { theme } = useTheme();

    const gEngine = useRef(null);

    let mEngine = Matter.Engine.create({ enableSleeping: false });
    let world = mEngine.world;

    //drawing the runner (Note to self, I like these values, they are final values)
    let xPos = -150; 
    let yPos = 130; 
    let sizeWidth = 50;
    let sizeHeight = 50;
    const runner = Matter.Bodies.rectangle(xPos, yPos, sizeWidth, sizeHeight);
    Matter.World.add(mEngine.world, runner);

    const floor = Matter.Bodies.rectangle(-870, 50, 900, 110);
    Matter.World.add(mEngine.world, floor);

    mEngine.gravity.y = 0.4;

    //style={[styles.container, { backgroundColor: theme.background.backgroundColor}]}>

    return(
        <View style={styles.container}>
            <GameEngine
                //ref={gEngine}
                styles={{
                    position: 'absolute',
                    width: windowWidth,
                    height: windowHeight,
                    backgroundColor: '#306BAC',
                }}
                systems={[Physics]} 
                entities={{
                    physics: {
                        engine: mEngine,
                        world: world
                    },
                    runner: {
                        body: runner,
                        color: '#141B41',
                        position: [xPos, yPos],
                        size: [sizeWidth, sizeHeight],
                        renderer: <Runner />,
                    },
                    floor: {
                        body: floor,
                        color: '#141B41',
                        position: [-870, 50],
                        size: [900, 110],
                        renderer: <Floor />,
                    },
                    spikes: {

                    },
                    blocks: {

                    }
                }}
                />
        </View>
    )
}

export default PlayingScreen;

const styles = StyleSheet.create({
    container: {
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center',
    }
});

/*
<View style={[styles.container, { backgroundColor: theme.background.backgroundColor}]}>
            <Text style={{ color: '#FFF' }}>This is the PlayingScreen Screen</Text>
            <Button mode="contained" onPress={() => navigation.navigate('GameOver')}> <Text>Go to GameOver screen</Text> </Button>
            <Button style={{margin: 10}} mode="contained" onPress={() => navigation.navigate('LevelComplete')}> <Text>Go to LevelComplete screen</Text> </Button>
        </View>

        */