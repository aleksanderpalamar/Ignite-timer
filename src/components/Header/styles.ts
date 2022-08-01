import styled from "styled-components";

export const HeaderContainer = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;

  img {
    width: 40px;
    height: 40px;
  }  

  nav {
    display: flex;
    gap: 0.5rem;

    a {
      width: 3rem;
      height: 3rem;

      align-items: center;
      justify-content: center;
      display: flex;

      color: ${({ theme }) => theme.colors.gray[100]};
      border-top: 3px solid transparent;
      border-bottom: 3px solid transparent;

      &:hover {
        border-bottom: 3px solid ${({ theme }) => theme.colors.yellow["500"]};
      }
      &.active {
        color: ${({ theme }) => theme.colors.yellow["500"]};
      }
    }    
  }
`;
