import { styled } from 'styled-components';

const ProductListWrapper = styled.div`
  padding: 30px 35px;
  @media only screen and (max-width: 370px) {
    padding: 30px 17px;
  }

  & > div {
    border-bottom: 1.8px solid #e7e3e3;
    padding-bottom: 10px;
    display: flex;
    align-items: center;
    @media only screen and (max-width: 500px) {
      flex-direction: column;
      align-items: start;
    }

    h2 {
      font-weight: 600;
    }

    & > div {
      display: flex;
      align-items: center;
      margin-left: auto;
      @media only screen and (max-width: 500px) {
        margin-left: 0;
        margin-top: 10px;
      }

      button {
        background-color: ${({ theme }) => theme.colors.secondary};
        color: white;
        font-weight: 500;
        transition: background-color 150ms ease-out;

        &:first-of-type {
          margin-right: 20px;
          @media only screen and (max-width: 340px) {
            margin-right: 10px;
          }

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
  }

  & > main {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    grid-row-gap: 35px;
    grid-column-gap: 50px;
    padding: 40px 0 50px;

    @media only screen and (max-width: 1300px) {
      grid-template-columns: repeat(3, 1fr);
    }
    @media only screen and (max-width: 1000px) {
      grid-template-columns: repeat(2, 1fr);
    }
    @media only screen and (max-width: 700px) {
      grid-template-columns: 1fr;
    }
  }
`;

export { ProductListWrapper };
