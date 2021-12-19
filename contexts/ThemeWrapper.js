import React from 'react';
import { useTheme } from './ThemeProvider';

const ThemeWrapper = ({ children }) => {
    const { isLoading } = useTheme();
    if (isLoading) return null;
    return children;
};

export default ThemeWrapper;
