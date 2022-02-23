import React from 'react';
import { createContext, Component } from 'react';

export const ThemeContext = createContext();

class ThemeContextProvider extends Component {
    state = {  
        lightTheme: true, 
        light:{ color:"#555", ui:"#ddd", bg: "#eee" },
        dark:{ color:"#ddd", ui:"#333", bg: "#555" }
        
    } 
    toggleTheme = ( ) => {
        this.setState({ lightTheme: !this.state.lightTheme})
    }
    render() { 
        return (
            <ThemeContext.Provider value={{...this.state, toggleTheme: this.toggleTheme}}>
                    {this.props.children}
            </ThemeContext.Provider>
        );
    }
}
 
export default ThemeContextProvider;