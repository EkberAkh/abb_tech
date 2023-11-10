import React from 'react';
import SocialMedia from './SocialMedia';
import SignInDown from './SignInDown';
import InputBox from './InputBox';

const CreateAcc = () => {
    const inputTitle = 'Create an account to start trip planning'
    const buttonTitle = 'Start trip planning'
  return (
   
    <>
    <InputBox inputTitle={inputTitle} buttonTitle={buttonTitle} />
    <SocialMedia/>
    <SignInDown terms/>
    
    </>
  )
}

export default CreateAcc