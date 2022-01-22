import styled from "styled-components";

export const Button = styled.button`
  background-color: ${({ bg }) => bg || "#fff"};
  color: ${({ color }) => color || "#e3e3e3"};
  padding: 1.5rem 5rem;
  box-shadow: 0 0 1rem rgba(0, 0, 0, 0.15);
  border-radius: 100%;
  border: none;
  font-size: 1.5rem;
  font-weight: 700;
  cursor: pointer;
  transition: all 0.2s;

  &:hover {
    transform: scale(0.98);
  }
`;
