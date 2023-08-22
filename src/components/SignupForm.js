import React, { useState } from "react";
import { toast } from "react-hot-toast";
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai";
import { useNavigate } from "react-router-dom";

const SignupForm = ({ setIsLoggedIn }) => {
  const navigate = useNavigate();
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [accountType , setAccountType] = useState("student")

  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  function changeHandler(e) {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  }

  function submitHandler(e) {
    e.preventDefault();
    if (formData.password !== formData.confirmPassword) {
      toast.error("Password not matched");
      return;
    } else {
      setIsLoggedIn(true);
      toast.success("Account Created");
      navigate("/dashboard");
      const finalData = {
        ...formData,
        accountType
      }
      console.log(finalData);
    }
  }

  return (
    <div>
      {/* student instructor buttons */}
      <div className=" bg-yellow-50 font-bold flex items-center justify-around w-1/2 rounded-md p-1">
        <button onClick={()=> setAccountType("student")} className={`${accountType === 'student' ? 'rounded-md p-1.5 bg-black text-white' : 'rounded-md p-1.5 bg-yellow-50 transition-all duration-200'}`}>Student</button>

        <button onClick={()=> setAccountType("instructor")} className={`${accountType === 'instructor' ? 'rounded-md p-1.5 bg-black text-white' : 'rounded-md p-1.5 bg-yellow-50 transition-all duration-200'}`}>Instructor</button>
      </div>

      <form className="w-full flex flex-col" onSubmit={submitHandler}>
        <div className="flex gap-4">
          <label className="w-1/2">
            <p className="text-white">
              First Name <sup>*</sup>
            </p>
            <input
              className="w-full bg-transparent border outline-none text-white p-2"
              type="text"
              required
              name="firstName"
              placeholder="Enter First Name"
              value={formData.firstName}
              onChange={changeHandler}
            />
          </label>

          <label className="w-1/2">
            <p className="text-white">
              Last Name <sup>*</sup>
            </p>
            <input
              className="w-full bg-transparent border outline-none text-white p-2"
              type="text"
              required
              name="lastName"
              placeholder="Enter Last Name"
              value={formData.lastName}
              onChange={changeHandler}
            />
          </label>
        </div>

        <div>
          <label>
            <p className="text-white">
              Enter Email <sup>*</sup>
            </p>
            <input
              className="w-full bg-transparent border outline-none text-white p-2"
              type="email"
              required
              name="email"
              placeholder="Enter Your email"
              value={formData.email}
              onChange={changeHandler}
            />
          </label>
        </div>
        <div className="flex gap-4">
          <label className="w-1/2 relative">
            <p className="text-white">
              Create Password <sup>*</sup>
            </p>
            <input
              className="w-full  bg-transparent border outline-none text-white p-2"
              type={showPassword ? "text" : "password"}
              required
              name="password"
              placeholder="Create password"
              value={formData.password}
              onChange={changeHandler}
            />
            <span className="text-white absolute text-xl top-9 right-1" onClick={() => setShowPassword((prev) => !prev)}>
              {showPassword ? <AiOutlineEyeInvisible /> : <AiOutlineEye />}
            </span>
          </label>
          <label className="w-1/2 relative">
            <p className="text-white">
              Confirm Password <sup>*</sup>
            </p>
            <input
              className="w-full bg-transparent border outline-none text-white p-2"
              type={showConfirmPassword ? "text" : "password"}
              required
              name="confirmPassword"
              placeholder="Confirm password"
              value={formData.confirmPassword}
              onChange={changeHandler}
            />
            <span className="text-white absolute text-xl top-9 right-1" onClick={() => setShowConfirmPassword((prev) => !prev)}>
              {showConfirmPassword ? <AiOutlineEyeInvisible /> : <AiOutlineEye />}
            </span>
          </label>
        </div>
        <button className="text-black font-bold bg-yellow-50 mt-2">
          Create Account
        </button>
      </form>
    </div>
  );
};

export default SignupForm;
