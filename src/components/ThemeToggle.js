import React, { useContext } from 'react';
import { ThemeContext } from '../contexts/ThemeContext';


 const ThemeToggle = () => {

    const {lightTheme, toggleTheme} = useContext(ThemeContext);
    
     return ( 
        <div >
        {lightTheme && <button  className='theme-button' onClick={toggleTheme}> Dark Theme</button>}
        {!lightTheme && <button  className='theme-button' onClick={toggleTheme}>Light Theme</button>}
    </div>
      );
 }
  

export default ThemeToggle;