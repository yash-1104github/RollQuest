import styled from "styled-components"

const NumberSelector = ({ setError, error, selectedNumber, setSelectedNumber}) => {
    const arrNumber = [1 , 2, 3, 4, 5 ,6];
   //  console.log(selectedNumber);
  
   const NumberSelectorHandler = (value) =>{
        setSelectedNumber(value)
        setError("")
   };
  
 return (
    <NumberSelectorContainer>
    <p className="error">{error} </p>
      <div className="flex">
        {arrNumber.map((value, i) => (
           <Box 
           isSelected = {value === selectedNumber}
           key = {i} 
           onClick={() => NumberSelectorHandler(value)}>
           {value}
           </Box>
        ))} 
       </div>
       <p>Select Number</p>
    </NumberSelectorContainer>
 )};

export default NumberSelector

const NumberSelectorContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: end;

  .flex {
    display: flex;
    gap: 24px;
  }

  p {
    font-size: 24px;
    font-weight: 700px;
  }
  .error {
    color: red;
  }
  @media (max-width: 768px) {
    align-items: center; 

    p {
      font-size: 20px; 
    }

    .flex {
      gap: 16px; 
      flex-wrap: wrap; 
    }
  }

  @media (max-width: 480px) {
    p {
      font-size: 18px; 
    }

    .flex {
      gap: 12px; /* Further reduce gap between boxes */
      justify-content: center; /* Center the boxes on small screens */
    }
  }
`;

const Box = styled.div`
  height: 72px;
  width: 72px;
  border: 1px solid black;
  display: grid;
  place-items: center;
  font-size: 24px;
  font-weight: 700;
  background-color: ${(props) => (props.isSelected ? "black" : "white")};
  color: ${(props) => (!props.isSelected ? "black" : "white")};

  @media (max-width: 768px) {
    height: 60px; 
    width: 60px;
    font-size: 20px; 
  }

  @media (max-width: 480px) {
    height: 48px;
    width: 48px;
    font-size: 16px; 
  }
`;
