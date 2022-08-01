import styled from "styled-components";

export const CountdownContainer = styled.div`
  font-family: "Roboto", sans-serif;
  font-size: ${({ theme }) => theme.fontSizes["10xl"]};
  line-height: 8rem;
  color: ${({ theme }) => theme.colors.gray[100]};
  display: flex;
  gap: 1rem;

  @media (min-width: ${({ theme }) => theme.breakpoints.xs}) {
    font-size: ${({ theme }) => theme.fontSizes["7xl"]};
    line-height: 6rem;    
  }

  span {
    background: ${({ theme }) => theme.colors.gray[700]};
    padding: 2rem 1rem;
    border-radius: 8px;
  }
`;

export const Separator = styled.div`
  padding: 2rem 0;
  color: ${({ theme }) => theme.colors.yellow[500]};
  display: flex;
  overflow: hidden;
  justify-content: center;
`;