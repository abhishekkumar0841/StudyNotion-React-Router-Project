import React from "react";
import Templete from "../components/Templete";
import signupImg from '../assets/signup.png'

const SignUp = ({setIsLoggedIn}) => {
  return (
    <Templete
      title="Join the millions of learning today"
      desc1="Build skills for today, tomorrow, and beyond"
      desc2="Education to future proof your career"
      image={signupImg}
      formType="signUp"
      setIsLoggedIn={setIsLoggedIn}
    />
  );
};

export default SignUp;
