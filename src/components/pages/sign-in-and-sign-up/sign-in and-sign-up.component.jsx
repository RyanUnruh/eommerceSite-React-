import React from "react";
import "./sign-in-and-sign-up.scss";
import SignIn from "../../sign-in/sign-in.component";
import SignUp from "../../sign-up/sign-up.component";

const SignInSignOut = () => {
  return (
    <div className="Sign-in-and-sign-out">
      <SignIn />
      <SignUp />
    </div>
  );
};

export default SignInSignOut;
