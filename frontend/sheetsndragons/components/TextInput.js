import React from "react";
import styled from "styled-components";

const Wrapper = styled.div`
  margin: 10px;
  ${props => {if(props.width) return `width: ${props.width};`; else return `width: 100%;`}}
`

const Input = styled.input`
  border: 1px solid #E4A76E;
  border-radius: 8px;
  width: 100%;
  height: 30px;
  margin: 10px 0;
  padding: 0 10px;

  :focus{
    outline: none !important;
    border: 2px solid #E4A76E;
  }
`

const TextInput = ({ id, label, onChange, width }) => {
  return (
    <Wrapper width={width}>
      <label htmlFor={id}>{label}</label><br />
      <Input type="text" id={id} name={id} onChange={onChange}/>
    </Wrapper>
  )
}

export default TextInput;