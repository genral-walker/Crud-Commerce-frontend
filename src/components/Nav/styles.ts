import { styled } from 'styled-components';

const NavWrapper = styled.nav`
  box-shadow: 0 2px 2px -2px rgba(0, 0, 0, 0.2);
  height: 60px;
  display: flex;
  align-items: center;
  padding-inline: 35px;

  h3 {
    color: ${({ theme }) => theme.colors.secondary};
    font-size: 20px;
    font-weight: 700;
  }
`;

export { NavWrapper };
