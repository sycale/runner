import { Dimensions } from 'react-native';

//swapped width and height because of landscape mode orientation
const windowWidth = Dimensions.get('window').height;
const windowHeight = Dimensions.get('window').width;
const windowDiagonal = Math.sqrt(Math.pow(windowWidth, 2) + Math.pow(windowHeight, 2));

export { windowHeight, windowWidth, windowDiagonal };