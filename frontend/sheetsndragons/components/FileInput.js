import React from "react";
import styled from "styled-components";

const Input = styled.input`

`

const FileInput = ({accept}) => {
  return(
    <Input type="file" accept={accept} />
  )
}

export default FileInput;