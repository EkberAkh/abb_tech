import React from 'react'
import InputBox from './InputBox';

const ForgotPass = () => {
    const inputTitle = 'Looking to change your password?';
    const buttonTitle = 'Reset my password';

  return (
    <>
    <InputBox paragraphShown  inputTitle={inputTitle} buttonTitle={buttonTitle} />
  </>
  )
}

export default ForgotPass