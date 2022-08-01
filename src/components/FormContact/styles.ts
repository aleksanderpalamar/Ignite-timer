import styled from "styled-components";

export const FormContactContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  justify-content: center;
  margin-top: 0.5rem;

  @media (max-width: ${({ theme }) => theme.breakpoints.sm}) {
    flex-direction: column;
    align-items: flex-start;
    margin-top: 0.5rem;
  }

  form {
    display: block;
    align-items: center;
    gap: 1rem;    

    input {
      font-size: ${({ theme }) => theme.fontSizes.md};
      color: ${({ theme }) => theme.colors.gray[300]};
      background-color: ${({ theme }) => theme.colors.gray[900]};
      border: none;
      border-radius: 4px;
      padding: 1rem;
      margin: 0.5rem 0;
      width: 100%;
      gap: 1rem;

      :focus {
        outline: 2px solid ${({ theme }) => theme.colors.yellow[500]};
      }
    }
    textarea {
      font-size: ${({ theme }) => theme.fontSizes.md};
      font-family: ${({ theme }) => theme.fonts.body};
      color: ${({ theme }) => theme.colors.gray[300]};
      background-color: ${({ theme }) => theme.colors.gray[900]};
      border: none;
      border-radius: 4px;
      padding: 1rem;
      margin: 0.5rem 0;
      width: 100%;
      gap: 1rem;
      height: 200px;
      resize: none;

      :focus {
        outline: 2px solid ${({ theme }) => theme.colors.yellow[500]};
      }
    }

    button {
      font-size: ${({ theme }) => theme.fontSizes.md};
      color: ${({ theme }) => theme.colors.gray[900]};
      padding: 1rem;
      border: none;
      border-radius: 4px;
      background-color: ${({ theme }) => theme.colors.yellow[500]};
      width: 10rem;
      float: right;
      cursor: pointer;
      transition: all 0.3s ease-in-out;
      &:hover {
        background-color: ${({ theme }) => theme.colors.yellow[600]};
      }
      :focus {
        outline: 2px solid ${({ theme }) => theme.colors.yellow[600]};
      }
    }
  }
`;

export const Box = styled.div`
  padding: 2rem;
  align-items: center;
  justify-content: center;
  background-color: ${({ theme }) => theme.colors.gray[800]};
  color: ${({ theme }) => theme.colors.gray[100]};
  border-radius: 4px;
  padding: 1rem;    
`;

export const FormControl = styled.div`
  display: block;
  align-items: center;
  justify-content: center;
  gap: 1rem;  
`;