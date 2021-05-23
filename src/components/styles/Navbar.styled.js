import styled from "styled-components";
import { FaBars } from "react-icons/fa";
import { NavLink as Link } from "react-router-dom";

export const Nav = styled.nav`
  background: transparent;
  height: 85px;
  display: flex;
  justify-content: flex-end;
  padding: 1% 3%;
  z-index: 12;
  /* Third Nav */
  /* justify-content: flex-start; */
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
`;

export const Bars = styled(FaBars)`
  display: none;
  color: #808080;
  @media screen and (max-width: 768px) {
    display: block;
    position: absolute;
    top: 0;
    right: 0;
    transform: translate(-100%, 75%);
    font-size: 1.8rem;
    cursor: pointer;
  }
`;

export const NavMenu = styled.div`
  display: flex;
  align-items: center;
`;


export default Nav;
