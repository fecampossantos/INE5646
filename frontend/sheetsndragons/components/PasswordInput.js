import React, {useState} from 'react';
import styled from "styled-components";
import { ClosedEyeIcon, OpenEyeIcon } from 'components/icons';

const Wrapper = styled.div`
  margin: 10px;
  ${props => { if (props.width) return `width: ${props.width};`; else return `width: 100%;` }}
`

const IconWrapper = styled.i`
  position: absolute;
  top: 25%;
  right: 3%;
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

const PasswordWrapper = styled.div`
  position: relative;
  display: flex;
  margin-bottom: 14px;
`

const PasswordInput = ({ id, label, onChange, width }) => {
  const [isPasswordVisible, setPasswordVisible] = useState(false);

  const handlePasswordVisibility = () => {
    setPasswordVisible(!isPasswordVisible)
  }

  return (
    <Wrapper width={width}>
      <label htmlFor={id}>{label}</label><br />
      <PasswordWrapper>
        <Input id={id} name={id} onChange={onChange} type={isPasswordVisible ? "text" : "password"}></Input>
        <IconWrapper>
        {isPasswordVisible ?
          <ClosedEyeIcon primary onClick={handlePasswordVisibility} />
          :
          <OpenEyeIcon primary onClick={handlePasswordVisibility} />
        }
        </IconWrapper>
      </PasswordWrapper>
    </Wrapper>
  )
}

export default PasswordInput;