import React, { useContext } from 'react';
import { ThemeContext } from './ThemeContext';
import "./index.css"

const Dashboard = () => {
    const { theme, toggleTheme } = useContext(ThemeContext);

    const handleToggle = () => {
        toggleTheme();
    };

    return (
        <div className={`dashboard ${theme}`}>
            <h1>Dashboard</h1>
            <button onClick={handleToggle}>Toggle Theme</button>
        </div>
    );
};

export default Dashboard;
