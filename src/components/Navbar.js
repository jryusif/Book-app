import React, {useContext} from 'react';
import { ThemeContext } from '../contexts/ThemeContext';
import { BookContext } from '../contexts/Bookcontext';
import { Link } from 'react-router-dom';


 

const Navbar = () => {
    const {books} = useContext(BookContext);
    const {lightTheme, light, dark} = useContext(ThemeContext);

    const theme = lightTheme ? light : dark;
    return ( 
                <nav className="navbar"style={{background: theme.ui, color: theme.color}}>
                        <h1>Your Books</h1>

                        <p> Currently you have {books.length} to get through</p>
                        <ul>
                        <Link to="/" >Home</Link>
                        <Link to="/about" >About</Link>
                        <Link to="/contact">Contact</Link>         
                       </ul>
                       
                    </nav>
    );
}
 

export default Navbar;
