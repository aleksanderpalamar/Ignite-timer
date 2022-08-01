import styled from "styled-components";

export const FormContainer = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
  color: ${({ theme }) => theme.colors.gray[100]};
  font-size: ${({ theme }) => theme.fontSizes.lg};
  font-weight: ${({ theme }) => theme.fontWeights.bold};
  flex-wrap: wrap;
  
  @media (min-width: ${({ theme }) => theme.breakpoints.xs}) {
    gap: 0.5rem;
    flex-wrap: wrap;
    align-items: center;
    justify-content: flex-start;
  }
`;

const BaseInput = styled.input`
  background: transparent;
  height: 2.5rem;
  border: 0;
  border-bottom: 2px solid ${({ theme }) => theme.colors.gray[500]};
  font-weight: ${({ theme }) => theme.fontWeights.bold};
  font-size: ${({ theme }) => theme.fontSizes.lg};
  padding: 0 0.5rem;
  color: ${({ theme }) => theme.colors.gray[100]};

  &:focus {
    box-shadow: none;
    outline: none;
    border-color: ${({ theme }) => theme.colors.yellow[500]};
  }

  &::placeholder {
    color: ${({ theme }) => theme.colors.gray[500]};
  }
`;

export const TaskInput = styled(BaseInput)`
  flex: 1;

  &::-webkit-calendar-picker-indicator {
    display: none !important;
  }
`;

export const MinutesAmount = styled(BaseInput)`
  width: 4rem;
`;