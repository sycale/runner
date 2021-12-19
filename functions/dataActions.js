import AsyncStorage from '@react-native-async-storage/async-storage';

// A file to store all functions related to the Stats feature (for organization sake)

const initData = async (key) => {
    try{
        const oldData = await AsyncStorage.getItem(key);
        if (oldData) {
            AsyncStorage.setItem(key, '0');
        }
    } catch (err) {
        console.log(err);
    }
}

initData('gameNum');
initData('deathNum');
initData('winNum');

const updateData = async (key) => {
    try{
        oldValue = await AsyncStorage.getItem(key);
        newValue = parseInt(oldValue) + 1;
        await AsyncStorage.setItem(key, newValue.toString());
    } catch (err) {
        console.log(err);
    }
}

const [gameNum, setGameNum] = useState('');
const [deathNum, setDeathNum] = useState('');
const [winNum, setWinNum] = useState('');

const getData = async () => {
    try{
        const games = await AsyncStorage.getItem('gameNum');
        if (games) {
            console.log("Games: " + games);
            setGameNum(games);
        }
        const deaths = await AsyncStorage.getItem('deathNum');
        if (deaths) {
            console.log("Deaths: " + deaths);
            setDeathNum(deaths);
        }
        const wins = await AsyncStorage.getItem('winNum');
        if (wins) {
            console.log("Wins: " + wins);
            setWinNum(wins);
        }
    } catch (err) {
        console.log(err);
    }
};

getData();

//  AsyncStorage.setItem('deathNum', (parseInt(AsyncStorage.getItem('deathNum')) + 1).toString());
//  AsyncStorage.setItem('gameNum', (parseInt(AsyncStorage.getItem('gameNum')) + 1).toString());
//  AsyncStorage.setItem('winNum', (parseInt(AsyncStorage.getItem('winNum')) + 1).toString());


