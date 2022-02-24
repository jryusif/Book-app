import React, {useContext} from 'react';
import { Authcontext } from '../contexts/Authcontext';
import { ThemeContext } from '../contexts/ThemeContext';
import { BookContext } from '../contexts/Bookcontext';


 

const Navbar = () => {
    const {books} = useContext(BookContext);
    const {lightTheme, light, dark} = useContext(ThemeContext);
    const {authenticated, toggleAuth} = useContext(Authcontext);
    const theme = lightTheme ? light : dark;
    return (  
                <nav className="navbar"style={{background: theme.ui, color: theme.color}}>
                        <h1>Your Books</h1>
                        <div onClick={toggleAuth}>{authenticated? "logged in":"logged out"}</div>
                        <p>Currently you have {books.length} to get through</p>
                        <ul>
                        <li>Home</li>
                        <li>About</li>
                        <li>Contact</li>
                        </ul>
                       
                    </nav>
    );
}
 

export default Navbar;
