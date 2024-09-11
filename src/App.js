import logo from './logo.svg';
import './App.css';
import { ThemeContext, themes } from './Providers/theme';
import Header from './Components/Header/Header';
import { useState } from 'react';
import ApplicationWrapper from './Components/AppliationWrapper/index';

function App() {
  const [selectedtheme,setTheme]=useState(themes.light)

  const handleClick=()=>{
    // if(selectedtheme===themes.light){
    //   setTheme(themes.dark)
    // }
    // else{
    //   // setTheme(themes.light)
    // }
    // selectedtheme===themes.light?setTheme(themes.dark):setTheme(themes.light)
    setTheme(selectedtheme===themes.light?themes.dark:themes.light)
  }
  return (
    <ThemeContext.Provider value={selectedtheme}>
    <div className="App">
       < ApplicationWrapper>
        <Header/>
        <button onClick={handleClick}>Change</button>
        </ApplicationWrapper>
    </div>
    </ThemeContext.Provider>
  );
}

export default App;
