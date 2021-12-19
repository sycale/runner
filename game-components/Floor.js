import React from 'react';
import { View } from 'react-native';

export default function Floor({ color, position, size, }) {
    return (
        <View 
            style={{
                backgroundColor: color,
                position: 'absolute',
                left: position[0]  + (size[0]/2), //position[0] is x position, size[0] is width, calculation done so that reference point for position is in center of body
                bottom: position[1] - (size[1]/2), //position[1] is y position, size[1] is height, calculation done so that reference point for position is in center of body
                width: size[0],
                height: size[1],
            }}>

        </View>
    )
}