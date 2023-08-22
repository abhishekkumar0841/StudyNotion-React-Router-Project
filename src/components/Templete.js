import React from "react";
import frameImage from "../assets/frame.png";
import LoginForm from "./LoginForm";
import SignupForm from "./SignupForm";

const Templete = ({ title, desc1, desc2, image, formType, setIsLoggedIn }) => {
  return (
    <div className=" flex justify-between w-11/12 m-auto h-5/6 items-center">
      <div className="flex flex-col max-w-[400px] justify-center">
        <h1 className="text-white text-4xl font-bold">{title}</h1>
        <p className="text-white">
          <span>{desc1}</span>
          <span>{desc2}</span>
        </p>
        {formType === "signUp" ? (
          <SignupForm setIsLoggedIn={setIsLoggedIn} />
        ) : (
          <LoginForm setIsLoggedIn={setIsLoggedIn} />
        )}

        <div className="flex justify-center items-center w-full gap-2">
          <div className=" h-[2px] bg-white w-1/2"></div>
          <p className="text-white">OR</p>
          <div className=" h-[2px] bg-white w-1/2"></div>
        </div>

        <button className="border p-2">
          <p className="text-white">Sign Up With Google</p>
        </button>
      </div>

      <div className=" relative w-[400px] h-[400px] ">
        <img
          className=" w-full"
          src={frameImage}
          alt="Pattern"
          loading="lazy"
        />
        <img
          className="w-full absolute top-[-10px] right-[10px]"
          src={image}
          alt="Pattern"
          loading="lazy"
        />
      </div>
    </div>
  );
};

export default Templete;
