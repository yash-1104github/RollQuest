import styled from "styled-components";

const TotalScore = ({ score }) => {
  return (
    <div>
      <ScoreContainer>
        <h1>{score}</h1>
        <p>Total Score</p>
      </ScoreContainer>
    </div>
  );
};

export default TotalScore;

const ScoreContainer = styled.div`
  max-width: 500px;
  display: flex;
  flex-direction: column;
  align-items: center;  
  justify-content: center;
  margin: 0 auto;
  padding: 16px;
  background-color: #f0f0f0;
  border-radius: 10px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  margin-top: 24px;
  color: #333;
  font-family: "Arial", sans-serif;

  h1 {
    font-size: 100px;
    line-height: 100px;
    font-weight: 700;
    margin: 0;
    color: #2c3e50;
    text-shadow: 1px 1px 2px rgba(0, 0, 0, 0.1);
    letter-spacing: 2px;
    margin-bottom: 8px;

  }
  p {
    font-size: 24px;
    font-weight: 500px;
    color: black;
    margin: 0;
    text-transform: uppercase;
    letter-spacing: 1px;

  }
`;
