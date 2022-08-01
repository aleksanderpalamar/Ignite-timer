import styled from "styled-components";

export const LayoutContainer = styled.div`
  max-width: 74rem;
  height: calc(100vh - 10rem);
  margin: 5rem auto;
  padding: 2.5rem;
  background-color: ${({ theme }) => theme.colors.gray[800]};
  border-radius: 0.5rem;

  @media (max-width: ${(props) => props.theme.breakpoints.md}) {
    flex-direction: column;
    align-items: center;
    margin: 5rem auto;
  }

  display: flex;
  flex-direction: column;
`;
