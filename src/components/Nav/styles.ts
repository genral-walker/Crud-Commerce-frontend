import { styled } from 'styled-components';

const NavWrapper = styled.nav`
  box-shadow: 0 2px 2px -2px rgba(0, 0, 0, 0.2);
  height: 60px;
  display: flex;
  align-items: center;
  padding-inline: 35px;
  position: sticky;
  top: 0;
  background-color: white;
  z-index: 100;
  @media only screen and (max-width: 370px) {
    padding-inline: 17px;
  }

  h3 {
    color: ${({ theme }) => theme.colors.secondary};
    font-size: 20px;
    font-weight: 700;
    cursor: pointer;
  }
`;

export { NavWrapper };
