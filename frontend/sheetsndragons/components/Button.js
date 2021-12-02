import React from "react";
import styled from "styled-components";

const StyledButton = styled.button`
  border-radius: 8px;
  border: none;
  cursor: pointer;
  ${props => { if (props.width) return `width: ${props.width};`; else return `width: 100%;` }}
  padding: 2px 4px;
  margin: 5px;
  height: 30px;

  transition: 0.2s;

  // :hover{
  //   transform: translate(-2px, -2px);
  // }

  ${props => {
    if (props.backgroundColor) {
      if (props.backgroundColor == "primary") return `background-color: #E4A76E; color: white;`;
      else if (props.backgroundColor == "secondary") return `background-color: #fff; color: black;`;
      else return `background-color:${props.backgroundColor};`
    }
  }}

`

const Button = ({ backgroundColor, onClick, children, width }) => {
  return (
    <StyledButton backgroundColor={backgroundColor} onClick={onClick} width={width}>
      {children}
    </StyledButton>
  )
}

export default Button;