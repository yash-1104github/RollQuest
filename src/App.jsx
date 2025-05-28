import { useState } from "react";
import StartGame from "./components/StartGame";
import GamePlay from "./components/GamePlay";
import { Route, Routes } from "react-router-dom"; 


function App() {
  const [isGameStarted, setIsGameStarted] = useState(false);
  const toggleGamePlay = () => {
    setIsGameStarted((prev) => !prev);
  };

  return (
    <> 
      <div>
        <Routes>
          <Route path='/' element={<StartGame/>}/>
          <Route path='/gameplay' element={<GamePlay/>} />
        </Routes>
      </div>
    </>
  );
}

export default App;
