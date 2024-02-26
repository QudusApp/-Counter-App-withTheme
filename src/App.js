import React, {useContext} from "react";
import { ThemeContext, ThemeProvider } from  './Context/themeContext';
import './App.css';
import ConterApp from "./CounterApp";


function AppThemes(){
    const {theme, changeTheme} = useContext(ThemeContext);
    
   
   

    return(
        <div className={`App ${theme}`}>
            <h1>{theme.charAt(0).toUpperCase() + theme.slice(1)} Mode</h1>
            <button onClick={changeTheme}>themeToggle</button>
            
        </div>
    );
}




function App(){

    return(
        <ThemeProvider>
            <AppThemes/>
            <ConterApp/>
        </ThemeProvider>
    );

}

export default App;