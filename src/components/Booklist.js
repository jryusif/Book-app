import React, {  useContext } from 'react';
import { Authcontext } from '../contexts/Authcontext';
import { ThemeContext } from '../contexts/ThemeContext';





const BookList = () => {
    const  {lightTheme, light, dark} = useContext(ThemeContext);
        const theme = lightTheme ? light:dark;
    return ( 
        <div style={{background:theme.bg, color:theme.color }} className='book-list'> 
        <ul>
            <li style={{background:theme.ui}}>Atomic Habits</li>
            <li style={{background:theme.ui}}>The way of the wind</li>
            <li style={{background:theme.ui}}> The final empire</li>
        </ul>
    </div>  
     );
}
 
export default BookList;

