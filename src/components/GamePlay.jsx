import styled from "styled-components";
import NumberSelector from "./NumberSelector";
import TotalScore from "./TotalScore";
import RoleDice from "./RollDice";
import { useState } from "react";
import { Button, OutlineButton } from "../styled/Button";
import Rules from "./Rules";

const GamePlay = () => {
  const [score, setScore] = useState(0);
  const [selectedNumber, setSelectedNumber] = useState();
  const [currentDice, setCurrentDice] = useState(1);
  //Generate random number b/w 1 - 6
  const generateRandomNumber = (min, max) => {
    // console.log(Math.floor(Math.random() * (max - min) + min) );
    return Math.floor(Math.random() * (max - min) + min);
  };

  const [error, setError] = useState("");
  const [showRules, setShowRules] = useState(false);

  //Function for rolling dice show error & generate number
  const roleDice = () => {
    if (!selectedNumber) {
      setError("You have not selected any number");
      return;
    }
    //Function to return Random number b/w 1&6
    const randomNumber = generateRandomNumber(1, 7);
    setCurrentDice((prev) => randomNumber);

    //Function to update score
    if (selectedNumber === randomNumber) {
      setScore((prev) => prev + randomNumber);
    } else {
      setScore((prev) => prev - 1);
    }
    setSelectedNumber(undefined);
  };

  const resetScore = () => {
    setScore(0);
  };

  return (
    <MainContainer>
      <div className="top_section">
        <TotalScore score={score} />
        <NumberSelector
          error={error}
          setError={setError}
          selectedNumber={selectedNumber}
          setSelectedNumber={setSelectedNumber}
        />
      </div>
     
      <RoleDice currentDice={currentDice} roleDice={roleDice} />
      <div>
       <h1 className="tip">Roll the dice and score points!</h1>
      </div>
      <div className="btns">
        <OutlineButton onClick={resetScore}>Reset</OutlineButton>
        <Button onClick={() => setShowRules((prev) => !prev)}>
          {showRules ? "Hide" : "Show"}Rules
        </Button>
      </div>
      {showRules && <Rules />}
    </MainContainer>
  );
};

export default GamePlay;

const MainContainer = styled.main`
  padding-top: 20px;
  margin-top: 20px;
  height: 100vh;
  max-width: 1180px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  padding: 0 12px;
  backgound-color: rgb(40, 8, 8);

.tip {
    font-size: 24px;
    font-weight: 700;
    color: #333;
    margin-bottom: 20px;
    text-align: center;
    margin-top: 50px;
  },


  .top_section {
    display: flex;
    align-items: end;
    gap: 580px;
    margin-bottom: 20px;
    backgound-color:rgb(132, 9, 9);

  }
  .btns {
    margin-top: 40px;
    gap: 10px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 10px;
  }
`;
