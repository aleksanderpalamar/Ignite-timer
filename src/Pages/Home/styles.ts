import styled from "styled-components";

export const HomeContainer = styled.main`
  flex: 1;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;  

  form {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 3.5rem;
  }
`;


export const BaseCountdownButton = styled.button`  
  width: 100%;
  border: none;
  padding: 1rem;
  border-radius: 8px;
  align-items: center;
  justify-content: center;
  display: flex;
  gap: 0.5rem;
  cursor: pointer;
  font-weight: ${({ theme }) => theme.fontWeights.bold};

  &:disabled {
    opacity: 0.7;
    cursor: not-allowed;
  } 
`;

export const StartCountdownButton = styled(BaseCountdownButton)`
  background: ${({ theme }) => theme.colors.yellow[500]};  
  &:not(:disabled):hover {
    background: ${({ theme }) => theme.colors.yellow[600]};
    transition: all 0.2s ease-in-out;
  }
`;

export const StopCountdownButton = styled(BaseCountdownButton)`
  background: ${({ theme }) => theme.colors.red[500]};
  &:not(:disabled):hover {
    background: ${({ theme }) => theme.colors.red[600]};
  }
`;