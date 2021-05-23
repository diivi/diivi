import styled from "styled-components";
import { NavLink as Link } from "react-router-dom";

export const Nav = styled.nav`
  background: transparent;
  height: 10vh;
  display: flex;
  justify-content: flex-end;
  padding: 1% 3%;
  z-index: 12;
  /* Third Nav */
  /* justify-content: flex-start; */
  @media only screen and (max-width: 1000px) {
    justify-content: center;
  }
`;

export const NavLink = styled(Link)`
  color: ${({ theme }) => theme.navLinks};
  display: flex;
  align-items: center;
  text-decoration: none;
  padding: 0 1rem;
  height: 100%;
  cursor: pointer;
  font-size: 24px;
  margin-left: 60px;
  transition: 0.1s linear;
  &:hover {
    color: ${({ theme }) => theme.navLinksHover};
  }
  &.active {
    color: ${({ theme }) => theme.navLinksHover};
  }
  @media only screen and (max-width: 1000px) {
    font-size: 14px;
    margin-left: 5px;
    &:first-child {
      margin-left: 0px;
    }
  }
`;

export const NavMenu = styled.div`
  display: flex;
  align-items: center;
`;

export default Nav;
