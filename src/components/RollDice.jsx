import styled from "styled-components";

const RoleDice = ({ roleDice, currentDice }) => {
  return (
    <DiceContainer>
      <div className="dice" onClick={roleDice}>
        <img
          src={`/images/dice_${currentDice}.png`}
          alt={`dice${currentDice}`}
        />
      </div>
    </DiceContainer>
  );
};

export default RoleDice;

const DiceContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 90px;
  margin-bottom: 48px;
  .dice {
    width: 200px;
    height: 200px;
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;
    transition: transform 0.2s ease-in-out;

    img {
      max-width: 100%;
      height: auto;
      border-radius: 10px;
      box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
    }

    &:hover {
      transform: scale(1.05);
    }
  }
  img {
    max-width: 100%;
    height: auto;
    border-radius: 10px;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  }
  img:hover {
    transform: scale(1.05);
  }
  img:active {
    transform: scale(0.95);
  }
  

  .dice {
    cursor: pointer;
  }
  p {
    font-size: 24px;
    font-weight: 700;
    margin-top: 16px;
    color: #333;
    text-align: center;
    font-family:  "Arial", sans-serif;
    text-transform: uppercase;
    margin-bottom: 0;
    text-shadow: 1px 1px 2px rgba(0, 0, 0, 0.1);
    letter-spacing: 1px;
    
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
