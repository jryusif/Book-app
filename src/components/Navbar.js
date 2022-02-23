import React, {useContext} from 'react';
import { Authcontext } from '../contexts/Authcontext';
import { ThemeContext } from '../contexts/ThemeContext';


 

const Navbar = () => {
    const {lightTheme, light, dark} = useContext(ThemeContext);
    const {authenticated, toggleAuth} = useContext(Authcontext);
    const theme = lightTheme ? light : dark;
    return (  
                <nav style={{background: theme.ui, color: theme.color}}>
                        <h1>Context app</h1>
                        <div onClick={toggleAuth}>{authenticated? "logged in":"logged out"}</div>
                        <ul>
                        <li>Home</li>
                        <li>About</li>
                        <li>Contact</li>
                        </ul>
                       
                    </nav>
    );
}
 

export default Navbar;
