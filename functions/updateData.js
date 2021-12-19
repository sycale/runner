import AsyncStorage from '@react-native-async-storage/async-storage';

//This file and the arrow function it exports is used in the GameOver, LevelComplete, and PlayingScreen screens/files

//increases the data (number of games, deaths, or wins) by one
export default updateData = async (key) => {
    try{
        oldValue = await AsyncStorage.getItem(key);
        newValue = parseInt(oldValue) + 1;
        await AsyncStorage.setItem(key, newValue.toString());
    } catch (err) {
        console.log(err);
    }
}