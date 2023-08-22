import React, { useState } from "react";
import { toast } from "react-hot-toast";
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai";
import { Link, useNavigate } from "react-router-dom";

const LoginForm = ({ setIsLoggedIn }) => {
  const navigate = useNavigate();
  const [showPassword, setShowPassword] = useState(false);

  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  function changeHandler(e) {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  }

  function submitHandler(e) {
    e.preventDefault();
    setIsLoggedIn(true);
    toast.success("Logged In");
    navigate("/dashboard");
    console.log(formData)
  }

  return (
    <form className="w-full flex flex-col" onSubmit={submitHandler}>
      <label>
        <p className="text-white">
          Enter Your Email <sup>*</sup>
        </p>
        <input
          className="w-full bg-transparent border outline-none text-white p-2"
          required
          type="email"
          value={formData.email}
          name="email"
          placeholder="enter your email"
          onChange={changeHandler}
        />
      </label>

      <label className="relative">
        <p className="text-white">
          Enter Your Password <sup>*</sup>
        </p>
        <input
          className="w-full bg-transparent border outline-none text-white p-2 "
          required
          type={showPassword ? "text" : "password"}
          value={formData.password}
          name="password"
          placeholder="enter your password"
          onChange={changeHandler}
        />
        <span
          className="text-white text-2xl absolute right-1 bottom-1.5 cursor-pointer"
          onClick={() => setShowPassword((prev) => !prev)}
        >
          {showPassword ? <AiOutlineEyeInvisible /> : <AiOutlineEye />}
        </span>
      </label>

      <Link>
        <p className="text-white">Forgot Password</p>
      </Link>

      <button className="text-black font-bold bg-yellow-50">Sign In</button>
    </form>
  );
};

export default LoginForm;
