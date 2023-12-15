import styled from "styled-components";
import { ButtonProps } from "./../interfaces/button";

export default styled.button<ButtonProps>`
  padding: 10px 20px; 
  background-color: #4CAF50; 
  color: white; 
  border: none; 
  border-radius: 5px;
  font-size: 16px; 
  cursor: pointer; 
  border: 0;
  &:hover {
    background-color: #45a049
  }
`;