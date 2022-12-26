import React from 'react';
import { InputContainer } from './style';

 function Input({value, onChange}) {
  return (
    <InputContainer>
        <input placeholder='user/repositoryname | Ex: Jhon/test1' value={value} onChange={onChange}/>
    </InputContainer>
  )
}

export default Input
