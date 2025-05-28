import styled from "styled-components";

const NumberSelector = ({
  setError,
  error,
  selectedNumber,
  setSelectedNumber,
}) => {
  const arrNumber = [1, 2, 3, 4, 5, 6];
  const NumberSelectorHandler = (value) => {
    setSelectedNumber(value);
    setError("");
  };

  return (
    <NumberSelectorContainer>
      <p className="error">{error} </p>
      <div className="flex">
        {arrNumber.map((value, i) => (
          <Box
            isSelected={value === selectedNumber}
            key={i}
            onClick={() => NumberSelectorHandler(value)}
          >
            {value}
          </Box>
        ))}
      </div>
      <p>Select Number</p>
    </NumberSelectorContainer>
  );
};

export default NumberSelector;

const NumberSelectorContainer = styled.div`
 
  display: flex;
  flex-direction: column;
  align-items: end;
  justify-content: between;
  max-width: 800px;
  margin: 0 auto;
  padding: 24px;
  background-color: #f0f0f0;
  border-radius: 10px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  color: #333;
  font-family: "Arial", sans-serif;

  .flex {
    display: flex;
    gap: 24px;
  }

  p {
    font-size: 24px;
    font-weight: 700px;
    color: black;
    margin-top: 16px;
    text-align: center;
    font-family: "Arial", sans-serif;
    letter-spacing: 1px; /* Add some spacing between letters */
    margin-bottom: 0; /* Ensure no extra space at the bottom */
    margin-top: 16px; /* Space between boxes and text */

  }
  .error {
    color: red;
    margin-bottom: 16px;
    font-size: 20px;
    font-weight: 500;
    text-align: center;
    width: 100%;
    margin-top: 0; /* Ensure no extra space at the top */
    margin-bottom: 16px; /* Space between error message and boxes */
    text-transform: uppercase; /* Make error message uppercase */
    letter-spacing: 1px; /* Add some spacing between letters */
    font-family: "Arial", sans-serif; /* Use a consistent font */
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
  cursor: pointer;
  transition: background-color 0.3s ease, color 0.3s ease;
  border-radius: 8px;
  font-family: "Arial", sans-serif;
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
