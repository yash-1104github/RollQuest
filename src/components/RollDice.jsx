import styled from "styled-components"

const RoleDice = ({roleDice,currentDice}) => {

  return (
    <DiceContainer>
      <div className="dice" onClick = {roleDice}>
        <img src = {`/images/dice_${currentDice}.png`} alt = {`dice${currentDice}`}/>
      </div>
      <p>Click on Dice to roll</p>
    </DiceContainer>
)};

export default RoleDice

const DiceContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 48px;

  .dice {
    cursor: pointer;
  }
  p {
    font-size: 24px;
  }
  @media (max-width: 480px) {
    .dice {
      img {
        max-width: 80%;
        height: auto;
    }
  }
}
`;