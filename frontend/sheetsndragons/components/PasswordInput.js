import React from "react";
import styled from "styled-components";

const Input = styled.input`
  border: 1px solid #E4A76E;
  border-radius: 4px;
  width: 100%;

  :focus{
    outline: none !important;
    border: 2px solid #E4A76E;
  }
`

const PasswordInput = ({ id, label }) => {
  return (
    <>
      <label htmlFor={id}>{label}</label><br />
      <Input type="password" id={id} name={id} />
    </>
  )
}

export default PasswordInput;