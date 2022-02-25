import BookList from "./components/BookList"
import Navbar from "./components/Navbar";
import ThemeToggle from "./components/ThemeToggle";
import AuthContextProvider from "./contexts/Authcontext";
import BookContextProvider from "./contexts/Bookcontext";
import ThemeContextProvider from "./contexts/ThemeContext";
import NewBookForm from "./components/BookForm"

function App() {
  return (
    <div className="App">
      <ThemeContextProvider>
        <AuthContextProvider>
         
          <BookContextProvider>
            <Navbar/> 
            <BookList/>
            <NewBookForm/>
          </BookContextProvider>
          <ThemeToggle/>
        </AuthContextProvider>
      </ThemeContextProvider>
     
    </div>
  );
}

export default App;
