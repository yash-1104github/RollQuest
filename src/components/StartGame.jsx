import styled from 'styled-components';
import { Button } from '../styled/Button';

const StartGame = ( {toggle}) => {
  return (
    <Container>
       <div>
        <img src = "/images/dices.png"/>
       </div>
      <div className="content">
        <h1>Dice Game</h1>
        <Button onClick ={toggle}>Play Now</Button>
      </div>
    </Container>
)};

export default StartGame

const Container = styled.div`
  max-width: 1180px;
  display: flex;
  margin: 0 auto;
  height: 100vh;
  align-items: center;
  justify-content: center;
  padding: 0 16px;

  .content {
    h1 {
      font-size: 96px;
      white-space: nowrap;
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
      max-width: 80%;
      height: auto;
    }
  }
  @media (max-width: 480px) {
    .content {
      h1 {
        font-size: 36px;
      }
      Button {
        font-size: 16px;
        padding: 8px 16px;
      }
    }

    img {
      max-width: 80%;
      height: auto;
    }
  }
`;



