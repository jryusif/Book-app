import React, { Component } from 'react';
import { ThemeContext } from '../contexts/ThemeContext';

class ThemeToggle extends Component {
    static contextType = ThemeContext;
    render() { 
        const {lightTheme, toggleTheme} = this.context;

        return (
            <div>
                {lightTheme && <button onClick={toggleTheme}> Dark Theme</button>}
                {!lightTheme && <button onClick={toggleTheme}>Light Theme</button>}
            </div>
            
        );
    }
}
 
export default ThemeToggle;