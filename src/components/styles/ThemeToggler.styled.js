import styled from "styled-components";

const Toggler = styled.button`
  background: ${({ theme }) => theme.toggleBg};
  border: none;
  border-radius: 30px;
  cursor: pointer;
  display: flex;
  font-size: 0.2rem;
  justify-content: space-between;
  overflow: hidden;
  padding: 0.5rem;
  position: relative;
  width: 6rem;
  height: 3rem;
  margin-left: 60px;
  @media only screen and (max-width: 1000px) {
    border-radius: 30px;
    height: 2rem;
    width: 4rem;
    margin-left:5px
  }

  svg {
    height: 2rem;
    width: auto;
    transition: all 0.3s linear;

    @media only screen and (max-width: 1000px) {
      height: 1rem;
    }
    &:first-child {
      transform: ${({ lightTheme }) =>
        lightTheme ? "translateY(0)" : "translateY(100px)"};
    }

    &:nth-child(2) {
      transform: ${({ lightTheme }) =>
        lightTheme ? "translateY(-100px)" : "translateY(0)"};
    }
  }
`;

export default Toggler;