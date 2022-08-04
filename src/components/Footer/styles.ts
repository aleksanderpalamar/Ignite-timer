import styled from "styled-components";

export const FooterContainer = styled.footer`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  width: 100%;
  border-top: 1px solid ${({ theme }) => theme.colors.gray[500]};
  margin-top: 8rem;

  span {
    font-size: ${({ theme }) => theme.fontSizes.xs};
    color: ${({ theme }) => theme.colors.gray[300]};
    margin-top: 1rem;

    a {
      color: ${({ theme }) => theme.colors.gray[300]};
      text-decoration: none;
      font-weight: ${({ theme }) => theme.fontWeights.bold};

      &:hover {
        border-bottom: 1px solid ${({ theme }) => theme.colors.gray[300]};
        transition: all 0.4s ease-in-out;
      }
    }
  }
`;
