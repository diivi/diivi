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
  margin-left:60px;

  svg {
    height: 2rem;
    width: auto;
    transition: all 0.3s linear;

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