import styled from "styled-components";
import { Button } from "../styled/Button";
import { Link } from "react-router-dom";
import React from "react";


const StartGame = () => {
  return (
    <Container>
      <div>
        <img src="/images/dices.png" />
      </div>
      <div className="content">
        <h1>Dice Game</h1>
        <Link to="/gameplay">
          <Button>Start Game</Button>
        </Link>
      </div>
    </Container>
  );
};

export default StartGame;

const Container = styled.div`
  max-width: 1180px;
  display: flex;
  margin: 0 auto;
  height: 100vh;
  align-items: center;
  justify-content: center;
  padding: 0 16px;

  .content {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    text-align: center;
    margin-left: 32px;

    h1 {
      font-size: 96px;
      font-weight: 700;
      white-space: nowrap;
      margin-bottom: 24px;
      color: #333;
      letter-spacing: 4px;
      text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.1);

    }
  }

  @media (max-width: 1000px) {
    flex-direction: column;

    .content {
      h1 {
        font-size: 72px;
      }
    }
    img {
      max-width: 70%;
      height: auto;
    }
  }
  @media (max-width: 480px) {
    .content {
      h1 {
        font-size: 36px;
      }
      Button {
        font-size: 20px;
        padding: 8px 16px;

      }
    }

    img {
      max-width: 80%;
      height: auto;
    }
  }
`;
