import { styled } from 'styled-components';

const NewProductWrapper = styled.div`
  padding: 30px 35px;
  @media only screen and (max-width: 370px) {
    padding: 30px 17px;
  }

  h2 {
    border-bottom: 1.8px solid #e7e3e3;
    padding-bottom: 10px;
    margin-top: 4px;
    font-weight: 600;
  }

  #product_form {
    margin: 40px 0 50px;
    padding: 25px;
    border: 1.8px solid #e7e3e3;
    border-radius: 6px;
    margin-inline: auto;
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-column-gap: 30px;
    grid-row-gap: 25px;
    @media only screen and (max-width: 900px) {
      grid-template-columns: repeat(2, 1fr);
    }
    @media only screen and (max-width: 600px) {
      grid-template-columns: 1fr;
    }
    @media only screen and (max-width: 500px) {
      padding: 15px;
    }
    @media only screen and (max-width: 380px) {
      padding: 15px 10px;
    }

    & > div {
      p {
        font-weight: 500;
        color: ${({ theme }) => theme.colors.textLight};
      }

      input,
      select {
        border: 1.8px solid #e7e3e3;
        margin-top: 6px;
        width: 100%;

        &::placeholder {
          color: ${({ theme }) => theme.colors.textLight};
          font-size: 13px !important;
        }
      }
    }

    & > div:last-of-type {
      grid-column: 1/ -1;
      display: flex;

      button {
        background-color: ${({ theme }) => theme.colors.secondary};
        color: white;
        font-weight: 500;
        font-size: 15px;
        transition: background-color 150ms ease-out;
        &:hover {
          background-color: #eb4141;
        }

        &:first-of-type {
          margin-left: auto;
          margin-right: 20px;
          @media only screen and (max-width: 340px) {
            margin-right: 10px;
          }

          &:hover {
            background-color: #159b15;
          }
        }
      }
    }
  }
`;

export { NewProductWrapper };
