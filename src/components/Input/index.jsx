import React from 'react'
import { Button } from "../Button";
import { IconContainer, InputText, InputContainer } from "./styles";

const Input = ({leftIcon, name, ...rest}) => {
  return (
    <InputContainer>
        {leftIcon ? (<IconContainer>{leftIcon}</IconContainer>) : null}
        <InputText {...rest}/>
    </InputContainer>
  )
}


export { Input };