import Booklist from "./components/Booklist";
import Navbar from "./components/Navbar";
import ThemeToggle from "./components/ThemeToggle";
import AuthContextProvider from "./contexts/Authcontext";
import BookContextProvider from "./contexts/Bookcontext";
import ThemeContextProvider from "./contexts/ThemeContext";


function App() {
  return (
    <div className="App">
      <ThemeContextProvider>
        <AuthContextProvider>
          <Navbar/>
          <BookContextProvider>
           <Booklist/>
          </BookContextProvider>
          <ThemeToggle/>
        </AuthContextProvider>
      </ThemeContextProvider>
     
    </div>
  );
}

export default App;
