import BookList from "./components/BookList"
import Navbar from "./components/Navbar";
import ThemeToggle from "./components/ThemeToggle";

import BookContextProvider from "./contexts/Bookcontext";
import ThemeContextProvider from "./contexts/ThemeContext";
import NewBookForm from "./components/BookForm"
import React from 'react';
import {BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "./pages/Home";


function App() {
  return (
    <div className="App">
      <Router>
        <ThemeContextProvider>
        <ThemeToggle/>
        <BookContextProvider>
            <Navbar/>

         <Switch>
            <Route exact path = "/">
            
              <Home/>
            

            </Route>
            
        

            </Switch>
            </BookContextProvider>
            
        </ThemeContextProvider>
      </Router>
      
     
    </div>
  );
}

export default App;
