import { styled } from 'styled-components';

const ProductListWrapper = styled.div`
  padding: 30px 35px;

  & > div {
    border-bottom: 1.8px solid #e7e3e3;
    padding-bottom: 10px;
    display: flex;
    align-items: center;

    h2 {
      font-weight: 600;
    }

    button {
      background-color: ${({ theme }) => theme.colors.secondary};
      color: white;
      font-weight: 500;
      transition: background-color 150ms ease-out;

      &:first-of-type {
        margin-left: auto;
        margin-right: 20px;

        &:hover {
          background-color: #159b15;
        }
      }

      &:last-of-type {
        &:hover {
          background-color: #eb4141;
        }
      }
    }
  }
`;

export { ProductListWrapper };
