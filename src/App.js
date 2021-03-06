import React, {useState} from "react";
import Counter from "./Counter";
import CounterHooks from "./CounterHooks";

export const ThemeContext = React.createContext()


function App() {
  console.log("App render");
  const [theme, setTheme] = useState('red')
  return (
    <ThemeContext.Provider value={{ backgroundColor : theme }}>
    Counter:
    <Counter initialCount={0} />
    CounterHooks:
    <CounterHooks initialCount={0}/>
    <br></br>
    <button onClick={() => setTheme(prevTheme => prevTheme === 'red' ? 'blue' : 'red' )}>Change Theme</button>
    </ThemeContext.Provider>
  )
}

export default App;