import React from "react";
import InputBox from "./InputBox";
import SocialMedia from "./SocialMedia";
import SignInDown from "./SignInDown";

const LoginPage = () => {
  const inputTitle = "Sign in for your exciting journey";
  const buttonTitle = "Sign in";
  return (
    <>
      <InputBox passShown inputTitle={inputTitle} buttonTitle={buttonTitle} />
      <SocialMedia />
      <SignInDown />
    </>
  );
};

export default LoginPage;
