import { styled } from 'styled-components';

const ProductWrapper = styled.div`
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  border-radius: 5px;
  padding: 20px 20px 10px;
  transition: 0.3s;
  border-top: 1px solid #8080801f;

  .delete-checkbox {
    margin-bottom: 10px;
  }

  h3,
  p {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding-bottom: 15px;
    font-size: 14px;
    font-weight: 500;
    color: ${({ theme }) => theme.colors.textLight};

    span {
      &:first-of-type {
        align-self: flex-start;
      }

      &:last-of-type {
        text-align: right;
        width: 75%;
        font-weight: 600;
        color: ${({ theme }) => theme.colors.text};
      }
    }
  }
`;

export { ProductWrapper };
