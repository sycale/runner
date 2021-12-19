//Importing modules
import { defaultBlueTheme, greenTheme, redTheme } from './theme';
import React from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { createContext, useContext, useState, useEffect } from 'react';

const ThemeContext = createContext();

const ThemeProvider = ({ children }) => {
    const [theme, setTheme] = useState(defaultBlueTheme);
    const [isLoading, setIsLoading] = useState(true);

    
    //retreive and display latest theme from AsyncStorage when user re-enters app / starts the app 
    const loadTheme = async () => {
        const themeMode = await AsyncStorage.getItem('themeMode');
        if (themeMode) {
            themeMode === 'blue' ? setTheme(defaultBlueTheme) : ( themeMode === 'green' ? setTheme(greenTheme) : setTheme(redTheme) );
        }
        setIsLoading(false);
    }

    useEffect(() => {
        loadTheme();
    }, []);

    //updates the theme when user presses corresponding button on Settings screen
    const updateTheme = (currentMode) => {
        const newTheme = currentMode === 'blue' ? greenTheme : (currentMode === 'green' ? redTheme : defaultBlueTheme);
        setTheme(newTheme);
        AsyncStorage.setItem('themeMode', newTheme.themeMode);
    }

    return (
        <ThemeContext.Provider value={{ theme, isLoading, updateTheme}}>
            {children}
        </ThemeContext.Provider>
    )
}

export const useTheme = () => useContext(ThemeContext);

export default ThemeProvider;


//const newTheme = newThemeMode === 'blue' ? defaultBlueTheme : ( newThemeMode === 'green' ? greenTheme : redTheme);
        
        /*
        let newTheme = defaultBlueTheme;
        if (newThemeMode === "green") {
            newTheme = greenTheme;
        }
        else if (newThemeMode === "red") {
            newTheme = redTheme;
        }
        */