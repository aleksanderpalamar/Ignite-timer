import styled from "styled-components";

export const HistoryContainer = styled.main`
  flex: 1;
  padding: 3.5rem;
  display: flex;
  flex-direction: column;

  h1 {
    font-size: ${({ theme }) => theme.fontSizes["2xl"]};
    color: ${({ theme }) => theme.colors.gray[100]};
  }

  @media (min-width: ${({ theme }) => theme.breakpoints.sm}) {
    h1 {
      font-size: ${({ theme }) => theme.fontSizes["xl"]};
    }
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.lg}) {
    h1 {
      font-size: ${({ theme }) => theme.fontSizes["2xl"]};
    }
  }
`;

export const HistoryList = styled.div`
  flex: 1;
  overflow: auto;
  margin-top: 2rem;

  table {
    width: 100%;
    border-collapse: collapse;
    min-width: 280px;

    th {
      background-color: ${({ theme }) => theme.colors.gray[600]};
      padding: 1rem;
      text-align: left;
      color: ${({ theme }) => theme.colors.gray[100]};
      font-size: ${({ theme }) => theme.fontSizes.md};
      line-height: ${({ theme }) => theme.lineHeights.base};

      &:first-child {
        border-top-left-radius: 8px;
        padding-left: 1.5rem;
      }
      &:last-child {
        border-top-right-radius: 8px;
        padding-right: 1.5rem;
      }
    }

    td {
      background-color: ${({ theme }) => theme.colors.gray[700]};
      border-top: 4px solid ${({ theme }) => theme.colors.gray[800]};
      padding: 1rem;
      font-size: ${({ theme }) => theme.fontSizes.sm};
      line-height: ${({ theme }) => theme.lineHeights.base};

      &:first-child {
        width: 50%;
        padding-left: 1.5rem;
      }
      &:last-child {
        padding-right: 1.5rem;
      }

      @media (min-width: ${({ theme }) => theme.breakpoints.xs}) {
        font-size: ${({ theme }) => theme.fontSizes.xs};
        line-height: ${({ theme }) => theme.lineHeights.shorter};

        &:first-child {
          width: 25%;
          padding-left: 1.5rem;
        }
        &:last-child {
          padding-right: 1.5rem;
        }
      }
    }
  }
`;

const STATUS_COLORS = {
  yellow: "#FFCF00",
  green: "#04D361",
  red: "#f03847",
} as const;

interface StatusProps {
  statusColor: keyof typeof STATUS_COLORS;
}

export const Status = styled.span<StatusProps>`
  display: flex;
  align-items: center;
  gap: 0.5rem;

  &::before {
    content: "";
    width: 0.5rem;
    height: 0.5rem;
    border-radius: 50%;
    background: ${({ statusColor }) => STATUS_COLORS[statusColor]};
  }
`;
