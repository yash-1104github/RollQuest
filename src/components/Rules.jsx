import styled from "styled-components";

const Rules = () => {
  return (
    <RulesContainer>
      <h2>How to play dice game</h2>
      <div className="text">
        <p>1. Select any number</p>
        <p>2. Click on dice image</p>
        <p>
          3. After click on dice if selected number is equal to dice number you
          will get same point as dice{" "}
        </p>
        <p>4. If You get wrong guess then 1 point will be dedcuted </p>
      </div>
    </RulesContainer>
  );
};

export default Rules;

const RulesContainer = styled.div`
  max-width: 800px;
  margin: 0 auto;
  background-color: #fbf1f1;
  padding: 20px;
  margin-top: 20px;
  border-radius: 10px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  color: #333;
  font-family: "Arial", sans-serif;
  text-align: left;
  gap: 16px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 20px;
  @media (max-width: 1000px) {
    padding: 24px;
  }
  @media (max-width: 768px) {
    padding: 20px;
  }
  @media (max-width: 480px) {
    padding: 16px;
  }
  @media (max-width: 1000px) {
    padding: 24px;
  }
  @media (max-width: 768px) {
    padding: 16px;
  }
  @media (max-width: 480px) {
    padding: 12px;
  }
  @media (max-width: 768px) {
    padding: 16px;
  }
  @media (max-width: 480px) {
    padding: 12px;
  }
  
  h2 {
    font-size: 24px;
    font-weight: 700;
    margin-bottom: 16px;
    color: #2c3e50;
    text-shadow: 1px 1px 2px rgba(0, 0, 0, 0.1);
    letter-spacing: 1px;

  }
  .text {
    margin-top: 16px;
    p {
      font-size: 18px;
      margin: 8px 0;
      color: #555;
      line-height: 1.5;

    }

  }
`;
